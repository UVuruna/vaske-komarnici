<?php
    include_once 'singleSelector.php';
?>

<div class="catalogue singleCatalogue">
    <header>
        <h2><?= $page !== 'katalog' ? 'Najpovoljnija Ponuda' : 'Rolo Komarnici – Praktična i Diskretna Zaštita od Insekata' ?></h2>
        <p><strong>Već od <?= $cenovnik['Rolled'] ?>€ po kvadratnom metru</strong> – elegantno rešenje za zaštitu od insekata, bez skidanja i bez kompromisa u udobnosti.</p>
    </header>

    <article class="text">
        <h3>Neprimetna zaštita za svakodnevnu upotrebu – rolo komarnik po meri vašeg prostora.</h3>
        <p>Rolo komarnici su savršeni za prozore koje često otvarate. Zahvaljujući pouzdanom mehanizmu, komarnik se lako spušta i podiže jednim potezom, a kada nije u upotrebi – automatski se uvlači u zaštitnu kutiju, štiteći mrežu i produžavajući njen vek trajanja. Njegov diskretan dizajn ne narušava izgled fasade i lako se uklapa u svaki enterijer i eksterijer.</p>
        <p>Dostupni su u više boja, različitim dimenzijama i vrstama mreža: standardna, ojačana, kao i antipolenska – idealno za osobe sa alergijama. Rolo komarnici su praktično rešenje za stanove, kuće i poslovne prostore koje zahtevaju funkcionalnost i estetsku usklađenost.</p>
    </article>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "Rolled_White_Light.webp?{$version}",
            altText: "Rolo komarnik",
            price: $cenovnik['Rolled']
        );
    ?>
    <video id="Rolled" class="video-loop" autoplay muted loop playsinline preload="none"
        title="Prezentacija rolo komarnika"
        aria-label="Prezentacija rolo komarnika"></video>
    <p class="videoDescription read-only">Video prikazuje rolo komarnike koji pružaju trajnu zaštitu od insekata za vaše prozore.</p>
</div>