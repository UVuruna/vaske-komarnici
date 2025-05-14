<?php
    $basePath = "../";
    $page     = "kontakt";
    include "{$basePath}html/includes/variables.php";
    include "{$basePath}html/includes/config.php";
        
    $styles   = [ "contact_us" ];
    $init = [
        "presentation" => null,
        "carousel" => null,
        "order" => $cenovnik
    ];
?>

<!DOCTYPE html>
<html lang="sr">
    <?php include "{$basePath}html/includes/head.php" ?>
    <body style="background-color: <?php echo $primary ?>;">
        <?php include "{$basePath}html/includes/loader.php" ?>
        <main>
            <?php
            include "{$basePath}html/includes/header.php";
            include "{$basePath}html/contact_us.php";
            include "{$basePath}html/includes/footer.php"
            ?>
        </main>
    </body>
</html>