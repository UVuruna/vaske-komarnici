<?php
    $basePath = '../../';
    $page     = 'rolo';
    include "{$basePath}html/includes/variables.php";

    $styles   = [ 'css/catalogue.css', 'css/singleCatalogue.css', 'css/carousel.css' ];
    $init = [
        'presentation' => ['Rolled'],
        'carousel' => ['Rolo'],
        'order' => null
    ];
?>

<!DOCTYPE html>
<html lang="sr">
    <?php include "{$basePath}html/includes/head.php"; ?>
    <body>
        <?php include "{$basePath}html/includes/loader.php"; ?>
        <main>
            <?php include "{$basePath}html/includes/header.php"; ?>
            <header>
                <h1><?= $title ?></h1>
                <p>Izaberite idealan model za vaš prostor – rolo komarnici svih vrsta i boja, na jednom mestu. Pronađite rešenje koje odgovara vašim potrebama.</p>
            </header>
            <?php include "{$basePath}html/rolled.php"; ?>
            <?php include "{$basePath}html/carousel.php"; ?>
            <?php include "{$basePath}html/includes/footer.php"; ?>
        </main>
    </body>
</html>