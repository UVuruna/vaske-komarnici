<?php
    $basePath = "../";
    $page     = "katalog";
    include "{$basePath}html/includes/variables.php";
    include "{$basePath}html/includes/config.php";
    
    $styles   = [ "catalogue", "singleCatalogue", "carousel" ];
    $init = [
        "presentation" => ["Fixed_Both", "Fixed_One", "Rolled", "PliseDoor_Both", "PliseDoor_One", "PliseWindow_Both", "PliseWindow_One"],
        "carousel" => ["Rolo", "Plise", "Fiksni"],
        "order" => null
    ];
?>

<!DOCTYPE html>
<html lang="sr">
    <?php include "{$basePath}html/includes/head.php" ?>
    <body style="background-color: <?php echo $primary ?>;">
        <?php include "{$basePath}html/includes/loader.php" ?>
        <main>
            <header>
                <h1><?= $title ?></h1>
                <p>Izaberite idealan model za vaš prostor. Pronađite komarnike svih vrsta i boja, sve na jednom mestu.</p>
            </header>
            <?php
            include "{$basePath}html/includes/header.php";
            include "{$basePath}html/fixed.php";
            include "{$basePath}html/rolled.php";
            include "{$basePath}html/plise.php";
            include "{$basePath}html/carousel.php";
            include "{$basePath}html/includes/footer.php"
            ?>
        </main>
    </body>
</html>