<?php

$recepient = "senderwollas@gmail.com";
$sitename = "yesoutreach.com";

//$name = trim($_POST["name"]);
//$phone = trim($_POST["phone"]);
//$text = trim($_POST["text"]);

$email = trim($_POST["email"]);
$message = "email: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");