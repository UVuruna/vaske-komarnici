<?php
    $basePath = '../';
    $page     = 'katalog';
    $styles   = ["css/catalogue.css", "css/singleCatalogue.css"];
    $genericTitle = false;
    $presentation = true;
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}includes/head.php"; ?>

<body>
    <?php include "{$basePath}includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/fixed.php"; ?>
        <?php include "{$basePath}html/rolled.php"; ?>
        <?php include "{$basePath}html/plise.php"; ?>
    </main>
    <?php include "{$basePath}includes/footer.php"; ?>

    <script type="module">
        const basePath = '<?php echo $basePath ?>';
        const version = '<?php echo $version ?>';

        import {
            loadVideo
        } from '<?php echo $basePath ?>js/video.js?v=<?php echo $version ?>'

        window.onload = event => {
            loadVideo(basePath, 'Fixed_Both');
            loadVideo(basePath, 'Fixed_One');
            loadVideo(basePath, 'Rolled');
            loadVideo(basePath, 'PliseDoor_Both');
            loadVideo(basePath, 'PliseDoor_One');
            loadVideo(basePath, 'PliseWindow_Both');
            loadVideo(basePath, 'PliseWindow_One') 
        }
    </script>
</body>