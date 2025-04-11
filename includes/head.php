<?php
    $baseTitle = "Komarnici po meri Beograd | Izrada, Montaža, Servis";

    $developerName    = "UVS | Uroš Vuruna";
    $developerEmail   = "vurunayas@gmail.com";
    $developerWebsite = "https://github.com/UVuruna";

    $companyEmail       = "vaske.komarnici@gmail.com";
    $companyName        = "Vaske Komarnici";
    $companyPhone       = "+381631051331";
    $companyPhoneLocal  = "063 105-1331";
    $companyPhoneGlobal = "+381 63 105 1331";
?>

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Izrada i montaža rolo, plisiranih i fiksnih komarnika po meri u Beogradu.
        Brza ugradnja i servis komarnika - zamena mreže i kanapa." />
    <meta name="keywords" content="komarnici po meri, izrada komarnika, montaža komarnika,
        rolo komarnici, plise komarnici, fiksni komarnici,
        komarnici Beograd, ugradnja komarnika,
        popravka komarnika, zamena kanapa, zamena mreže,
        servis komarnika Beograd" />
    <meta name="author" content="<?php echo $developerName ?>" />

    <?php
        $title = match ($page) {
            'o_nama' => "Ko smo mi? | {$baseTitle}",
            'kontakt' => "Kontakt | {$baseTitle}",
            'katalog' => "Katalog proizvoda (Tipovi komarnika) | {$baseTitle}",
            'fiksni' => "Fiksni komarnici po meri | {$baseTitle}",
            'rolo' => "Rolo komarnici po meri | {$baseTitle}",
            'plise' => "Plise komarnici po meri | {$baseTitle}",
            'naručivanje' => "Poručite komarnike i zakažite montiranje | {$baseTitle}",
            default => $baseTitle,
        };
    ?>
    <title><?php echo htmlspecialchars($title); ?></title>

    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon.svg?v=1.0" type="image/svg+xml" />
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon-32x32.png?v=1.0" sizes="32x32" type="image/png" />
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon-16x16.png?v=1.0" sizes="16x16" type="image/png" />
    <link rel="apple-touch-icon" href="<?php echo $basePath ?>img/logo/favicon-180x180.png?v=1.0" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <link rel="stylesheet" href="<?php echo $basePath ?>css/root.css?v=1.0" />
    <link rel="stylesheet" href="<?php echo $basePath ?>css/header.css?v=1.0" />

    <?php if (! empty($styles)) {
            foreach ($styles as $css) {
                echo "<link rel='stylesheet' href='{$basePath}{$css}' />";
            }
    }?>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/footer.css?v=1.0" />

    <script type="module">
        import(`${'<?php echo $basePath ?>'}js/init.js?v=1.0`).then(module => {
            module.init('<?php echo $basePath ?>');
        });
    </script>
</head>