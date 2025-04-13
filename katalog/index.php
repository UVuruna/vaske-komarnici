<?php
    $basePath = './';
    $page     = 'katalog';
    $styles   = ["css/catalogue.css"];
    $presentation = ['FixedBoth-Window','FixedOne-Window','Rolo-Window','PliseBoth-Door','PliseOne-Door','PliseBoth-Window','PliseOne-Window'];
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
            loadVideo(basePath, 'FixedBoth-Window')
            loadVideo(basePath, 'FixedOne-Window')
            loadVideo(basePath, 'Rolo-Window')
            loadVideo(basePath, 'PliseBoth-Door')
            loadVideo(basePath, 'PliseOne-Door')
            loadVideo(basePath, 'PliseBoth-Window')
            loadVideo(basePath, 'PliseOne-Window')  
        }
    </script>
</body>