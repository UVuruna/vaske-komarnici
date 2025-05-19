<?php
    $basePath = "../../";
    $page     = "plise";
    include "{$basePath}html/includes/variables.php";
    include "{$basePath}html/includes/config.php";
        
    $styles   = [ "catalogue", "singleCatalogue", "carousel" ];
    $init = [
        "presentation" => ["PliseDoor_Both", "PliseDoor_One", "PliseWindow_Both", "PliseWindow_One"],
        "carousel" => ["Plise"],
        "order" => null
    ];
?>

<!DOCTYPE html>
<html lang="sr">
    <?php include "{$basePath}html/includes/head.php" ?>
    <body style="background-color: <?php echo $primary ?>;">
        <main>
            <header>
                <h1><?php echo explode(" | ", $title)[0] ?></h1>
                <p>Plise komarnici za vrata i prozore – praktično, elegantno i lako za svakodnevnu upotrebu. Izaberite model po meri i boji, koji se uklapa u svaki enterijer i eksterijer.</p>
            </header>
            <?php
            include "{$basePath}html/includes/header.php";
            include "{$basePath}html/plise.php";
            include "{$basePath}html/carousel.php";
            include "{$basePath}html/includes/footer.php"
            ?>
        </main>
    </body>
</html>