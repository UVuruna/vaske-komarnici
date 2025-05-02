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

    $version = "1.021";

    $title = match ($page) {
        'o_nama' => "Ko smo mi?",
        'katalog' => "Katalog proizvoda<br>(Tipovi komarnika)",
        'fiksni' => "Fiksni komarnici",
        'rolo' => "Rolo komarnici",
        'plise' => "Plise komarnici",
        'kontakt' => "Poručite komarnike i zakažite montiranje",
        default => $baseTitle,
    };

    $fullUrl = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
?>

<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="theme-color" content="#646464">
    <meta name="background-color" content="#646464">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta property="og:url" content="<?php echo htmlspecialchars($fullUrl); ?>"/>

    <title><?php echo htmlspecialchars($title); ?></title>

    <meta name="description" content="Izrada i montaža rolo, plisiranih i fiksnih komarnika po meri u Beogradu. Brza ugradnja i servis komarnika - zamena mreže i kanapa."/>
    <meta name="keywords" content="komarnici po meri, izrada komarnika, montaža komarnika, rolo komarnici, plise komarnici, fiksni komarnici, komarnici Beograd, ugradnja komarnika, popravka komarnika, zamena kanapa, zamena mreže, servis komarnika Beograd"/>
    <meta name="author" content="<?php echo $developerName ?>"/>

    <link rel="canonical" href="<?php echo htmlspecialchars($fullUrl); ?>"/>

    <!-- Open Graph za Google i društvene mreže -->
    <meta property="og:title" content="<?php echo htmlspecialchars($title); ?>"/>
    <meta property="og:description" content="Izrada i montaža rolo, plisiranih i fiksnih komarnika po meri u Beogradu. Brza ugradnja i servis komarnika - zamena mreže i kanapa."/>
    <meta property="og:image" content="https://vaske-komarnici.com/img/logo/preview.jpg"/>
    <meta property="og:url" content="<?php echo htmlspecialchars($fullUrl); ?>"/>
    <meta property="og:type" content="website"/>
    <link rel="manifest" href="<?php echo $basePath ?>site.webmanifest" id="manifest-link">

    <!-- Za Google da ne ignoriše -->
    <meta name="robots" content="index, follow">

    <!-- ICONS -->
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon.ico?v=<?php echo $version ?>" type="image/icon"/>
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon.svg?v=<?php echo $version ?>" type="image/svg+xml"/>
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon-32x32.png?v=<?php echo $version ?>" sizes="32x32" type="image/png"/>
    <link rel="icon" href="<?php echo $basePath ?>img/logo/favicon-16x16.png?v=<?php echo $version ?>" sizes="16x16" type="image/png"/>
    <link rel="apple-touch-icon" href="<?php echo $basePath ?>img/logo/apple-touch-icon.png?v=<?php echo $version ?>"  type="image/png"/>
    
    <!-- Other META -->
    <meta name="theme-color" content="#808080"/>
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta itemprop="priceCurrency" content="EUR"/>

    <!-- ADSense -->
    <meta name="google-adsense-account" content="ca-pub-5692012727130730">

    <!-- CSS Styles -->
    <link rel="stylesheet" href="<?php echo $basePath ?>css/root.css?v=<?php echo $version ?>"/>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/fa.css?v=<?php echo $version ?>"/>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/header.css?v=<?php echo $version ?>"/>
    <?php if (! empty($styles)) {
            foreach ($styles as $css) {
                echo "<link rel='stylesheet' href='{$basePath}{$css}?v={$version}'/>";
            }
    }?>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/footer.css?v=<?php echo $version ?>"/>

    <!-- Loading INIT JavaScript -->
    <script type="module">
        const version = '<?php echo $version; ?>';
        const path = '<?php echo $basePath ?>';
        const presentation =  <?php echo json_encode($presentation) ?>;
        const carousel = <?php echo !empty($carousel) ? 'true' : 'false'; ?>;

        import(`${path}js/init.js?v=${version}`).then(module => {
            module.init(version, path, presentation, carousel)
        });
    </script>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-WV3X5ZL398"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WV3X5ZL398');
    </script>
    <!-- Google Ads -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5692012727130730" crossorigin="anonymous"></script>
</head>