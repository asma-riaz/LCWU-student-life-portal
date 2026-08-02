<?php
/**
 * Minimal .env loader, no external library needed.
 *
 * PHP does not read .env files on its own, that only happens with a
 * library such as vlucas/phpdotenv or with real server level
 * environment variables. Under XAMPP or plain Apache there is
 * usually neither, so this file reads backend/.env directly (if it
 * exists) and copies its values into getenv(), which is what
 * studentLifeEnv() in database.php checks.
 *
 * Safe to include more than once, and safe if .env does not exist,
 * in which case the app just falls back to the defaults already in
 * database.php.
 */

function studentLifeLoadEnv(): void
{
    static $loaded = false;
    if ($loaded) {
        return;
    }
    $loaded = true;

    $path = __DIR__ . "/../.env";
    if (!is_file($path) || !is_readable($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === "" || str_starts_with($line, "#")) {
            continue;
        }
        if (!str_contains($line, "=")) {
            continue;
        }
        [$key, $value] = explode("=", $line, 2);
        $key = trim($key);
        $value = trim($value);
        $value = trim($value, "\"'");

        if ($key !== "" && getenv($key) === false) {
            putenv("{$key}={$value}");
        }
    }
}

studentLifeLoadEnv();
