<?php
    $basePath = '../../';
    $page     = 'fiksni';
    $styles   = ["css/catalogue.css", "css/fixed.css"];
    $presentation = ['FixedBoth-Window','FixedOne-Window'];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}includes/head.php"; ?>

<body>
    <?php include "{$basePath}includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/fixed.php"; ?>
    </main>
    <?php include "{$basePath}includes/footer.php"; ?>

    <script type="module">
        const basePath = '<?php echo $basePath ?>';
        const version = '<?php echo $version ?>';

        import {
            loadVideo
        } from '<?php echo $basePath ?>js/video.js?v=<?php echo $version ?>'

        window.onload = event => {
            loadVideo(basePath, 'FixedBoth-Window');
            loadVideo(basePath, 'FixedOne-Window')
        }
    </script>
</body>

</html>