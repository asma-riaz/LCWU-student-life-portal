<?php
/**
 * GET /api/health.php
 *
 * A plain language self check for the backend setup. Open this file
 * directly in your browser, for example:
 * http://localhost:8080/lcwu-website/lcwu-student-life/backend/api/health.php
 *
 * It reports exactly what is working and what is not, instead of the
 * generic error the other endpoints show, so setup problems like a
 * missing database or wrong password are easy to spot.
 */

require __DIR__ . "/../config/database.php";
require __DIR__ . "/../config/cors.php";

studentLifeBootstrap(["GET"]);

$report = [
    "php_version" => PHP_VERSION,
    "pdo_mysql_installed" => extension_loaded("pdo_mysql"),
    "checks" => []
];

$host = studentLifeEnv("DB_HOST", "127.0.0.1");
$port = studentLifeEnv("DB_PORT", "3306");
$name = studentLifeEnv("DB_NAME", "lcwu_student_life");
$user = studentLifeEnv("DB_USER", "root");

$report["using_connection"] = [
    "host" => $host,
    "port" => $port,
    "database" => $name,
    "user" => $user
];

if (!$report["pdo_mysql_installed"]) {
    $report["checks"][] = "FAIL: the pdo_mysql PHP extension is not enabled. In XAMPP, open php.ini and uncomment extension=pdo_mysql, then restart Apache.";
    studentLifeSendJson($report, 500);
}

try {
    $db = studentLifeDb();
    $report["checks"][] = "OK: connected to MySQL at {$host}:{$port} as user '{$user}'.";
} catch (Throwable $e) {
    $report["checks"][] = "FAIL: could not connect to MySQL. Raw error: " . $e->getMessage();
    $report["hint"] = "Check that MySQL is running in XAMPP, and that DB_USER and DB_PASS in your .env match a real MySQL user. If you have not set a .env, this is using the defaults: user 'root' with no password.";
    studentLifeSendJson($report, 500);
}

try {
    $stmt = $db->query("SHOW TABLES");
    $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    $expected = ["subjects", "fyp_projects", "gallery_images", "events", "food_spots", "testimonials", "contact_messages"];
    $missing = array_values(array_diff($expected, $tables));

    if (empty($tables)) {
        $report["checks"][] = "FAIL: connected to the '{$name}' database, but it has no tables yet.";
        $report["hint"] = "Import database/schema.sql, for example through phpMyAdmin, Import tab, choose the file, click Go.";
        studentLifeSendJson($report, 500);
    }

    if (!empty($missing)) {
        $report["checks"][] = "PARTIAL: some tables are missing: " . implode(", ", $missing);
        $report["hint"] = "Re-import database/schema.sql to recreate the missing tables.";
        studentLifeSendJson($report, 500);
    }

    $report["checks"][] = "OK: found all expected tables (" . implode(", ", $tables) . ").";

    $counts = [];
    foreach ($expected as $table) {
        $count = (int) $db->query("SELECT COUNT(*) FROM {$table}")->fetchColumn();
        $counts[$table] = $count;
    }
    $report["row_counts"] = $counts;

    if ($counts["food_spots"] === 0) {
        $report["checks"][] = "FAIL: the food_spots table exists but is empty, the demo data was not seeded.";
        $report["hint"] = "Re-import database/schema.sql, it both creates the tables and inserts the demo rows in one file.";
        studentLifeSendJson($report, 500);
    }

    $report["checks"][] = "OK: tables contain data, the backend is fully working.";
    $report["status"] = "healthy";
    studentLifeSendJson($report, 200);
} catch (Throwable $e) {
    $report["checks"][] = "FAIL: connected to MySQL, but the query failed: " . $e->getMessage();
    studentLifeSendJson($report, 500);
}
