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
?>

<header class="carouselHeader">
    <div id="guide" style="display: none;">
        <button onclick="closeBtn();">&times;</button>
    </div>
    <button class="fa-solid guide pulse" aria-label="Instrukcije za korišćenje navigacionog menija"></button>

    <h2>Naši Radovi na Terenu</h2>
    <p>Pogledajte primere ugradnje komarnika kod naših zadovoljnih klijenata. Svaki projekat je pažljivo izveden uz precizno merenje i profesionalnu montažu, kako bismo obezbedili maksimalnu zaštitu i dugotrajnost. Bilo da se radi o prozorima, balkonskim vratima ili specifičnim dimenzijama, naš tim izlazi na teren i pruža rešenja po meri.</p>
</header>

<div class="carousel">
    <div class="carousel-track">
        <?php foreach ($files as $file): ?>
            <div class="carousel-item">
                <?php
                    $isVideo = is_video($file);
                    $filename = pathinfo($file, PATHINFO_FILENAME); // "Plise3_h264"
                    $cleanName = preg_replace('/_.*$/', '', $filename); // "Plise3"
                ?>
                <?php if ($isVideo): ?>
                    <video class="clickable lazy-media video-loop"
                        src="<?= $file ?>" 
                        autoplay muted loop playsinline controls preload="none"
                        aria-label="Video sa terena <?= $cleanName ?>"
                        tabindex="0">
                        Vaš pretraživač ne podržava video tag.
                    </video>
                <?php else: ?>
                    <img class="clickable"
                    src="<?= $file ?>" alt="Fotografija sa terena <?= $cleanName ?>"
                    loading="lazy" tabindex="0">
                <?php endif ?>
            </div>
        <?php endforeach ?>
    </div>
</div>

<div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Pregled medijskog zapisa" tabindex="0">
    <img id="lightbox-image" src="" alt="">
    <video id="lightbox-video" src=""></video>
    <button class="next" aria-label="Sledeći medijski zapis">&gt;</button>
    <button class="prev" aria-label="Prethodni medijski zapis">&lt;</button>
    <button class="close" onclick="this.parentElement.style.display='none'" aria-label="Zatvori prikaz">&times;</button>
</div>

