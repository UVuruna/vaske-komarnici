<?php
    $basePath = '../';
    $page     = 'o_nama';
    include "{$basePath}html/includes/variables.php";

    $styles   = [ 'css/about_us.css', 'css/carousel.css' ];
    $init = [
        'presentation' => null,
        'carousel' => ['Rolo', 'Plise', 'Fiksni'],
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
        <?php include "{$basePath}html/about_us.php"; ?>
        <?php include "{$basePath}html/carousel.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>
</body>

</html>