<?php
    include_once 'singleSelector.php';
?>

<div class="catalogue singleCatalogue">
    <header>
        <h2><?= $page !== 'katalog' ? 'Najpovoljnija Ponuda' : 'Fiksni Komarnici – Trajna i Ekonomična Zaštita od Insekata' ?></h2>
        <p><strong>Već od <?= $cenovnik['Fixed'] ?>€ po kvadratnom metru</strong> – povoljna, efikasna i dugotrajna zaštita od komaraca i drugih insekata, bez dodatnih troškova i komplikovane montaže.</p>
    </header>

    <article class="text">
        <h3>Jednostavno rešenje za miran dom – fiksni komarnici za prozore bez kompromisa.</h3>
        <p>Fiksni komarnici su idealni za prozore koji se ređe otvaraju, kao što su prozori u kupatilima, podrumima ili pomoćnim prostorijama. Zahvaljujući jednostavnoj montaži i čvrstoj aluminijumskoj konstrukciji, fiksni komarnik pruža trajnu zaštitu od komaraca i drugih insekata, bez narušavanja izgleda fasade. Naši komarnici dostupni su u više boja (bela, braon, antracit) i mreža (standardna, ojačana, antipolenska), što omogućava lako uklapanje u svaki stil objekta – bilo da je u pitanju stan, kuća ili poslovni prostor.</p>
    </article>


    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "Fixed_Both_White_Light.webp?{$version}",
            altText: "Obostrani Fiksni komarnik",
            price: $cenovnik['Fixed']
        );
    ?>
    <video id="Fixed_Both" title="Prezentacija obostranih fiksnih komarnika" class="video-loop" autoplay muted loop playsinline preload="none"></video>
    <p class="videoDescription read-only">Video prikazuje obostrane fiksne komarnike koji pružaju trajnu zaštitu od insekata za vaše prozore.</p>

    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "Fixed_One_White_Light.webp?{$version}",
            altText: "Jednostrani Fiksni komarnik",
            price: $cenovnik['Fixed'],
        );
    ?>
    <video id="Fixed_One" title="Prezentacija jednostrani fiksnih komarnika" class="video-loop" autoplay muted loop playsinline preload="none"></video>
    <p class="videoDescription read-only">Video prikazuje jednostrane fiksne komarnike koji pružaju trajnu zaštitu od insekata za vaše prozore.</p>
</div>