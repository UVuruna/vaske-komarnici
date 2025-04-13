<?php
    include 'singleSelector.php';
    $Title = str_replace(" | ", "<br>", $title);
?>

<div class="catalogue" id="fixed">
  <header>
    <h1><?php echo $Title ?></h1>
    <p>
        <strong>Već od 25€ po komadu</strong>
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
        title="Prezentacija fiksnih komarnika"
        class="video-loop"
        autoplay muted loop playsinline
        id="FixedBoth-Window">
      </video>
  </section>

  <div>
    <span>
      <h2>Zaštita bez kompromisa – diskretni, pouzdani i dugotrajni.</h2>
      <p>
          Fiksni komarnici su idealno rešenje za prozore koji se ne otvaraju često.
          Montiraju se lako, ne remete izgled fasade, i predstavljaju trajnu zaštitu od insekata tokom cele godine.
          Bilo da tražite jednostavno rešenje za stan, kuću ili poslovni prostor,
          naši fiksni komarnici dolaze u različitim dimenzijama, bojama i vrstama mreža
          – savršeno uklopljeni uz vaš stil i potrebe.
      </p>
    </span>
    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            imgLink: "FixedBoth-Window_White-Light.webp?{$version}",
            altText: "Fiksni obostrani komarnik"
        );
    ?>
  </div>

  <section class="media-container">
      <video
        title="Prezentacija fiksnih komarnika"
        class="video-loop"
        autoplay muted loop playsinline
        id="FixedOne-Window">
      </video>
  </section>

  <div>
    <?php
        displayProduct(
            version: $version,
            basePath: $basePath,
            imgLink: "FixedOne-Window_White-Light.webp?{$version}",
            altText: "Fiksni jednostrani komarnik"
        );
    ?>
  </div>