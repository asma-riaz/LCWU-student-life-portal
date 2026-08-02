<?php
/**
 * GET /api/fyp.php
 * Returns every archived final year project, newest first.
 */

require __DIR__ . "/../config/database.php";
require __DIR__ . "/../config/cors.php";

studentLifeBootstrap(["GET"]);

try {
    $db = studentLifeDb();
    $rows = $db->query(
        "SELECT title, dept, year, students, supervisor, tech, description
         FROM fyp_projects
         ORDER BY year DESC, title ASC"
    )->fetchAll();

    $projects = array_map(function ($row) {
        return [
            "title" => $row["title"],
            "dept" => $row["dept"],
            "year" => (int) $row["year"],
            "students" => json_decode($row["students"], true) ?: [],
            "supervisor" => $row["supervisor"],
            "tech" => json_decode($row["tech"], true) ?: [],
            "desc" => $row["description"]
        ];
    }, $rows);

    studentLifeSendJson($projects);
} catch (Throwable $e) {
    studentLifeSendJson(["error" => "Could not load final year projects"], 500);
}
