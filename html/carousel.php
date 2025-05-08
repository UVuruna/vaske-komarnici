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

    function is_video($filename) {
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        $video_extensions = ['mp4'];
        return in_array($ext, $video_extensions);
    }
?>

<header style="position: relative;">
    <div id="guide">
        <button onclick="closeBtn();">&times;</button>
    </div>
    <i onclick="showGuide('slideshow', 'tabela za naručivanje komarnika')" class="fa-solid guide pulse"></i>

    <h2>Naši Radovi na Terenu</h2>
    <p>Pogledajte primere ugradnje komarnika kod naših zadovoljnih klijenata. Svaki projekat je pažljivo izveden uz precizno merenje i profesionalnu montažu, kako bismo obezbedili maksimalnu zaštitu i dugotrajnost. Bilo da se radi o prozorima, balkonskim vratima ili specifičnim dimenzijama, naš tim izlazi na teren i pruža rešenja po meri.</p>
</header>

<div class="carousel">
    <div class="carousel-track">
        <?php foreach ($files as $file): ?>
            <div class="carousel-item">
                <?php
                    $isVideo = is_video($file);
                    $filename = pathinfo($file, PATHINFO_FILENAME);
                ?>
                <?php if ($isVideo): ?>
                    <video class="clickable lazy-media video-loop" src="<?= $file ?>" autoplay muted loop playsinline controls preload="none"></video>
                <?php else: ?>
                    <img class="clickable" src="<?= $file ?>" alt="Fotografija sa terena" loading="lazy">
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<div id="lightbox" class="lightbox">
    <img id="lightbox-image" src="" alt="">
    <video id="lightbox-video" src=""></video>
    <button onclick="this.parentElement.style.display='none'" style="position: absolute; top: 20px; right: 30px;">&times;</button>
    <button class="next">&gt;</button>
    <button class="prev">&lt;</button>
</div>

