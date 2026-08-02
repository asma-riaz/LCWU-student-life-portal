<?php
/**
 * GET /api/testimonials.php
 * Returns approved student testimonials, most recent first.
 */

require __DIR__ . "/../config/database.php";
require __DIR__ . "/../config/cors.php";

studentLifeBootstrap(["GET"]);

try {
    $db = studentLifeDb();
    $rows = $db->query(
        "SELECT initials, name, department, quote
         FROM testimonials
         WHERE is_approved = 1
         ORDER BY id DESC"
    )->fetchAll();

    $testimonials = array_map(function ($row) {
        return [
            "initials" => $row["initials"],
            "name" => $row["name"],
            "dept" => $row["department"],
            "quote" => $row["quote"]
        ];
    }, $rows);

    studentLifeSendJson($testimonials);
} catch (Throwable $e) {
    studentLifeSendJson(["error" => "Could not load testimonials"], 500);
}
