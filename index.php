<?php
    $basePath = './';
    $page     = null;
    $styles   = [ 'css/about_us.css', 'css/catalogue.css' ];
    $presentation = [ 'showcase' ];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}html/includes/head.php"; ?>

<body>
    <?php include "{$basePath}html/includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/about_us.php"; ?>
        <?php include "{$basePath}html/catalogue_home.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>
</body>

</html>