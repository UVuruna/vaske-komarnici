<?php
    $files = glob("{$basePath}img/slideshow/*");

    function is_video($filename) {
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        $video_extensions = ['mp4'];
        return in_array($ext, $video_extensions);
    }
?>

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
  <button class="close">&times;</button>
  <button class="next">&gt;</button>
  <button class="prev">&lt;</button>
  <img id="lightbox-image" src="" alt="">
  <video id="lightbox-video" src=""></video>
</div>

