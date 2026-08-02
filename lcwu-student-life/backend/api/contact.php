<?php
/**
 * POST /api/contact.php
 * Validates and stores a contact form submission from the Contact
 * section. Expects a JSON body with name, email, subject, message.
 */

require __DIR__ . "/../config/database.php";
require __DIR__ . "/../config/cors.php";

studentLifeBootstrap(["POST"]);

$body = studentLifeReadJsonBody();

$name = trim((string) ($body["name"] ?? ""));
$email = trim((string) ($body["email"] ?? ""));
$subject = trim((string) ($body["subject"] ?? ""));
$message = trim((string) ($body["message"] ?? ""));

$errors = [];
if ($name === "") {
    $errors["name"] = "Please enter your name";
}
if ($email === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors["email"] = "Enter a valid email address";
}
if ($subject === "") {
    $errors["subject"] = "Please add a subject";
}
if (strlen($message) < 10) {
    $errors["message"] = "Say a little more, at least 10 characters";
}

if (!empty($errors)) {
    studentLifeSendJson(["error" => "Validation failed", "fields" => $errors], 422);
}

try {
    $db = studentLifeDb();
    $stmt = $db->prepare(
        "INSERT INTO contact_messages (name, email, subject, message, created_at)
         VALUES (:name, :email, :subject, :message, NOW())"
    );
    $stmt->execute([
        "name" => $name,
        "email" => $email,
        "subject" => $subject,
        "message" => $message
    ]);

    studentLifeSendJson([
        "success" => true,
        "message" => "Message received. The Student Affairs team will reply within two working days."
    ], 201);
} catch (Throwable $e) {
    studentLifeSendJson(["error" => "Could not save your message, please try again"], 500);
}
