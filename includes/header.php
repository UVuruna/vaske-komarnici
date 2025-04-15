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
                        <li onclick="location.href='<?php echo $basePath ?>katalog/fiksni-komarnici'">Fiksni</li>
                        <li onclick="location.href='<?php echo $basePath ?>katalog/rolo-komarnici'">Rolo</li>
                        <li onclick="location.href='<?php echo $basePath ?>katalog/plise'">Plise</li>
                    </ul>
                </li>
                <li><a href="<?php echo $basePath ?>o_nama">O nama</a></li>
                <li><a href="<?php echo $basePath ?>katalog/">Katalog</a></li>
                <li><a href="<?php echo $basePath ?>naručivanje/">Naručivanje</a></li>
                <li><a href="<?php echo $basePath ?>kontakt/">Kontakt</a></li>
            </ul>
        </nav>
        <button onclick="window.location.href='tel:<?php echo $companyPhone ?>'">
            <?php echo $companyPhoneLocal ?>
        </button>
    </div>
</div>