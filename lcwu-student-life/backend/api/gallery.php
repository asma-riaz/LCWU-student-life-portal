<?php
/**
 * GET /api/gallery.php
 * Returns every photo in the Student Gallery.
 * Optional query param: cat (filter by category).
 */

require __DIR__ . "/../config/database.php";
require __DIR__ . "/../config/cors.php";

studentLifeBootstrap(["GET"]);

try {
    $db = studentLifeDb();
    $sql = "SELECT category, image, caption FROM gallery_images WHERE 1=1";
    $params = [];

    if (!empty($_GET["cat"]) && $_GET["cat"] !== "all") {
        $sql .= " AND category = :cat";
        $params["cat"] = $_GET["cat"];
    }

    $sql .= " ORDER BY id ASC";

    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $rows = $stmt->fetchAll();

    $images = array_map(function ($row) {
        return [
            "cat" => $row["category"],
            "src" => $row["image"],
            "caption" => $row["caption"]
        ];
    }, $rows);

    studentLifeSendJson($images);
} catch (Throwable $e) {
    studentLifeSendJson(["error" => "Could not load gallery images"], 500);
}
