<?php
    $start = microtime(true);
    $basePath = "../../";
    $page     = "fiksni";
    include "{$basePath}html/includes/variables.php";
    include "{$basePath}html/includes/config.php";
        
    $styles   = [ "catalogue", "singleCatalogue", "carousel" ];
    $init = [
        "presentation" => ["Fixed_Both", "Fixed_One"],
        "carousel" => null,
        "order" => null
    ];
?>

<!DOCTYPE html>
<html lang="sr">
    <?php include "{$basePath}html/includes/head.php" ?>
    <body style="background-color: <?php echo $primary ?>;">
        <?php include "{$basePath}html/head/loader.php" ?>
        <main>
            <header>
                <h1><?php echo explode(" | ", $title)[0] ?></h1>
                <p>Fiksni komarnici u svim dimenzijama, bojama i vrstama mreža – trajna zaštita za prozore koji se ređe otvaraju. Pronađite model koji se savršeno uklapa u vaš prostor.</p>
            </header>
            <?php
            include "{$basePath}html/includes/header.php";
            include "{$basePath}html/fixed.php";
            include "{$basePath}html/includes/footer.php"
            ?>
        </main> 
    </body>
</html>