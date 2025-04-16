<div id="header">
    <span class="logo-frame" onclick="themeCycle('<?php echo $basePath ?>')">
        <img
            src="<?php echo $basePath ?>img/logo/logo.svg?v=<?php echo $version ?>"
            width="50"
            height="50"
            id="logo"
            alt="logo <?php echo $companyName ?>" />
    </span>
    <div class="pages_frame">
        <img
            width="50"
            height="45"
            id="menu-icon"
            alt="ikona menija" />
        <nav>
            <ul class="menu" role="menu">
                <li role="menuitem">
                    <a href="<?php echo $basePath ?>" aria-label="Početna strana">
                        <i class="fa-solid fa-home"></i>
                    </a>
                </li>

                <li class="dropdownTrigger" role="menuitem">
                    Tip Komarnika
                    <i class="fa-solid fa-caret-down"></i>
                    <ul role="menu">
                        <li onclick="location.href='<?php echo $basePath ?>katalog/fiksni-komarnici'" role="menuitem">
                            Fiksni
                        </li>
                        <li onclick="location.href='<?php echo $basePath ?>katalog/rolo-komarnici'" role="menuitem">
                            Rolo
                        </li>
                        <li onclick="location.href='<?php echo $basePath ?>katalog/plise'" role="menuitem">
                            Plise
                        </li>
                    </ul>
                </li>
                <li role="menuitem">
                    <a href="<?php echo $basePath ?>o_nama">
                        O nama
                    </a>
                </li>
                <li role="menuitem">
                    <a href="<?php echo $basePath ?>katalog/">
                        Katalog
                    </a>
                </li>
                <li role="menuitem">
                    <a href="<?php echo $basePath ?>naručivanje/">
                        Naručivanje
                    </a>
                </li>
                <li role="menuitem">
                    <a href="<?php echo $basePath ?>kontakt/">
                        Kontakt
                    </a>
                </li>
            </ul>
        </nav>
        <button onclick="window.location.href='tel:<?php echo $companyPhone ?>'">
            <?php echo $companyPhoneLocal ?>
        </button>
    </div>
</div>