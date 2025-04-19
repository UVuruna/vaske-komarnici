<?php
    $basePath = '../../';
    $page     = 'rolo';
    $styles   = [ 'css/catalogue.css', 'css/singleCatalogue.css' ];
    $presentation = [ 'Rolled' ];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}html/includes/head.php"; ?>

<body>
    <?php include "{$basePath}html/includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/rolled.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>
</body>

</html>