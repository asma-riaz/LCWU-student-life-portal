<?php
/**
 * Shared bootstrap for every endpoint under /api. Sends CORS
 * headers, sets the JSON content type, and answers preflight
 * requests, so each endpoint file only has to handle its own
 * request logic.
 */

function studentLifeAllowedOrigin(): string
{
    // In production, replace the star with the deployed frontend
    // origin, for example https://studentlife.lcwu.edu.pk
    return studentLifeEnv("CORS_ORIGIN", "*");
}

function studentLifeBootstrap(array $allowedMethods = ["GET"]): void
{
    header("Access-Control-Allow-Origin: " . studentLifeAllowedOrigin());
    header("Access-Control-Allow-Methods: " . implode(", ", array_merge($allowedMethods, ["OPTIONS"])));
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json; charset=utf-8");

    if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
        http_response_code(204);
        exit;
    }

    if (!in_array($_SERVER["REQUEST_METHOD"], $allowedMethods, true)) {
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
        exit;
    }
}

function studentLifeSendJson($data, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_SLASHES);
    exit;
}

function studentLifeReadJsonBody(): array
{
    $raw = file_get_contents("php://input");
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}
