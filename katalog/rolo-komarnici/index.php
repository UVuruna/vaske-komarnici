<?php
    $basePath = '../../';
    $page     = 'rolo';
    $styles   = [];
    $presentation = ['Rolo-Window'];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}includes/head.php"; ?>

<body>
    <?php include "{$basePath}includes/header.php"; ?>
    <main>
    </main>
    <?php include "{$basePath}includes/footer.php"; ?>

    <script type="module">
        const basePath = '<?php echo $basePath ?>';
        const version = '<?php echo $version ?>';

        import {
            loadVideo
        } from '<?php echo $basePath ?>js/video.js?v=<?php echo $version ?>'

        window.onload = event => {
            loadVideo(basePath, 'Rolo-Window')
        }
    </script>
</body>

</html>