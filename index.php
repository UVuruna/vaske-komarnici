<?php
    $basePath = './';
    $page     = null;
    include "{$basePath}html/includes/variables.php";

    $styles   = [ 'css/about_us.css', 'css/catalogue.css', 'css/carousel.css' ];
    $init = [
        'presentation' => ['showcase'],
        'carousel' => ['Rolo', 'Plise', 'Fiksni'],
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
            <?php include "{$basePath}html/about_us.php"; ?>
            <?php include "{$basePath}html/carousel.php"; ?>
            <?php include "{$basePath}html/catalogue_home.php"; ?>
            <?php include "{$basePath}html/includes/footer.php"; ?>
        </main>
    </body>
</html>