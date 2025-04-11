<div id="header">
    <span class="logo-frame" onclick="themeCycle('<?= $basePath ?>')">
        <img class="hoverHighlight" id="logo" alt="logo Vaske Komarnici" />
    </span>
    <div class="pages_frame">
        <img id="menu-icon" alt="ikona menija" />
        <nav>
            <ul class="menu">
                <a href="<?= $basePath ?>"><i class="fa-solid fa-home" style="font-size: 1.5rem"></i></a>
                
                <li class="dropdownTrigger">
                    Tip Komarnika <i class="fa-solid fa-caret-down"></i>
                    <ul>
                        <li><a href="<?= $basePath ?>katalog/fiksni-komarnici">Fiksni</a></li>
                        <li><a href="<?= $basePath ?>katalog/rolo-komarnici">Rolo</a></li>
                        <li><a href="<?= $basePath ?>katalog/plise">Plise</a></li>
                    </ul>
                </li>
                <li><a href="<?= $basePath ?>o_nama" class="white">O nama</a></li>
                <li><a href="<?= $basePath ?>katalog/" class="white">Katalog</a></li>
                <li><a href="<?= $basePath ?>kontakt/" class="white">Kontakt</a></li>
            </ul>
        </nav>
        <button onclick="window.location.href='tel:+381631051331'">
            063/105-1331
        </button>
    </div>
</div>