<?php
/**
 * GET /api/subjects.php
 * Returns every subject in the Notes and Past Papers Bank.
 * Optional query params: dept, sem, q (search across code and name).
 */

require __DIR__ . "/../config/database.php";
require __DIR__ . "/../config/cors.php";

studentLifeBootstrap(["GET"]);

try {
    $db = studentLifeDb();
    $sql = "SELECT code, name, dept, sem FROM subjects WHERE 1=1";
    $params = [];

    if (!empty($_GET["dept"]) && $_GET["dept"] !== "all") {
        $sql .= " AND dept = :dept";
        $params["dept"] = $_GET["dept"];
    }
    if (!empty($_GET["sem"]) && $_GET["sem"] !== "all") {
        $sql .= " AND sem = :sem";
        $params["sem"] = (int) $_GET["sem"];
    }
    if (!empty($_GET["q"])) {
        $sql .= " AND (code LIKE :q OR name LIKE :q)";
        $params["q"] = "%" . $_GET["q"] . "%";
    }

    $sql .= " ORDER BY dept ASC, sem ASC, code ASC";

    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $rows = $stmt->fetchAll();

    $subjects = array_map(function ($row) {
        return [
            "code" => $row["code"],
            "name" => $row["name"],
            "dept" => $row["dept"],
            "sem" => (int) $row["sem"]
        ];
    }, $rows);

    studentLifeSendJson($subjects);
} catch (Throwable $e) {
    studentLifeSendJson(["error" => "Could not load subjects"], 500);
}
