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
        <main>
            <?php include "{$basePath}html/includes/header.php"; ?>
            <?php include "{$basePath}html/contact_us.php"; ?>
            <?php include "{$basePath}html/includes/footer.php"; ?>
        </main>
    </body>
</html>