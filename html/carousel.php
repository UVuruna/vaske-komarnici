<?php
    $files = glob("{$basePath}/img/slideshow*.{jpg,jpeg,png,webp,mp4}", GLOB_BRACE);

    function is_video($filename) {
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        $video_extensions = ['mp4'];
        return in_array($ext, $video_extensions);
    }
?>

<div class="menu">
    <div class="menu--wrapper">
        <div class="menu--item">
            <figure>
                <?php foreach ($files as $file): ?>
                    <?php
                        $isVideo = is_video($file);
                        $filename = pathinfo($file, PATHINFO_FILENAME);
                    ?>
                    <?php if ($isVideo): ?>
                        <video
                            class="lazy-media"
                            data-src="<?= $file ?>"
                            style="max-width: 200px"
                            autoplay muted loop playsinline
                            preload="none"
                            controls>
                            <source data-src="<?= $file ?>">
                            <source data-src="<?= $basePath ?>/img/slideshow/backup/<?= $filename ?>.webp">
                            <source data-src="<?= $basePath ?>/img/slideshow/backup/<?= $filename ?>_h264.mp4">
                        </video>
                    <?php else: ?>
                        <img
                            data-src="<?= $file ?>"
                            alt="Fotografija sa terena"
                            style="max-width: 200px"
                            loading="lazy">
                    <?php endif; ?>
                <?php endforeach; ?>
            </figure>
        </div>
    </div>
</div>
