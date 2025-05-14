<?php
    $basePath = "./";
    $page     = null;
    include "{$basePath}html/includes/variables.php";
    include "{$basePath}html/includes/config.php";

    $styles   = [ "about_us", "catalogue", "carousel" ];
    $init = [
        "presentation" => ["showcase"],
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
            <?php
            include "{$basePath}html/includes/header.php";
            include "{$basePath}html/about_us.php";
            include "{$basePath}html/carousel.php";
            include "{$basePath}html/catalogue_home.php";
            include "{$basePath}html/includes/footer.php"
            ?>
        </main>
    </body>
</html>