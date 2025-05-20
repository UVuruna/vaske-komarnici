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


    function generateName($url) {
        $name = pathinfo($url, PATHINFO_FILENAME);
    
        if (stripos($name, 'Rolo') !== false) {
            return "rolo komarnika";
        } elseif (stripos($name, 'Plise') !== false) {
            return "plise komarnika";
        } else {
            return "fiksnih komarnika";
        }
    }

    $extension = [
        "White_Light",
        "White_Dark",
        "Antracite_Light",
        "Antracite_Dark",
        "Brown_Light",
        "Brown_Dark"
    ];
    $type = ["Both","One"];
    $category = ["Door","Window"];
    function getThumbnail($name) {
        global $extension,$type,$category;
        $ext = $extension[array_rand($extension)];
        
        if ($name === "rolo komarnika") {
            return "Rolled_{$ext}.webp";
        } elseif ($name === "plise komarnika") {
            $typ = $type[array_rand($type)];
            $cat = $category[array_rand($category)];
            return "Plise{$cat}_{$typ}_{$ext}.webp";
        } else {
            $typ = $type[array_rand($type)];
            return "Fixed_{$typ}_{$ext}.webp";
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
        $name = generateName($file);
        $carouselJsonLD['image'][] = [
            "@type" => generateType($file),
            "name" => "Ugradnja {$name}",
            "description" => "Pogledajte kako izgleda profesionalna ugradnja {$name}",
            "thumbnailUrl" => "https://vaske-komarnici.com/img/items/product/" . getThumbnail($name),
            "uploadDate" => "2025-05-07T00:00:00+02:00",
            "contentUrl" => str_replace($basePath, "https://vaske-komarnici.com/", $file)
        ];
    }