<?php
    include 'singleSelector.php';
?>

<div class="catalogue">
    <header>
        <h2>Komarnici – Prodaja, Ugradnja i Cena po m²</h2>
        <p>Fiksni, rolo i plise komarnici za prozore i vrata. Izaberite savršen model uz akcijske cene i profesionalnu montažu u Beogradu i okolini.</p>
    </header>

    <video id="showcase" title="Prezentacija komarnika" class="video-loop" autoplay muted loop playsinline preload="none"></video>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: true,
            imgLink: "Fixed_Both_White_Light.webp?{$version}",
            altText: "Fiksni komarnik",
            buttonLink: "{$basePath}katalog/fiksni-komarnici",
            price: $cenovnik['Fixed'],
            showType: true
        );
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: true,
            imgLink: "Rolled_White_Dark.webp?{$version}",
            altText: "Rolo komarnik",
            buttonLink: "{$basePath}katalog/rolo-komarnici",
            price: $cenovnik['Rolled']
        );
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: true,
            imgLink: "PliseDoor_Both_Brown_Light.webp?{$version}",
            altText: "Plise komarnik za vrata",
            buttonLink: "{$basePath}katalog/plise-komarnici",
            price: $cenovnik['Plise'],
            showType: true
        );
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: true,
            imgLink: "PliseWindow_One_Antracite_Dark.webp?{$version}",
            altText: "Plise komarnik za prozor",
            buttonLink: "{$basePath}katalog/plise-komarnici",
            price: $cenovnik['Plise'],
            showType: true
        );
    ?>
</div>