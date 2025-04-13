<?php
    $basePath = './';
    $page     = null;
    $styles   = ["css/about_us.css", "css/catalogue.css"];
    $presentation = true;
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
        const version = '<?php echo $version ?>';

        import {
            loadVideo
        } from '<?php echo $basePath ?>js/video.js?v=<?php echo $version ?>'

        window.onload = event => {
            loadVideo(basePath, 'showcase')
        }
    </script>
</body>

</html>