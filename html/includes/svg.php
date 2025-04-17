<?php
    $logoSVG = file_get_contents("{$basePath}img/logo/logo.svg");
    $dropdownMenu = file_get_contents("{$basePath}img/other/dropdown-menu.svg");

    $gradients = ['linear-gradient', 'radial-gradient', '.st', 'class="st'];

    $gradientsCount = count($gradients); // Sačuvaj dužinu niza

    for ($i = 0; $i < $gradientsCount; $i++) {
        // Zamenjuj za logo
        $logoSVG = str_replace(
            $gradients[$i], 
            $gradients[$i] . '-logo', 
            $logoSVG
        );

        // Zamenjuj za dropdown menu
        $dropdownMenu = str_replace(
            $gradients[$i], 
            $gradients[$i] . '-menu', 
            $dropdownMenu
        );
    }
?>

