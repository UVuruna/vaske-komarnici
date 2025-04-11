<?php
    $basePath = './';
    $version  = '1.00';
    $page     = null;
    $styles   = ["css/about_us.css?v=$version", "css/catalogue.css?v=$version"];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}includes/head.php"; ?>

<body>
    <?php include "{$basePath}includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/about_us.php"; ?>
        <?php include "{$basePath}html/catalogue.php"; ?>
    </main>
    <?php include "{$basePath}includes/footer.php"; ?>

    <script type="module">
        const basePath = '<?php echo $basePath ?>';

        import {
            loadVideo
        } from '<?php echo $basePath ?>js/video.js?v=<?php echo $version ?>'

        window.onload = event => {
            loadVideo(basePath, 'promoVideo')
        }
    </script>
</body>

</html>