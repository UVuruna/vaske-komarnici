<?php
    include_once 'singleSelector.php';
    $Title = str_replace(" | ", "<br>", $title);
?>

<div class="catalogue singleCatalogue">
    <header>
        <h1>
            <?= $page === 'katalog' ? $Title : 'Plise (harmonika) Komarnici' ?>
        </h1>
        <p>
            <strong>Već od 40€ po kvadratnom metru</strong>
            – praktično i elegantno rešenje za zaštitu od insekata, bez kompromisa po pitanju funkcionalnosti ili izgleda.
        </p>

    </header>

    <section class="text">
        <h2>Moderan dizajn i lako rukovanje – komarnik koji prati vaš ritam.</h2>
        <p>
            Plise komarnici su savršeni za balkonska i terasa vrata, kao i veće prozore.
            Njihov harmonika sistem omogućava glatko otvaranje i zatvaranje bez opterećenja prostora.
            Diskretni i pouzdani, idealni su za svakodnevnu upotrebu i intenzivne prolaze.
            Dostupni su u više boja i varijanti mreža, tako da se lako uklapaju u svaki enterijer i eksterijer.
            Uz jednostavnu montažu i dug vek trajanja, plise komarnici nude praktičnost i estetiku u jednom rešenju.
        </p>
    </section>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "PliseDoor_Both_Brown_Dark.webp?{$version}",
            altText: "Obostrani Plise komarnik za vrata"
        );
    ?>
    <section class="media-container">
        <video 
            id="PliseDoor_Both" 
            title="Prezentacija obostranih plise (harmonika) komarnika za vrata" 
            class="video-loop"
            autoplay muted loop playsinline
            preload="none" 
            loading="lazy"
        >
        </video>
    </section>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "PliseDoor_One_White_Light.webp?{$version}",
            altText: "Jednostrani Plise komarnik za vrata"
        );
    ?>
    <section class="media-container">
        <video 
            id="PliseDoor_One" 
            title="Prezentacija jednostranih plise (harmonika) komarnika za vrata" 
            class="video-loop"
            autoplay muted loop playsinline
            preload="none" 
            loading="lazy"
        >
        </video>
    </section>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "PliseWindow_Both_Antracite_Dark.webp?{$version}",
            altText: "Obostrani Plise komarnik za prozor"
        );
    ?>
    <section class="media-container">
        <video 
            id="PliseWindow_Both" 
            title="Prezentacija obostranih plise (harmonika) komarnika za prozor"
            class="video-loop" 
            autoplay muted loop playsinline
            preload="none" 
            loading="lazy"
        >
        </video>
    </section>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "PliseWindow_One_White_Light.webp?{$version}",
            altText: "Jednostrani Plise komarnik za prozor"
        );
    ?>
    <section class="media-container">
        <video 
            id="PliseWindow_One" 
            title="Prezentacija jednostranih plise (harmonika) komarnika za prozor"
            class="video-loop" 
            autoplay muted loop playsinline
            preload="none" 
            loading="lazy"
        >
        </video>
    </section>
</div>