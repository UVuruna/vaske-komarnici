<?php
    $basePath = '../';
    $page     = 'o_nama';
    $styles   = [ 'css/about_us.css', 'css/carousel.css' ];
    $presentation = null;
    $carousel = ['Rolo', 'Plise', 'Fiksni'];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}html/includes/head.php"; ?>

<body>
    <?php include "{$basePath}html/includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/about_us.php"; ?>
        <?php include "{$basePath}html/carousel.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>
</body>

</html>