<?php
    $folder = "{$basePath}img/slideshow/";
    $allFiles = scandir($folder);
    $files = [];

    foreach ($allFiles as $file) {
        if ($file === '.' || $file === '..') {
            continue;
        }
        foreach ($init['carousel'] as $item) {
            if (strpos($file, $item) !== false) {
                $files[] = "{$folder}{$file}";
                break;
            }
        }
    }
    shuffle($files);

    function is_video($filename) {
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        $video_extensions = ['mp4'];
        return in_array($ext, $video_extensions);
    }


    function generateImageDescription($url) {
        $name = pathinfo($url, PATHINFO_FILENAME);
    
        if (stripos($name, 'Rolo') !== false) {
            return "Primer ugradnje rolo komarnika";
        } elseif (stripos($name, 'Plise') !== false) {
            return "Primer ugradnje plise komarnika";
        } else {
            return "Primer ugradnje komarnika";
        }
    }

    function generateType($file) {
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        return in_array($ext, ['mp4', 'webm']) ? "VideoObject" : "ImageObject";
    }

    $carouselJsonLD = [
        "@context" => "https://schema.org",
        "@type" => "WebPage",
        "name" => "Naši Radovi na Terenu",
        "description" => "Primeri ugradnje komarnika kod klijenata",
        "image" => []
    ];
    
    foreach ($files as $file) {
        $carouselJsonLD['image'][] = [
            "@type" => generateType($file),
            "contentUrl" => str_replace($basePath, "https://vaske-komarnici.com/", $file),
            "description" => generateImageDescription($file)
        ];
    }