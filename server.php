<?php

require __DIR__ . '/vendor/autoload.php';

$pushNotifications = new \Pusher\PushNotifications\PushNotifications(array(
  "instanceId" => "YOUR_INSTANCE_ID_HERE",
  "secretKey" => "YOUR_SECRET_HERE",
));