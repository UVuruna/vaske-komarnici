<?php
    include "{$basePath}html/includes/svg.php";
    
    $developerName    = "UVS | Uroš Vuruna";
    $developerEmail   = "vurunayas@gmail.com";
    $developerWebsite = "https://github.com/UVuruna";

    $companyEmail       = "vaske.komarnici@gmail.com";
    $companyName        = "Vaske Komarnici";
    $companyPhone       = "+381631051331";
    $companyPhoneLocal  = "063 105-1331";
    $companyPhoneGlobal = "+381 63 105 1331";

    $version = "1.32";

    $title = match ($page) {
        'o_nama' => "Ko smo mi?",
        'katalog' => "Katalog proizvoda<br>(Tipovi komarnika)",
        'fiksni' => "Fiksni komarnici",
        'rolo' => "Rolo komarnici",
        'plise' => "Plise komarnici",
        'kontakt' => "Poručite komarnike i zakažite montiranje",
        default => "Komarnici po meri Beograd - Izrada, Montaža, Servis",
    };

    $fullUrl = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

    $cenovnik = [
        'Fixed' => 25,
        'Rolled' => 35,
        'Plise' => 40,
    ];