<?php
    $basePath = '../../';
    $page     = 'fiksni';
    include "{$basePath}html/includes/variables.php";
    
    $styles   = [ 'css/catalogue.css', 'css/singleCatalogue.css', 'css/carousel.css' ];
    $init = [
        'presentation' => ['Fixed_Both', 'Fixed_One'],
        'carousel' => null,
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
        <?php include "{$basePath}html/fixed.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>
</body>

</html>