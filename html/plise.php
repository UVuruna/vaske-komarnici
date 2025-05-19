<?php
    include_once 'singleSelector.php';
?>

<div class="catalogue singleCatalogue">
    <header>
        <h2><?= $page !== 'katalog' ? 'Najpovoljnija Ponuda' : 'Plise Komarnici – Efikasna Zaštita od Insekata' ?></h2>
        <p><strong>Već od <?= $cenovnik['Plise'] ?>€ po kvadratnom metru</strong> – praktično, elegantno i dugotrajno rešenje za zaštitu od insekata koje se lako montira i savršeno uklapa u svaki dom i poslovni prostor.</p>
    </header>
    
    <article class="text">
        <h3>Moderan dizajn i lako rukovanje – komarnik koji prati vaš ritam.</h3>
        <p>Plise komarnici su idealno rešenje za balkonska i terasna vrata, kao i veće prozore. Njihov harmonika sistem omogućava jednostavno i glatko otvaranje i zatvaranje, štedeći prostor i olakšavajući svakodnevnu upotrebu. Diskretni, izdržljivi i laki za održavanje, plise komarnici pružaju pouzdanu zaštitu od insekata čak i na mestima sa intenzivnim prolazima. Dostupni su u više boja, dimenzija i vrsta mreža, što ih čini prilagodljivim svakom enterijeru i eksterijeru. Sa lakoćom montaže i dugim vekom trajanja, plise komarnici su spoj funkcionalnosti, estetike i trajne zaštite od insekata za vaš dom ili poslovni prostor.</p>
    </article>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "PliseDoor_Both_Brown_Dark.webp?{$version}",
            altText: "Obostrani Plise komarnik za vrata",
            price: $cenovnik['Plise']
        );
    ?>
    <video id="PliseDoor_Both" class="video-loop" autoplay muted loop playsinline preload="none"
        title="Prezentacija obostranih plise (harmonika) komarnika za vrata"
        aria-label="Prezentacija obostranih plise (harmonika) komarnika za vrata" ></video>
    <p class="videoDescription read-only">Video prikazuje obostrane plise (harmonika) za vrata komarnike koji pružaju trajnu zaštitu od insekata za vaše prozore.</p>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "PliseDoor_One_White_Light.webp?{$version}",
            altText: "Jednostrani Plise komarnik za vrata",
            price: $cenovnik['Plise']
        );
    ?>
    <video id="PliseDoor_One" class="video-loop" autoplay muted loop playsinline preload="none"
        title="Prezentacija jednostranih plise (harmonika) komarnika za vrata"
        aria-label="Prezentacija jednostranih plise (harmonika) komarnika za vrata"></video>
    <p class="videoDescription read-only">Video prikazuje jednostrane plise (harmonika) za vrata komarnike koji pružaju trajnu zaštitu od insekata za vaše prozore.</p>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "PliseWindow_Both_Antracite_Dark.webp?{$version}",
            altText: "Obostrani Plise komarnik za prozor",
            price: $cenovnik['Plise']
        );
    ?>
    <video id="PliseWindow_Both" class="video-loop" autoplay muted loop playsinline preload="none"
        title="Prezentacija obostranih plise (harmonika) komarnika za prozor"
        aria-label="Prezentacija obostranih plise (harmonika) komarnika za prozor"></video>
    <p class="videoDescription read-only">Video prikazuje obostrane plise (harmonika) komarnike za prozor koji pružaju trajnu zaštitu od insekata za vaše prozore.</p>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "PliseWindow_One_White_Light.webp?{$version}",
            altText: "Jednostrani Plise komarnik za prozor",
            price: $cenovnik['Plise']
        );
    ?>
    <video id="PliseWindow_One" class="video-loop" autoplay muted loop playsinline preload="none"
        title="Prezentacija jednostranih plise (harmonika) komarnika za prozor"
        aria-label="Prezentacija jednostranih plise (harmonika) komarnika za prozor"></video>
    <p class="videoDescription read-only">Video prikazuje jednostrane plise (harmonika) komarnike za prozor koji pružaju trajnu zaštitu od insekata za vaše prozore.</p>
</div>