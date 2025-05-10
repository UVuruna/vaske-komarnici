<?php
    $basePath = '../';
    $page     = 'kontakt';
    include "{$basePath}html/includes/variables.php";
    
    $styles   = [ 'css/contact_us.css' ];
    $init = [
        'presentation' => null,
        'carousel' => null,
        'order' => $cenovnik
    ];
?>

<!DOCTYPE html>
<html lang="sr">
<?php include "{$basePath}html/includes/head.php"; ?>

<body>
    <?php include "{$basePath}html/includes/loader.php"; ?>
    <?php include "{$basePath}html/includes/header.php"; ?>
    <main>
        <?php include "{$basePath}html/contact_us.php"; ?>
    </main>
    <?php include "{$basePath}html/includes/footer.php"; ?>
</body>

</html>