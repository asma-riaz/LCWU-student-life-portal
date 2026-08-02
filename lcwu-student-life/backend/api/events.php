<?php
/**
 * GET /api/events.php
 * Returns upcoming events for the Social Life and Fun Zone section,
 * soonest first.
 */

require __DIR__ . "/../config/database.php";
require __DIR__ . "/../config/cors.php";

studentLifeBootstrap(["GET"]);

try {
    $db = studentLifeDb();
    $rows = $db->query(
        "SELECT id, club, title, venue, event_date, tag, description, image
         FROM events
         WHERE event_date >= CURDATE()
         ORDER BY event_date ASC"
    )->fetchAll();

    $events = array_map(function ($row) {
        $date = new DateTime($row["event_date"]);
        return [
            "id" => (int) $row["id"],
            "club" => $row["club"],
            "title" => $row["title"],
            "venue" => $row["venue"],
            "day" => $date->format("d"),
            "month" => $date->format("M"),
            "tag" => $row["tag"],
            "desc" => $row["description"],
            "image" => $row["image"]
        ];
    }, $rows);

    studentLifeSendJson($events);
} catch (Throwable $e) {
    studentLifeSendJson(["error" => "Could not load events"], 500);
}
