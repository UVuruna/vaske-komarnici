<?php
    $basePath = '../../';
    $page     = 'plise';
    $styles   = [ 'css/catalogue.css', 'css/singleCatalogue.css', 'css/carousel.css' ];
    $presentation = [
        'PliseDoor_Both',
        'PliseDoor_One',
        'PliseWindow_Both',
        'PliseWindow_One'
    ];
    $carousel = ['Plise'];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}html/includes/head.php"; ?>

<body>
    <?php include "{$basePath}html/includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/plise.php"; ?>
        <?php include "{$basePath}html/carousel.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>
</body>

</html>