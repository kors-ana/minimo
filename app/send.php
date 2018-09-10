<?php
$to = "nastcka@mail.ru"; // Здесь нужно написать e-mail, куда будут приходить письма
$from = 'openserver@server.com'; // this is the sender's Email address
$email = $_POST['email'];
$subject = "Message form from minimo";
$message = "Обратная связь: " . $email;

$headers = "From:" . $from;

if(mail($to, $subject, $message)) {
    echo "Message send succesfully" . " " . $email;
}
else {
    echo "Message error";
}

?>
