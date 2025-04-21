<?php
    $basePath = '../';
    $page     = 'kontakt';
    $styles   = [ 'css/contact_us.css' ];
    $presentation = null;
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}html/includes/head.php"; ?>

<body>
    <?php include "{$basePath}html/includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/contact_us.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>

    <script src="<?php echo $basePath ?>js/ordering.js?v=<?php echo $version ?>"></script>
</body>

</html>