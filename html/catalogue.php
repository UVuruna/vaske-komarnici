<?php
    include 'singleSelector.php';
?>

<div class="catalogue">
    <header>
        <h1>Katalog komarnika</h1>
        <p>
            Izaberite idealan model za vaš prostor.
            Pronađite komarnike svih vrsta i boja, sve na jednom mestu.
        </p>
    </header>

    <section class="media-container">
        <video 
            title="Prezentacija komarnika" 
            class="video-loop"
            autoplay muted loop playsinline 
            id="showcase"
            preload="none" 
            loading="lazy">
        </video>
    </section>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: true,
            imgLink: "Fixed_Both_White_Light.webp?{$version}",
            altText: "Fiksni komarnik",
            buttonLink: "{$basePath}katalog/fiksni-komarnici",
            priceText: "Samo 25 €",
            showTipRama: true
        );
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: true,
            imgLink: "Rolled_White_Dark.webp?{$version}",
            altText: "Rolo komarnik",
            buttonLink: "{$basePath}katalog/rolo-komarnici",
            priceText: "Već od 35 €"
        );
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: true,
            imgLink: "PliseDoor_Both_Brown_Light.webp?{$version}",
            altText: "Plise komarnik za vrata",
            buttonLink: "{$basePath}katalog/plise",
            priceText: "Već od 40 €",
            showTipRama: true
        );
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: true,
            imgLink: "PliseWindow_One_Antracite_Dark.webp?{$version}",
            altText: "Plise komarnik za prozor",
            buttonLink: "{$basePath}katalog/plise",
            priceText: "Već od 40 €",
            showTipRama: true
        );
    ?>
</div>