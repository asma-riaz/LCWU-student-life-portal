<?php
/**
 * Database connection helper.
 *
 * Reads connection details from environment variables when present,
 * and falls back to local development defaults otherwise. Copy
 * .env.example to .env and adjust the values, config/env.php below
 * reads that file automatically, no server setup needed.
 */

require_once __DIR__ . "/env.php";

function studentLifeEnv(string $key, string $default): string
{
    $value = getenv($key);
    return $value !== false && $value !== "" ? $value : $default;
}

function studentLifeDb(): PDO
{
    static $connection = null;

    if ($connection instanceof PDO) {
        return $connection;
    }

    $host = studentLifeEnv("DB_HOST", "127.0.0.1");
    $port = studentLifeEnv("DB_PORT", "3306");
    $name = studentLifeEnv("DB_NAME", "lcwu_student_life");
    $user = studentLifeEnv("DB_USER", "root");
    $pass = studentLifeEnv("DB_PASS", "");
    $charset = "utf8mb4";

    $dsn = "mysql:host={$host};port={$port};dbname={$name};charset={$charset}";

    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false
    ];

    $connection = new PDO($dsn, $user, $pass, $options);
    return $connection;
}
