<?php
    $basePath = "../";
    $page     = "o_nama";
    include "{$basePath}html/includes/variables.php";
    include "{$basePath}html/includes/config.php";
    
    $styles   = [ "about_us", "carousel" ];
    $init = [
        "presentation" => null,
        "carousel" => ["Rolo", "Plise", "Fiksni"],
        "order" => null
    ];
?>

<!DOCTYPE html>
<html lang="sr">
    <?php include "{$basePath}html/includes/head.php" ?>
    <body style="background-color: <?php echo $primary ?>;">
        <?php include "{$basePath}html/head/loader.php" ?>
        <main>
            <?php
            include "{$basePath}html/includes/header.php";
            include "{$basePath}html/about_us.php";
            include "{$basePath}html/carousel.php";
            include "{$basePath}html/includes/footer.php"
            ?>
        </main>
    </body>
</html>