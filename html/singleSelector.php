<?php
function displayProduct($basePath, $imgLink, $buttonLink, $priceText, $showTipKomarnika = true): void
{
    echo "
    <section>
        <ul class='selectFrame'>
            <li>
                <i class='fa-solid fa-ban'></i>
            </li>
            <li>
                <h3><strong>Boja rama</strong></h3>
                <ul>
                    <li>
                        <img
                            class='hoverHighlight'
                            src='{$basePath}img/other/White.webp?v=1.0'
                            alt='fiksni komarnik bele boje'
                        />
                    </li>
                    <li>
                        <img
                            class='hoverHighlight'
                            src='{$basePath}img/other/Antracite.webp?v=1.0'
                            alt='fiksni komarnik antracit boje'
                        />
                    </li>
                    <li>
                        <img
                            class='hoverHighlight'
                            src='{$basePath}img/other/Brown.webp?v=1.0'
                            alt='fiksni komarnik braon boje'
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
                            src='{$basePath}img/other/Light.webp?v=1.0'
                            alt='fiksni komarnik tamnije (crne) mreže'
                        />
                    </li>
                    <li>
                        <img
                            class='hoverHighlight'
                            src='{$basePath}img/other/Dark.webp?v=1.0'
                            alt='fiksni komarnik tamnije (crne) mreže'
                        />
                    </li>
                </ul>
            </li>";

    if ($showTipKomarnika) {
        echo "
                <li>
                    <h3><strong>Tip komarnika</strong></h3>
                    <ul>
                        <li>
                            <img
                                class='hoverHighlight'
                                src='{$basePath}img/other/Both.webp?v=1.0'
                                alt='fiksni komarnik dvostrani'
                            />
                        </li>
                        <li>
                            <img
                                class='hoverHighlight'
                                src='{$basePath}img/other/One.webp?v=1.0'
                                alt='fiksni komarnik jednostrani'
                            />
                        </li>
                    </ul>
                </li>";
    }

    echo "</ul>

        <img
            class='hoverHighlight'
            src='{$basePath}img/items/product/{$imgLink}'
            alt='Fiksni komarnik slika'
        />
        <h2>{$priceText}</h2>
        <button onclick='window.location.href='{$buttonLink}';'>Saznaj više</button>
    </section>";
}
