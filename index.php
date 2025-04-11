<?php
$title = "Komarnici po meri Beograd | Izrada, Montaža, Servis";
$styles = ["css/about_us.css?v=1.0", "css/catalogue.css?v=1.0"];
$initParams = ['about_us'];
$basePath = './'
    ?>

<!DOCTYPE html>
<html lang="sr">
<?php include 'includes/head.php'; ?>

<body>
    <?php include $basePath . 'includes/header.php'; ?>
    <main>
        <div id="about_us"></div>
        <?php include $basePath . 'html/catalogue.php'; ?>
    </main>
    <?php include $basePath . 'includes/footer.php'; ?>

    <script type="module">
        const basePath = '<?= $basePath ?>';
        
        import {
            loadVideo
        } from './js/video.js?v=1.0'

        window.onload = event => {
            loadVideo(basePath, 'promoVideo')
        }
    </script>
</body>

</html>