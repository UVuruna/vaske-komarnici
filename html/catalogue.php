<?php
    include 'singleSelector.php';
?>

<div id="catalogue">
  <header>
    <h1>Katalog komarnika</h1>
    <p>
      Izaberite idealan model za vaš prostor. Pronađite komarnike svih vrsta i boja, sve na jednom mestu.
    </p>
  </header>

  <section class="media-container">
      <video title="Prezentacija komarnika" class="video-loop" autoplay muted loop playsinline id="promoVideo"></video>
  </section>

  <div>
    <?php
        displayProduct(
            basePath: $basePath,
            imgLink: "FixedBoth-Window_White-Light.webp?v=1.0",
            buttonLink: "{$basePath}katalog/fiksni-komarnici",
            priceText: "Samo 25 €"
        );
        displayProduct(
            basePath: $basePath,
            imgLink: "Rolled-Window_White-Dark.webp?v=1.0",
            buttonLink: "{$basePath}katalog/rolo-komarnici",
            priceText: "Već od 35 €",
            showTipKomarnika: false
        );
    ?>
  </div>
  <div>
    <?php
        displayProduct(
            basePath: $basePath,
            imgLink: "PliseBoth-Door_Brown-Light.webp?v=1.0",
            buttonLink: "{$basePath}katalog/plise",
            priceText: "Već od 40 €"
        );
        displayProduct(
            basePath: $basePath,
            imgLink: "PliseOne-Window_Antracite-Dark.webp?v=1.0",
            buttonLink: "{$basePath}katalog/plise",
            priceText: "Već od 40 €"
        );
    ?>
  </div>
</div>