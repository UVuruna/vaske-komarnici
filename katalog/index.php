<?php
    $basePath = '../';
    $page     = 'katalog';
    $styles   = [ 'css/catalogue.css', 'css/singleCatalogue.css', 'css/carousel.css' ];
    $presentation = [
        'Fixed_Both',
        'Fixed_One',
        'Rolled',
        'PliseDoor_Both',
        'PliseDoor_One',
        'PliseWindow_Both',
        'PliseWindow_One'
    ];
    $carousel = ['Rolo', 'Plise', 'Fiksni'];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}html/includes/head.php"; ?>

<body>
    <?php include "{$basePath}html/includes/header.php"; ?>
    <main>
        <header>
            <h1><?= $title ?></h1>
            <p>Izaberite idealan model za vaš prostor. Pronađite komarnike svih vrsta i boja, sve na jednom mestu.</p>
        </header>
        <?php include "{$basePath}html/fixed.php"; ?>
        <?php include "{$basePath}html/rolled.php"; ?>
        <?php include "{$basePath}html/plise.php"; ?>
        <?php include "{$basePath}html/carousel.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>
</body>