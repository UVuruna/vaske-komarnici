<?php
function displayProduct(
    $version,
    $basePath,
    $title,
    $imgLink,
    $altText,
    $buttonLink = null,
    $priceText = null,
    $showType = null
): void {
    $guide = '';
    if (!$priceText) {
        $guide = <<<HTML
            <i onclick="showGuide('catalogue', 'slika kataloga')" class="fa-solid guide" style="right: 0;"></i>
        HTML;
    } else {
        $guide = <<<HTML
            <i onclick="showGuide('catalogue', 'slika kataloga')" class="fa-solid guide" style="right: 2rem; top: 1.2rem"></i>
        HTML;
    }

    $titleHTML = '';
    if ($title) {
        $titleHTML = <<<HTML
            <h2>{$altText}</h2>
        HTML;
    }

    $tipRamaHtml = '';
    if ($showType) {
        $tipRamaHtml = <<<HTML
            <div class='light border'>
                <h3><strong>Tip</strong></h3>
                <ul>
                    <li><img width='40' height='40' class='hoverHighlight hoverable' src='{$basePath}img/other/Both.webp?{$version}' alt='{$altText} dvostrani' loading='lazy'/></li>
                    <li><img width='40' height='40' class='hoverHighlight hoverable' src='{$basePath}img/other/One.webp?{$version}' alt='{$altText} jednostrani' loading='lazy'/></li>
                </ul>
            </div>
        HTML;
    }

    $cenaHtml = '';
    if ($priceText) {
        preg_match('/\d+/', $priceText, $matches);
        $priceNumber = $matches[0] ?? null;

        $cenaHtml = <<<HTML
            <strong class="price" itemprop="price" content="{$priceNumber}">{$priceText}</strong>
        HTML;
    }
    $saznajVišeHtml = '';
    if ($buttonLink) {
        $saznajVišeHtml = <<<HTML
            <button onclick="window.location.href='{$buttonLink}';">Saznaj više</button>
        HTML;
    }

    echo <<<HTML
    <div class='promoContainer'>
        <section class="promo" style="position: relative">
            <div id="guide">
                <button onclick="closeBtn();">&times;</button>
            </div>
            {$guide}
            {$titleHTML}
            <div class='selectFrame'>
                <i class='light border fa-solid ban' width='45' height='45'></i>
                <div class='light border'>
                    <h3><strong>Ram</strong></h3>
                    <ul>
                        <li><img width='40' height='40' class='hoverHighlight hoverable' src='{$basePath}img/other/White.webp?{$version}' alt='{$altText} bele boje' loading='lazy'/></li>
                        <li><img width='40' height='40' class='hoverHighlight hoverable' src='{$basePath}img/other/Antracite.webp?{$version}' alt='{$altText} antracit boje' loading='lazy'/></li>
                        <li><img width='40' height='40' class='hoverHighlight hoverable' src='{$basePath}img/other/Brown.webp?{$version}' alt='{$altText} braon boje'/></li>
                    </ul>
                </div>
                <div class='light border'>
                    <h3><strong>Mreža</strong></h3>
                    <ul>
                        <li><img width='40' height='40' class='hoverHighlight hoverable' src='{$basePath}img/other/Light.webp?{$version}' alt='{$altText} tamnije (crne) mreže' loading='lazy'/></li>
                        <li><img width='40' height='40' class='hoverHighlight hoverable' src='{$basePath}img/other/Dark.webp?{$version}' alt='{$altText} tamnije (crne) mreže' loading='lazy'/></li>
                    </ul>
                </div>
                {$tipRamaHtml}
            </div>
            <img width='500' height='500' class='promoImage hoverHighlight hoverable' src='{$basePath}img/items/product/{$imgLink}' alt='{$altText} slika' loading='lazy'/>
            {$cenaHtml}
            {$saznajVišeHtml}
        </section>
        <section class="explanation">
            <h2 class="title">{$altText}</h2>
            <div>
                <p class="type"></p>
                <p class="sides"></p>
            </div>
            <div>
                <h3 class="frameTitle">Boja rama</h3>
                <p class="frame"></p>
            </div>
            <div>
                <h3 class="netTitle">Boja mreže</h3>
                <p class="net"></p>
            </div>
        </section>
    </div>
    HTML;
}
