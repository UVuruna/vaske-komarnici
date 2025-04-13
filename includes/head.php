<?php
    $baseTitle = "Komarnici po meri Beograd - Izrada, Montaža, Servis";

    $developerName    = "UVS | Uroš Vuruna";
    $developerEmail   = "vurunayas@gmail.com";
    $developerWebsite = "https://github.com/UVuruna";

    $companyEmail       = "vaske.komarnici@gmail.com";
    $companyName        = "Vaske Komarnici";
    $companyPhone       = "+381631051331";
    $companyPhoneLocal  = "063 105-1331";
    $companyPhoneGlobal = "+381 63 105 1331";

    $version = "1.000";

    $title = match ($page) {
        'o_nama' => "Ko smo mi? | {$baseTitle}",
        'kontakt' => "Kontakt | {$baseTitle}",
        'katalog' => "Katalog proizvoda (Tipovi komarnika) | {$baseTitle}",
        'fiksni' => "Fiksni komarnici | {$baseTitle}",
        'rolo' => "Rolo komarnici | {$baseTitle}",
        'plise' => "Plise komarnici | {$baseTitle}",
        'naručivanje' => "Poručite komarnike i zakažite montiranje | {$baseTitle}",
        default => $baseTitle,
    };

    $fullUrl = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    
    $iconHome = <<<SVG
    <svg xmlns="http://www.w3.org/2000/svg"
        width="3rem"
        height="auto"
        fill="currentColor"
        viewBox="0 0 576 512">
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
    </svg>
    SVG;
?>

<meta property="og:url" content="<?php echo htmlspecialchars($fullUrl); ?>" />

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title><?php echo htmlspecialchars($title); ?></title>
    <meta name="description" content="Izrada i montaža rolo, plisiranih i fiksnih komarnika po meri u Beogradu.
        Brza ugradnja i servis komarnika - zamena mreže i kanapa." />
    <meta name="keywords" content="komarnici po meri, izrada komarnika, montaža komarnika,
        rolo komarnici, plise komarnici, fiksni komarnici,
        komarnici Beograd, ugradnja komarnika,
        popravka komarnika, zamena kanapa, zamena mreže,
        servis komarnika Beograd" />
        <link rel="canonical" href="<?php echo htmlspecialchars($fullUrl); ?>" />
    <meta name="author" content="<?php echo $developerName ?>" />

    
    <!-- Open Graph za Google i društvene mreže -->
    <meta property="og:title" content="<?php echo htmlspecialchars($title); ?>" />
    <meta property="og:description"
        content="Izrada i montaža rolo, plisiranih i fiksnih komarnika po meri u Beogradu.
        Brza ugradnja i servis komarnika - zamena mreže i kanapa." />
    <meta property="og:image" content="https://vaske-komarnici.com/img/logo/preview.jpg" />
    <meta property="og:url" content="<?php echo htmlspecialchars($fullUrl); ?>" />
    <meta property="og:type" content="website" />

    <!-- Za Google da ne ignoriše -->
    <meta name="robots" content="index, follow">

    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon.ico?v=<?php echo $version?>" type="image/icon" />
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon.svg?v=<?php echo $version?>" type="image/svg+xml" />
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon-32x32.png?v=<?php echo $version?>" sizes="32x32" type="image/png" />
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon-16x16.png?v=<?php echo $version?>" sizes="16x16" type="image/png" />
    <link rel="apple-touch-icon" href="<?php echo $basePath ?>img/logo/apple-touch-icon.png?v=<?php echo $version?>" />
    <link rel="manifest" href="<?php echo $basePath ?>site.webmanifest">

    <meta name="theme-color" content="#ffffff" />
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">

    <!-- Other META -->
    <meta itemprop="priceCurrency" content="EUR" />

    <!-- CSS Styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <link rel="stylesheet" href="<?php echo $basePath ?>css/root.css?v=<?php echo $version?>" />
    <link rel="stylesheet" href="<?php echo $basePath ?>css/header.css?v=<?php echo $version?>" />
    <?php if (! empty($styles)) {
            foreach ($styles as $css) {
                echo "<link rel='stylesheet' href='{$basePath}{$css}?v={$version}' />";
            }
    }?>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/footer.css?v=<?php echo $version?>" />

    <!-- Setting localStorage Version -->
    <script>
        const version = '<?php echo $version; ?>';
        if (localStorage.getItem('version') !== version) {
            localStorage.setItem('version', version);
            console.log(version)
        }
    </script>

    <!-- Loading INIT JavaScript -->
    <script type="module">
        const path = '<?php echo $basePath ?>'
        const presentation = '<?php echo $presentation ?>'

        import(`${path}js/init.js?v=<?php echo $version?>`).then(module => {
            module.init(path, presentation);
        });
    </script>
</head>