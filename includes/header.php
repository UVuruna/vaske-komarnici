<div id="header">
    <span class="logo-frame" onclick="themeCycle('<?php echo $basePath ?>')">
        <img id="logo" alt="logo <?php echo $companyName ?>" />
    </span>
    <div class="pages_frame">
        <img id="menu-icon" alt="ikona menija" />
        <nav>
            <ul class="menu">
                <a href="<?php echo $basePath ?>"><i class="fa-solid fa-home" style="font-size: 1.5rem"></i></a>

                <li class="dropdownTrigger">
                    Tip Komarnika <i class="fa-solid fa-caret-down"></i>
                    <ul>
                        <li><a href="<?php echo $basePath ?>katalog/fiksni-komarnici">Fiksni</a></li>
                        <li><a href="<?php echo $basePath ?>katalog/rolo-komarnici">Rolo</a></li>
                        <li><a href="<?php echo $basePath ?>katalog/plise">Plise</a></li>
                    </ul>
                </li>
                <li><a href="<?php echo $basePath ?>o_nama" class="white">O nama</a></li>
                <li><a href="<?php echo $basePath ?>katalog/" class="white">Katalog</a></li>
                <li><a href="<?php echo $basePath ?>naručivanje/" class="white">Naručivanje</a></li>
                <li><a href="<?php echo $basePath ?>kontakt/" class="white">Kontakt</a></li>
            </ul>
        </nav>
        <button onclick="window.location.href='tel:<?php echo $companyPhone ?>'">
            <?php echo $companyPhoneLocal ?>
        </button>
    </div>
</div>