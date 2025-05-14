<?php
    $basePath = "../../";
    $page     = "fiksni";
    include "{$basePath}html/includes/variables.php";
    include "{$basePath}html/includes/config.php";
        
    $styles   = [ "catalogue", "singleCatalogue", "carousel" ];
    $init = [
        "presentation" => ["Fixed_Both", "Fixed_One"],
        "carousel" => null,
        "order" => null
    ];
?>

<!DOCTYPE html>
<html lang="sr">
    <?php include "{$basePath}html/includes/head.php" ?>
    <body style="background-color: <?php echo $primary ?>;">
        <?php include "{$basePath}html/includes/loader.php" ?> 
        <main>
            <header>
                <h1><?= $title ?></h1>
                <p>Izaberite idealan model za vaš prostor – fiksni komarnici svih vrsta i boja, na jednom mestu. Pronađite rešenje koje odgovara vašim potrebama.</p>
            </header>
            <?php
            include "{$basePath}html/includes/header.php";
            include "{$basePath}html/fixed.php";
            include "{$basePath}html/includes/footer.php"
            ?>
        </main> 
    </body>
</html>