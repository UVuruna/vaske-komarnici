<?php  
    $developerName    = "UVS | Uroš Vuruna";
    $developerEmail   = "vurunayas@gmail.com";
    $developerWebsite = "https://github.com/UVuruna";

    $companyEmail       = "vaske.komarnici@gmail.com";
    $companyName        = "Vaske Komarnici";
    $companyPhone       = "+381631051331";
    $companyPhoneLocal  = "063 105-1331";
    $companyPhoneGlobal = "+381 63 105 1331";

    $version = "1.52";

    $title = match ($page) {
        'o_nama' => "Ko smo mi? | Komarnici Beograd (Servis i Ugradnja)",
        'katalog' => "Katalog proizvoda | (Tipovi komarnika) | Beograd (Servis i Ugradnja)",
        'fiksni' => "Fiksni komarnici | Beograd (Servis i Ugradnja)",
        'rolo' => "Rolo komarnici | Beograd (Servis i Ugradnja)",
        'plise' => "Plise komarnici | Beograd (Servis i Ugradnja)",
        'kontakt' => "Poručite komarnike i zakažite montiranje | Beograd",
        default => "Komarnici po meri Beograd - Izrada, Montaža, Servis",
    };

    $metaDescription = match ($page) {
        'o_nama' => "Saznajte ko smo mi, čime se bavimo i zašto su naši komarnici najbolji izbor u Beogradu.",
        'katalog' => "Pogledajte katalog komarnika – fiksni, rolo i plise modeli po meri. Servis i montaža u Beogradu.",
        'fiksni' => "Fiksni komarnici izrađeni po meri – idealno rešenje za zaštitu od insekata. Ugradnja i servis u Beogradu.",
        'rolo' => "Rolo komarnici za prozore i vrata – praktična zaštita od insekata. Montaža i servis u Beogradu.",
        'plise' => "Plise komarnici modernog dizajna za sve tipove otvora. Izrada, ugradnja i servis u Beogradu.",
        'kontakt' => "Kontaktirajte nas za porudžbinu komarnika, zakazivanje montaže ili servis na teritoriji Beograda.",
        default => "Komarnici po meri u Beogradu - izrada, montaža i servis fiksnih, rolo i plise komarnika. Brza usluga i precizna izrada.",
    };

    $fullUrl = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

    $cenovnik = [
        'Fixed' => 24.99,
        'Rolled' => 39.99,
        'Plise' => 44.99,
    ];

    $ThemeList = ['morning', 'noon', 'afternoon', 'night'];

    $ThemeColors = [
        'morning' => [
            'primary' => '#36597c',
            'secondary' => '#cedce9',
            'primaryElement' => '#b28d34',
            'secondaryElement' => '#f0c42d'
        ],
        'noon' => [
            'primary' => '#2f3727',
            'secondary' => '#dfdedd',
            'primaryElement' => '#437118',
            'secondaryElement' => '#90a955'
        ],
        'afternoon' => [
            'primary' => '#263751',
            'secondary' => '#bdc4d4',
            'primaryElement' => '#840000',
            'secondaryElement' => '#ba4c5b'
        ],
        'night' => [
            'primary' => '#524e53',
            'secondary' => '#d5d3e1',
            'primaryElement' => '#7151a9',
            'secondaryElement' => '#8e83aa'
        ]
    ];
    
    $config = [
        'ThemeColors' => $ThemeColors,
        'ThemeList' => $ThemeList,
        'theme' => $theme
    ];

    extract($ThemeColors[$theme]);