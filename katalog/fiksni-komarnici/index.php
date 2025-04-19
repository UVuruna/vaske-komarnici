<?php
    $basePath = '../../';
    $page     = 'fiksni';
    $styles   = [ 'css/catalogue.css', 'css/singleCatalogue.css' ];
    $presentation = [ 'Fixed_Both', 'Fixed_One' ];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}html/includes/head.php"; ?>

<body>
    <?php include "{$basePath}html/includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/fixed.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>
</body>

</html>