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
        <main>
            <header>
                <h1>
                    <?php
                        $splitted = explode(" | ", $title);
                        $firstTwo = array_slice($splitted, 0, 2);
                        echo implode("<br>", $firstTwo);
                    ?>
                </h1>
                <p>Pogledajte kompletan katalog: fiksni, rolo i plisirani komarnici svih dimenzija, boja i mreža. Na jednom mestu – sve što vam je potrebno za zaštitu od insekata.</p>
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