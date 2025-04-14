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
    <video title="Prezentacija fiksnih komarnika" class="video-loop" autoplay muted loop playsinline id="Fixed_Both">
    </video>
  </section>

  <div class="promoContainer">
    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "Fixed_Both_White_Light.webp?{$version}",
            altText: "Obostrani Fiksni komarnik"
        );
    ?>
    <span class="explanation">
      <h2 class="title">Obostrani Fiksni komarnik</h2>
      <div>
        <p class="type"></p>
        <p class="sides"></p>
      </div>
      <div>
        <h3 class="frameTitle">Boja rama</h3>
        <p class="frame"></p>
      </div>
      <div>
        <h3 class="netTitle">Boja mreže</h3>
        <p class="net"></p>
      </div>
    </span>

  </div>

  <section class="media-container">
    <video title="Prezentacija fiksnih komarnika" class="video-loop" autoplay muted loop playsinline id="Fixed_One">
    </video>
  </section>

  <div class="promoContainer">
    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            title: false,
            imgLink: "Fixed_One_White_Light.webp?{$version}",
            altText: "Jednostrani Fiksni komarnik"
        );
    ?>
    <span class="explanation">
      <h2 class="title">Jednostrani Fiksni komarnik</h2>
      <div>
        <p class="type"></p>
        <p class="sides"></p>
      </div>
      <div>
        <h3 class="frameTitle">Boja rama</h3>
        <p class="frame"></p>
      </div>
      <div>
        <h3 class="netTitle">Boja mreže</h3>
        <p class="net"></p>
      </div>
    </span>

  </div>