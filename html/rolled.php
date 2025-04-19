<?php
    include_once 'singleSelector.php';
    $Title = str_replace(" | ", "<br>", $title);
?>

<div class="catalogue singleCatalogue">
    <header>
        <h1>
            <?php
                if ($genericTitle) {
                    echo $Title;
                } else {
                    echo "Rolo Komarnici";
                }
            ?>
        </h1>
        <p>
            <strong>Već od 35€ po kvadratnom metru</strong>
            – praktična i elegantna zaštita od insekata, bez stalnog zatvaranja ili skidanja.
        </p>

    </header>

    <section class="text">
        <h2>Funkcionalnost koja se ne vidi – rolo sistem za maksimalnu udobnost.</h2>
        <p>
            Rolo komarnici su idealni za prozore koji se često koriste.
            Zahvaljujući mehanizmu za uvlačenje, lako se spuštaju i podižu po potrebi, bez zauzimanja prostora.
            Pružaju pouzdanu zaštitu tokom cele sezone, dok se van nje diskretno povlače u kutiju.
            Dostupni su u više dimenzija, boja i tipova mreža – kako bi se savršeno uklopili u vaš enterijer i spoljašnji
            izgled.
        </p>
    </section>

    <section class="media-container">
        <video 
            title="Prezentacija rolo komarnika" 
            class="video-loop" 
            autoplay muted loop playsinline 
            id="Rolled"
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
            imgLink: "Rolled_White_Light.webp?{$version}",
            altText: "Rolo komarnik"
        );
    ?>

</div>