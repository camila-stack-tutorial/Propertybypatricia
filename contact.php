<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require 'PHPMailer-master/PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/PHPMailer-master/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Redirect with error message
        header('Location: index.html?status=error&message=' . urlencode('Invalid email format.'));
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Sendinblue SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp-relay.brevo.com';
        $mail->SMTPAuth = true;
        $mail->Username = '836680002@smtp-brevo.com';  // Your Sendinblue email
        $mail->Password = 'K87XAFIYZPE2gwrM'; // Your API key from Sendinblue
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email headers
        $mail->setFrom('shemobwoge001@gmail.com', 'Statement Crunch'); // Use your verified email
        $mail->addAddress('shemobwoge001@gmail.com', 'Shem Obwoge'); // Your email

        // Email content
        $mail->isHTML(false);
        $mail->Subject = "Contact Form Submission: " . $name;
        $mail->Body = "You have received a new message from your website.\n\n" . 
                      "Name: " . $name . "\n" . 
                      "Phone: " . $phone . "\n" . 
                      "Email: " . $email . "\n\n" . 
                      "Message:\n" . $message;

        // Send email
        $mail->send();
        
        // Redirect with success message
        header('Location: index.html?status=success&message=' . urlencode('Thank you for contacting us! We will get back to you shortly.'));
        exit;
        
    } catch (Exception $e) {
        // Redirect with error message
        header('Location: index.html?status=error&message=' . urlencode('Sorry, there was an error: ' . $mail->ErrorInfo));
        exit;
    }
}
?>
