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
                    echo "Fiksni Komarnici";
                }
            ?>
        </h1>
        <p>
            <strong>Već od 25€ po kvadratnom metru</strong>
            – pristupačna i efikasna zaštita od insekata, bez dodatnih troškova i komplikovane montaže.
        </p>

    </header>

    <section class="text">
        <h2>Zaštita bez kompromisa – diskretni, pouzdani i dugotrajni.</h2>
        <p>
            Fiksni komarnici su idealno rešenje za prozore koji se ne otvaraju često.
            Montiraju se lako, ne remete izgled fasade, i predstavljaju trajnu zaštitu od insekata tokom cele godine.
            Bilo da tražite jednostavno rešenje za stan, kuću ili poslovni prostor,
            naši fiksni komarnici dolaze u različitim dimenzijama, bojama i vrstama mreža
            – savršeno uklopljeni uz vaš stil i potrebe.
        </p>
    </section>

    <section class="media-container">
        <video 
            title="Prezentacija obostranih fiksnih komarnika" 
            class="video-loop" 
            autoplay muted loop playsinline
            id="Fixed_Both"
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
            imgLink: "Fixed_Both_White_Light.webp?{$version}",
            altText: "Obostrani Fiksni komarnik"
        );
    ?>

    <section class="media-container">
        <video 
            title="Prezentacija jednostranih fiksnih komarnika" 
            class="video-loop" 
            autoplay muted loop playsinline
            id="Fixed_One"
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
            imgLink: "Fixed_One_White_Light.webp?{$version}",
            altText: "Jednostrani Fiksni komarnik"
        );
    ?>

</div>