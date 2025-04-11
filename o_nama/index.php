<?php
    $basePath = '../';
    $version  = '1.00';
    $page     = 'o_nama';
    $styles   = ["css/about_us.css?v=$version"];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}includes/head.php"; ?>

<body>
    <?php include "{$basePath}includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/about_us.php"; ?>
    </main>
    <?php include "{$basePath}includes/footer.php"; ?>
</body>

</html>