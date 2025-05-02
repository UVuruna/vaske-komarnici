<?php
    $basePath = '../';
    $page     = 'kontakt';
    $styles   = [ 'css/contact_us.css' ];
    $presentation = null;
    $carousel = null;
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

    <script defer type="module">
        const priceDict = <?php echo json_encode($cenovnik) ?>;
        import(`<?php echo $basePath ?>js/ordering/orderTable.js?v=<?php echo $version; ?>`).then(module => {
            module.orderTableInit(priceDict)
        });
    </script>
    <script defer type="module">
        const path = '<?php echo $basePath ?>'
        import(`${path}js/ordering/showPopup.js?v=<?php echo $version; ?>`).then(module => {
            module.showPopup(path)
        });
    </script>
    <script defer src="<?php echo $basePath ?>js/ordering/orderMemory.js?v=<?php echo $version ?>"></script>
</body>

</html>