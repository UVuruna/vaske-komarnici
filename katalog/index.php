<?php
    $basePath = './';
    $version  = '1.00';
    $page     = 'katalog';
    $styles   = ["css/catalogue.css?v=$version"];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}includes/head.php"; ?>

<body>
    <?php include "{$basePath}includes/header.php"; ?>
    <main>
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
            loadVideo(basePath, 'FixedBoth_Window', 'FixedBoth_Window')
            loadVideo(basePath, 'FixedOne_Window', 'FixedOne_Window')
            loadVideo(basePath, 'FixedBoth_Window', 'FixedBoth_Window')
            loadVideo(basePath, 'FixedBoth_Window', 'FixedBoth_Window')
            loadVideo(basePath, 'FixedBoth_Window', 'FixedBoth_Window')
            loadVideo(basePath, 'FixedBoth_Window', 'FixedBoth_Window')
            loadVideo(basePath, 'FixedBoth_Window', 'FixedBoth_Window')
        }
    </script>
</body>