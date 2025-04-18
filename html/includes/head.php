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
    <meta property="og:description" content="Izrada i montaža rolo, plisiranih i fiksnih komarnika po meri u Beogradu.
        Brza ugradnja i servis komarnika - zamena mreže i kanapa." />
    <meta property="og:image" content="https://vaske-komarnici.com/img/logo/preview.jpg" />
    <meta property="og:url" content="<?php echo htmlspecialchars($fullUrl); ?>" />
    <meta property="og:type" content="website" />

    <!-- Za Google da ne ignoriše -->
    <meta name="robots" content="index, follow">

    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon.ico?v=<?php echo $version ?>" type="image/icon" />
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon.svg?v=<?php echo $version ?>" type="image/svg+xml" />
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon-32x32.png?v=<?php echo $version ?>" sizes="32x32"
        type="image/png" />
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon-16x16.png?v=<?php echo $version ?>" sizes="16x16"
        type="image/png" />
    <link rel="apple-touch-icon" href="<?php echo $basePath ?>img/logo/apple-touch-icon.png?v=<?php echo $version ?>" />
    <link rel="manifest" href="<?php echo $basePath ?>site.webmanifest" id="manifest-link">

    <meta name="theme-color" content="#ffffff" />
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">

    <!-- Other META -->
    <meta itemprop="priceCurrency" content="EUR" />

    <!-- CSS Styles -->
    <link rel="stylesheet" href="<?php echo $basePath ?>css/root.css?v=<?php echo $version ?>" />
    <link rel="stylesheet" href="<?php echo $basePath ?>css/fa.css?v=<?php echo $version ?>" />
    <link rel="stylesheet" href="<?php echo $basePath ?>css/header.css?v=<?php echo $version ?>" />
    <?php if (! empty($styles)) {
            foreach ($styles as $css) {
                echo "<link rel='stylesheet' href='{$basePath}{$css}?v={$version}' />";
            }
    }?>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/footer.css?v=<?php echo $version ?>" />

    <!-- Setting localStorage Version -->
    <script>
        const version = '<?php echo $version; ?>'
        if (localStorage.getItem('version') !== version) {
            localStorage.setItem('version', version)
            console.log(version)
        }
    </script>

    <!-- Loading INIT JavaScript -->
    <script type="module">
        const path = '<?php echo $basePath ?>'
        const presentation =                             <?php echo json_encode($presentation) ?>

        import(`${path}js/init.js?v=<?php echo $version ?>`).then(module => {
            module.init(presentation)
        });

        let resizeTimeout;
        let t0 = performance.now()
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout)
            resizeTimeout = setTimeout(() => {
                location.reload()
            }, 50)
        })
    </script>
</head>