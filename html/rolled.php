<?php
    include_once 'singleSelector.php';
?>

<div class="catalogue singleCatalogue">
    <header>
        <h2><?= $page !== 'katalog' ? 'Najpovoljnija Ponuda' : 'Rolo Komarnici' ?></h2>
        <p><strong>Već od <?= $cenovnik['Rolled'] ?>€ po kvadratnom metru</strong> – praktična i elegantna zaštita od insekata, bez stalnog zatvaranja ili skidanja.</p>
    </header>
    <section class="text">
        <h3>Funkcionalnost koja se ne vidi – rolo sistem za maksimalnu udobnost.</h3>
        <p>Rolo komarnici su idealni za prozore koji se često koriste. Zahvaljujući mehanizmu za uvlačenje, lako se spuštaju i podižu po potrebi, bez zauzimanja prostora. Pružaju pouzdanu zaštitu tokom cele sezone, dok se van nje diskretno povlače u kutiju. Dostupni su u više dimenzija, boja i tipova mreža – kako bi se savršeno uklopili u vaš enterijer i spoljašnji izgled.</p>
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
    <video id="Rolled" title="Prezentacija rolo komarnika" class="video-loop" autoplay muted loop playsinline preload="none"></video>
</div>