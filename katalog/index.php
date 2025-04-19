<?php
    $basePath = '../';
    $page     = 'katalog';
    $styles   = [ 'css/catalogue.css', 'css/singleCatalogue.css' ];
    $presentation = [
        'Fixed_Both',
        'Fixed_One',
        'Rolled',
        'PliseDoor_Both',
        'PliseDoor_One',
        'PliseWindow_Both',
        'PliseWindow_One'
    ];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}html/includes/head.php"; ?>

<body>
    <?php include "{$basePath}html/includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/fixed.php"; ?>
        <?php include "{$basePath}html/rolled.php"; ?>
        <?php include "{$basePath}html/plise.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>
</body>