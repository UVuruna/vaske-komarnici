<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="theme-color" content="<?= $primaryElement ?>">
    <meta name="background-color" content="<?= $primary ?>">
    <meta name="language" content="sr" />
    <meta name="geo.region" content="RS" />
    <meta name="geo.placename" content="Beograd" />
    <meta name="robots" content="index, follow">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="format-detection" content="telephone=no">
    <meta itemprop="priceCurrency" content="EUR"/>

    <meta property="og:url" content="<?= htmlspecialchars($fullUrl) ?>"/>
    <meta property="og:title" content="<?= htmlspecialchars($title) ?>"/>
    <meta property="og:description" content="<?= htmlspecialchars($metaDescription) ?>"/> 
    <meta property="og:image" content="<?= $basePath ?>img/logo/preview.jpg"/>
    <meta property="og:type" content="website"/>
    <meta property="og:locale" content="sr_RS" />
    <meta property="og:site_name" content="Vaske Komarnici"/>

    <title><?= htmlspecialchars($title) ?></title>
    <meta name="description" content="<?= htmlspecialchars($metaDescription) ?>"/>
    <meta name="keywords" content="komarnici po meri, izrada komarnika, montaža komarnika, rolo komarnici, plise komarnici, fiksni komarnici, komarnici Beograd, ugradnja komarnika, popravka komarnika, zamena kanapa, zamena mreže, servis komarnika Beograd"/>
    <meta name="author" content="<?= $developerName ?>"/>
    <meta name="google-adsense-account" content="ca-pub-5692012727130730">

    <link rel="canonical" href="<?= htmlspecialchars($fullUrl) ?>"/>
    <link rel="manifest" href="<?= $basePath ?>site.webmanifest" id="manifest-link">

    <!-- Fonts & Icons -->
    <link rel="preload" href="<?= $basePath ?>fonts/Poppins-Regular-subset.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="<?= $basePath ?>fonts/Poppins-Bold-subset.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="<?= $basePath ?>fonts/fa-solid-subset.woff2" as="font" type="font/woff2" crossorigin="anonymous">

    <!-- Images -->
    <link rel="preload" href="<?= $basePath ?>img/other/mosquito.svg" as="image">
    <link rel="preload" href="<?= $basePath ?>img/other/fly.svg" as="image">
    <link rel="preload" href="<?= $basePath ?>img/logo/logo.svg" as="image">

    <!-- Icons -->
    <link rel="shortcut icon" href="<?= $basePath ?>img/logo/favicon.ico?v=<?= $version ?>" type="image/x-icon"/>
    <link rel="icon" href="<?= $basePath ?>img/logo/favicon.svg?v=<?= $version ?>" type="image/svg+xml"/>
    <link rel="icon" href="<?= $basePath ?>img/logo/favicon-32x32.png?v=<?= $version ?>" sizes="32x32" type="image/png"/>
    <link rel="icon" href="<?= $basePath ?>img/logo/favicon-16x16.png?v=<?= $version ?>" sizes="16x16" type="image/png"/>
    <link rel="apple-touch-icon" href="<?= $basePath ?>img/logo/apple-touch-icon.png?v=<?= $version ?>"  type="image/png"/>

    <!-- CSS -->
    <link rel="stylesheet" href="<?= $basePath ?>css/loader.css?v=<?= $version ?>"/>
    <link rel="stylesheet" href="<?= $basePath ?>css/root.css?v=<?= $version ?>"/>
    <link rel="stylesheet" href="<?= $basePath ?>css/fa.css?v=<?= $version ?>"/>
    <link rel="stylesheet" href="<?= $basePath ?>css/header.css?v=<?= $version ?>"/>
    <?php foreach ($styles as $css): ?>
        <link rel="stylesheet" href="<?= $basePath ?>css/<?= $css ?>.css?v=<?= $version ?>"/>
    <?php endforeach; ?>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/footer.css?v=<?php echo $version ?>" media="print" onload="this.media='all'"/>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/guide.css?v=<?php echo $version ?>" media="print" onload="this.media='all'"/>


    <link rel="stylesheet" href="<?= $basePath ?>css/footer.css?v=<?= $version ?>" media="print" onload="this.media='all'"/>
    <link rel="stylesheet" href="<?= $basePath ?>css/guide.css?v=<?= $version ?>" media="print" onload="this.media='all'"/>

    <script type="module">
        const version = '<?php echo $version ?>';
        const path = '<?php echo $basePath ?>';
        const config =  <?php echo json_encode($config) ?>;
        const initDict =  <?php echo json_encode($init) ?>;

        import(`${path}js/init.js?v=${version}`).then(({init}) => {
            init(version, path, config, initDict);
        });
    </script>

    <?php include "{$basePath}html/head/google.html" ?>

    <?php if ($init["carousel"]): ?>
        <?php include "{$basePath}html/head/carouselFiles.php" ?>
        <script type="application/ld+json">
            <?= json_encode($carouselJsonLD, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) ?>
        </script>
    <?php endif ?>
</head>


