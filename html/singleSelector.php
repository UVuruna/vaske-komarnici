<?php
function displayProduct(
    $version,
    $basePath,
    $title,
    $imgLink,
    $altText,
    $buttonLink = null,
    $price = null,
    $showType = null
): void {
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
    if ($price) {
        $oldPrice = floor($price /0.85);
        
        $cenaHtml = <<<HTML
            <div class="priceFrame">
                <div>
                    <strong class="price">AKCIJA&nbsp;&nbsp;</strong>
                    <small>(popust 15%)</small>
                </div>
                <div>
                    <strong class="price">Cena:</strong>
                    <span class="old-price">{$oldPrice}.99 €/m²</span>

                    <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                        <meta itemprop="priceCurrency" content="EUR">
                        <strong class="price" itemprop="price" content="{$price}">{$price} € / m²</strong>
                        <link itemprop="availability" href="https://schema.org/InStock" />
                    </div>
                </div>
            </div>
            
        HTML;
    }
    $saznajVišeHtml = '';
    if ($buttonLink) {
        $saznajVišeHtml = <<<HTML
            <div class="catalogueAction">
                <button onclick="window.location.href='{$buttonLink}';">Saznaj više</button>
                <button class="pulse" onclick="window.location.href='{$basePath}/kontakt';">Naručite Odmah</button>
            <div>
        HTML;
    } else {
        $saznajVišeHtml = <<<HTML
            <div class="catalogueAction">
                <button class="pulse" onclick="window.location.href='{$basePath}/kontakt';">Naručite Odmah</button>
            <div>
        HTML;
    }

    echo <<<HTML
    <div class='promoContainer'>
        <section class="promo" itemscope itemtype="https://schema.org/Product">
            <meta itemprop="name" content="{$altText}">
            <meta itemprop="category" content="Komarnici">
            <meta itemprop="brand" content="Vaske Komarnici">
            <meta itemprop="image" content="{$basePath}img/items/product/{$imgLink}">
            <meta itemprop="description" content="Kvalitetni {$altText} za prozore i vrata">

            <button class="fa-solid guide pulse" aria-label="Instrukcije za korišćenje prezentacija slika komarnika"></button>
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
            <img width='500' height='500' class='promoImage hoverHighlight hoverable' src='{$basePath}img/items/product/{$imgLink}' alt='{$altText} –  protivinsektna zaštita, Beograd' loading='lazy'/>
            {$cenaHtml}
            {$saznajVišeHtml}
        </section>
        <section class="explanation">
            <article class="light">
                <h2>{$altText}</h2>
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
            </article>
        </section>
    </div>
    HTML;
}
