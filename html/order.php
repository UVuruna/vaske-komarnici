<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "{$basePath}PHPMailer/src/PHPMailer.php";
require "{$basePath}PHPMailer/src/SMTP.php";
require "{$basePath}PHPMailer/src/Exception.php";


switch ($_SERVER["REQUEST_METHOD"]) {
    case "POST":
        $ime     = htmlspecialchars(trim($_POST['name']));
        $email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $telefon = htmlspecialchars(trim($_POST['phone']));
        $poruka  = htmlspecialchars(trim($_POST['orderDetail']));

        $mail = new PHPMailer(true);

        try {
            // SMTP podešavanja
            $mail->isSMTP();
            $mail->Host       = 'smtp.hostinger.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'ponuda@vaske-komarnici.com';
            $mail->Password   = 'TvojaLozinka';
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;

            // Pošiljalac i primalac
            $mail->setFrom('ponuda@vaske-komarnici.com', 'Web Kontakt Forma');
            $mail->addAddress('vurunayas@gmail.com');

            $mail->Subject = "Poruka sa sajta od $ime";
            $mail->Body    =
                "Ime: $ime\n" .
                "Email: $email\n" .
                "Telefon: $telefon\n\n" .
                "Poruka:\n$poruka";

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