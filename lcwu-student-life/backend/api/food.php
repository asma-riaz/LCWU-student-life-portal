<?php
/**
 * GET /api/food.php
 * Returns every listing in the campus food guide, highest rated first.
 */

require __DIR__ . "/../config/database.php";
require __DIR__ . "/../config/cors.php";

studentLifeBootstrap(["GET"]);

try {
    $db = studentLifeDb();
    $rows = $db->query(
        "SELECT name, rating, description, price_range, hours, image
         FROM food_spots
         ORDER BY rating DESC, name ASC"
    )->fetchAll();

    $spots = array_map(function ($row) {
        return [
            "name" => $row["name"],
            "rating" => (float) $row["rating"],
            "desc" => $row["description"],
            "price" => $row["price_range"],
            "hours" => $row["hours"],
            "image" => $row["image"]
        ];
    }, $rows);

    studentLifeSendJson($spots);
} catch (Throwable $e) {
    studentLifeSendJson(["error" => "Could not load food spots"], 500);
}
