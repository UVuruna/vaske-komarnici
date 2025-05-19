<header class="carouselHeader">
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
                        aria-label="Primer ugradnje komarnika - <?= $cleanName ?>"
                        role="button" tabindex="0">
                        Vaš pretraživač ne podržava video tag.
                    </video>
                <?php else: ?>
                    <img class="clickable"
                    src="<?= $file ?>" alt="Primer ugradnje komarnika - <?= $cleanName ?>"
                    loading="lazy" role="button" tabindex="0">
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
    <button class="close" onclick="closeLightbox()" aria-label="Zatvori prikaz">&times;</button>
</div>