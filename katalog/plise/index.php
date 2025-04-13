<?php
    $basePath = '../../';
    $page     = 'plise';
    $styles   = [];
    $presentation = ['PliseBoth-Door','PliseOne-Door','PliseBoth-Window','PliseOne-Window'];
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
            loadVideo(basePath, 'PliseBoth-Door')
            loadVideo(basePath, 'PliseOne-Door')
            loadVideo(basePath, 'PliseBoth-Window')
            loadVideo(basePath, 'PliseOne-Window')  
        }
    </script>
</body>

</html>