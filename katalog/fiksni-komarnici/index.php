<?php
    $basePath = '../../';
    $page     = 'fiksni';
    include "{$basePath}html/includes/variables.php";
    
    $styles   = [ 'css/catalogue.css', 'css/singleCatalogue.css', 'css/carousel.css' ];
    $init = [
        'presentation' => ['Fixed_Both', 'Fixed_One'],
        'carousel' => null,
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
                <p>Izaberite idealan model za vaš prostor – fiksni komarnici svih vrsta i boja, na jednom mestu. Pronađite rešenje koje odgovara vašim potrebama.</p>
            </header>
            <?php include "{$basePath}html/fixed.php"; ?>
            <?php include "{$basePath}html/includes/footer.php"; ?>
        </main> 
    </body>
</html>