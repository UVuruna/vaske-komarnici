<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="theme-color" content="#646464">
    <meta name="background-color" content="#646464">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta property="og:url" content="<?php echo htmlspecialchars($fullUrl); ?>"/>
    <meta name="language" content="sr" />
    <meta name="geo.region" content="RS" />
    <meta name="geo.placename" content="Beograd" />

    <title><?php echo htmlspecialchars(str_replace('<br>', ' ', $title)); ?></title>

    <meta name="description" content="Izrada i montaža rolo, plisiranih i fiksnih komarnika po meri u Beogradu. Brza ugradnja i servis komarnika - zamena mreže i kanapa."/>
    <meta name="keywords" content="komarnici po meri, izrada komarnika, montaža komarnika, rolo komarnici, plise komarnici, fiksni komarnici, komarnici Beograd, ugradnja komarnika, popravka komarnika, zamena kanapa, zamena mreže, servis komarnika Beograd"/>
    <meta name="author" content="<?php echo $developerName ?>"/>

    <link rel="canonical" href="<?php echo htmlspecialchars($fullUrl); ?>"/>

    <!-- Open Graph za Google i društvene mreže -->
    <meta property="og:title" content="<?php echo htmlspecialchars($title); ?>"/>
    <meta property="og:description" content="Izrada i montaža rolo, plisiranih i fiksnih komarnika po meri u Beogradu. Brza ugradnja i servis komarnika - zamena mreže i kanapa."/>
    <meta property="og:image" content="https://vaske-komarnici.com/img/logo/preview.jpg"/>
    <meta property="og:type" content="website"/>
    <meta property="og:locale" content="sr_RS" />
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

    <!-- Preload LOADER and LOGO -->
    <link rel="preload" href="<?php echo $basePath ?>css/loader.css?v=<?php echo $version ?>" as="style">
    <link rel="preload" href="<?php echo $basePath ?>img/other/mosquito.svg" as="image">
    <link rel="preload" href="<?php echo $basePath ?>img/other/fly.svg" as="image">
    <link rel="preload" href="<?php echo $basePath ?>img/logo/logo.svg" as="image">
    <!-- Preload FONTS -->
    <link rel="preload" href="<?php echo $basePath ?>fonts/Poppins-Regular-subset.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="<?php echo $basePath ?>fonts/Poppins-Bold-subset.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="<?php echo $basePath ?>fonts/fa-solid-subset.woff2" as="font" type="font/woff2" crossorigin="anonymous">

    <!-- CSS Styles -->
    <link rel="stylesheet" href="<?php echo $basePath ?>css/loader.css?v=<?php echo $version ?>"/>

    <link rel="stylesheet" href="<?php echo $basePath ?>css/root.css?v=<?php echo $version ?>"/>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/fa.css?v=<?php echo $version ?>"/>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/header.css?v=<?php echo $version ?>"/>
    <?php if (! empty($styles)) {
            foreach ($styles as $css) {
                echo "<link rel='stylesheet' href='{$basePath}{$css}?v={$version}'/>";
            }
    }?>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/footer.css?v=<?php echo $version ?>" media="print" onload="this.media='all'"/>
    <link rel="stylesheet" href="<?php echo $basePath ?>css/guide.css?v=<?php echo $version ?>" media="print" onload="this.media='all'"/>

    <!-- Loading INIT JavaScript -->
    <script type="module">
        const version = '<?php echo $version; ?>';
        const path = '<?php echo $basePath ?>';
        const initDict =  <?php echo json_encode($init) ?>;

        import(`${path}js/init.js?v=${version}`).then(module => {
            module.init(version, path, initDict)
        });
    </script>

    <!-- Structured Data (JSON‑LD) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Vaske Komarnici",
        "image": "https://vaske-komarnici.com/img/logo/preview.jpg",
        "logo": "https://vaske-komarnici.com/img/logo/android-chrome-512x512.png",
        "url": "https://vaske-komarnici.com",
        "email": "vaske.komarnici@gmail.com",
        "telephone": "+381631051331",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Partizanske avijacije 42",
            "addressLocality": "Beograd",
            "addressCountry": "RS"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.816880,
            "longitude": 20.383283
        },
        "description": "Izrada i montaža rolo, plise i fiksnih komarnika po meri u Beogradu. Brza ugradnja i servis komarnika.",
        "priceRange": "$$",
        "openingHours": [
            "Mo-Su 00:00-24:00"
        ]
    }
    </script>


    <!-- Event snippet for AKCIJA - Besplatno Merenje i Montaža conversion page -->
    <script>
        function gtag_report_conversion(url) {
            var callback = function () {
                if (typeof(url) != 'undefined') {
                window.location = url;
                }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-17002561060/SeSHCNvupcQaEKT8uas_',
                'event_callback': callback
            });
            return false;
        }
    </script>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-WV3X5ZL398"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WV3X5ZL398');
    </script>
    
    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5692012727130730" crossorigin="anonymous"></script>
</head>