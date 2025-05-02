<?php
    $basePath = './';
    $page     = null;
    $styles   = [ 'css/about_us.css', 'css/catalogue.css', 'css/carousel.css' ];
    $presentation = [ 'showcase' ];
?>

<!DOCTYPE html>
<html lang="sr">
    <?php include "{$basePath}html/includes/head.php"; ?>

    <body>
        <?php include "{$basePath}html/includes/header.php"; ?>
        <main>
            <?php include "{$basePath}html/about_us.php"; ?>
            <?php include "{$basePath}html/carousel.php"; ?>
            <?php include "{$basePath}html/catalogue_home.php"; ?>
        </main>
        <?php include "{$basePath}html/includes/footer.php"; ?>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"></script>
        <script src="<?php echo $basePath ?>js/media/carousel.js?v=<?php echo $version ?>"></script>
        <script src="<?php echo $basePath ?>js/media/imagePreview.js?v=<?php echo $version ?>"></script>
    </body>
</html>