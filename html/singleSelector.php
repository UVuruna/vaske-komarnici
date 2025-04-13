<?php
function displayProduct(
    $version,
    $basePath,
    $title,
    $imgLink,
    $altText,
    $buttonLink = null,
    $priceText = null,
    $showTipRama = null): void {
    
    $titleHTML = '';
    if ($title) {
        $titleHTML = <<<HTML
            <h2>{$altText}</h2>
        HTML;
    }
    
    $tipRamaHtml = '';
    if ($showTipRama) {
        $tipRamaHtml = <<<HTML
            <li>
                <h3><strong>Tip rama</strong></h3>
                <ul>
                    <li>
                        <img
                            class='hoverHighlight'
                            src='{$basePath}img/other/Both.webp?{$version}'
                            alt='{$altText} dvostrani'
                        />
                    </li>
                    <li>
                        <img
                            class='hoverHighlight'
                            src='{$basePath}img/other/One.webp?{$version}'
                            alt='{$altText} jednostrani'
                        />
                    </li>
                </ul>
            </li>
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
    <span class="promo">
        {$titleHTML}
        <ul class='selectFrame'>
            <li>
                <strong><i class='fa-solid fa-ban'></i></strong>
            </li>
            <li>
                <h3><strong>Boja rama</strong></h3>
                <ul>
                    <li>
                        <img
                            class='hoverHighlight'
                            src='{$basePath}img/other/White.webp?{$version}'
                            alt='{$altText} bele boje'
                        />
                    </li>
                    <li>
                        <img
                            class='hoverHighlight'
                            src='{$basePath}img/other/Antracite.webp?{$version}'
                            alt='{$altText} antracit boje'
                        />
                    </li>
                    <li>
                        <img
                            class='hoverHighlight'
                            src='{$basePath}img/other/Brown.webp?{$version}'
                            alt='{$altText} braon boje'
                        />
                    </li>
                </ul>
            </li>
            <li>
                <h3><strong>Boja mreže</strong></h3>
                <ul>
                    <li>
                        <img
                            class='hoverHighlight'
                            src='{$basePath}img/other/Light.webp?{$version}'
                            alt='{$altText} tamnije (crne) mreže'
                        />
                    </li>
                    <li>
                        <img
                            class='hoverHighlight'
                            src='{$basePath}img/other/Dark.webp?{$version}'
                            alt='{$altText} tamnije (crne) mreže'
                        />
                    </li>
                </ul>
            </li>
            {$tipRamaHtml}
        </ul>
        <img
            class='promoImage hoverHighlight'
            src='{$basePath}img/items/product/{$imgLink}'
            alt='{$altText} slika'
        />
        {$cenaHtml}
        {$saznajVišeHtml}
    </span>
    HTML;
}
