<?php
$basePath = __DIR__ . '/';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/SMTP.php';
require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/Exception.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable($_SERVER['DOCUMENT_ROOT']);
$dotenv->load();

switch ($_SERVER["REQUEST_METHOD"]) {
    case "POST":
        $ime      = htmlspecialchars(trim($_POST['name'] ?? ''));
        $email    = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
        $telefon  = htmlspecialchars(trim($_POST['phone'] ?? ''));
        $address  = htmlspecialchars(trim($_POST['address'] ?? ''));
        $poruka   = htmlspecialchars(trim($_POST['orderDetail'] ?? ''));
        $orderList = $_POST['orderList'] ?? '';
    
        $mail = new PHPMailer(true);
    
        try {
            // SMTP podešavanja
            $mail->isSMTP();
            $mail->Host       = 'smtp.hostinger.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'ponuda@vaske-komarnici.com';
            $mail->Password = $_ENV['MAIL_PASSWORD'];
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;
    
            // Pošiljalac i primalac
            $mail->setFrom('ponuda@vaske-komarnici.com', 'Ponuda');
            $mail->addAddress('vaske.komarnici@gmail.com');
            $mail->addCC('vurunayas@gmail.com');
    
            // HTML email
            $mail->isHTML(true);
            $mail->CharSet = 'UTF-8';
            $mail->Subject = "Poruka sa sajta od $ime";
    
            $mail->Body = "
                <h2>Porudžbina sa sajta</h2>
                <p><strong>Ime:</strong> {$ime}<br>
                <strong>Email:</strong> {$email}<br>
                <strong>Telefon:</strong> {$telefon}<br>
                <strong>Adresa:</strong> {$address}</p>
                <p><strong>Zahtev:</strong><br>" . nl2br($poruka) . "</p>
                <h3>Detalji porudžbine:</h3>
                {$orderList}
            ";

            $mail->send();
            echo "✅ Poruka uspešno poslata!";
        } catch (Exception $e) {
            echo "❌ Poruka nije poslata. Greška: {$mail->ErrorInfo}";
        }
        break;

    default:
        echo "Nevažeći zahtev.";
        break;
}