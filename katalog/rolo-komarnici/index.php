<?php
    $start = microtime(true);
    $basePath = "../../";
    $page     = "rolo";
    include "{$basePath}html/includes/variables.php";
    include "{$basePath}html/includes/config.php";
    
    $styles   = [ "catalogue", "singleCatalogue", "carousel" ];
    $init = [
        "presentation" => ["Rolled"],
        "carousel" => ["Rolo"],
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
                <p>Rolo komarnici sa mehanizmom za uvlačenje – diskretni, funkcionalni i dugotrajni. Pogodni za čestu upotrebu, dostupni u više boja i tipova mreža.</p>
            </header>
            <?php
            include "{$basePath}html/includes/header.php";
            include "{$basePath}html/rolled.php";
            include "{$basePath}html/carousel.php";
            include "{$basePath}html/includes/footer.php"
            ?>
        </main>
    </body>
</html>