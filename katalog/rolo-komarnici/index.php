<?php
    $basePath = '../../';
    $page     = 'rolo';
    include "{$basePath}html/includes/variables.php";

    $styles   = [ 'css/catalogue.css', 'css/singleCatalogue.css', 'css/carousel.css' ];
    $presentation = [ 'Rolled' ];
    $carousel = ['Rolo'];
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
    <?php include "{$basePath}html/includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/rolled.php"; ?>
        <?php include "{$basePath}html/carousel.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>
</body>

</html>