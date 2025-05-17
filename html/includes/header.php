<header id="header">
    <button onclick="themeCycle('<?php echo $basePath ?>')" class="logo-frame false" aria-label="Promenite temu sajta">  
        <?php echo file_get_contents("{$basePath}img/logo/logo.svg") ?>
    </button>
        
    <nav class="pages_frame" aria-label="Glavna navigacija">
        <button onclick="navigationMenu(event, this)" id="dropdownMENU" class="false"
            aria-haspopup="true" aria-expanded="false" aria-label="Otvorite meni">
            <?php echo file_get_contents("{$basePath}img/other/dropdown-menu.svg") ?>
        </button>
        <ul id="navigationMenu" class="menu navigation" role="menubar">
            <li role="none">
                <a role="menuitem"  href="<?php echo $basePath ?>" aria-label="Početna strana">
                    <i class="fa-solid home" style="transform: scale(1.5);" aria-label="Početna - Vaske Komarnici"></i>
                    <span class="read-only">Početna</span>
                </a>
            </li>
            <li class="dropdownTrigger" role="none">
                <button onclick="navigationMenu(event, this)" id="komarnici-menu" class="false"
                    aria-haspopup="true" aria-expanded="false" aria-controls="komarnici-menu">
                    Tip Komarnika <i class="fa-solid down-arrow"></i>
                </button>
                <ul id="komarnici-navigation" class="navigation" role="menu">
                    <li role="none"><a role="menuitem" href="<?php echo $basePath ?>katalog/fiksni-komarnici" title="Fiksni komarnici">Fiksni</a></li>
                    <li role="none"><a role="menuitem" href="<?php echo $basePath ?>katalog/rolo-komarnici" title="Rolo komarnici">Rolo</a></li>
                    <li role="none"><a role="menuitem" href="<?php echo $basePath ?>katalog/plise-komarnici" title="Plise komarnici">Plise</a></li>
                </ul>
            </li>
            <li role="none"><a role="menuitem" href="<?php echo $basePath ?>o_nama" title="O nama">O nama</a></li>
            <li role="none"><a role="menuitem" href="<?php echo $basePath ?>katalog/" title="Kompletan katalog">Katalog</a></li>
            <li class="pulse" role="none"><a role="menuitem" href="<?php echo $basePath ?>kontakt/" title="Poručite komarnike odmah">Poručite Odmah</a></li>
        </ul>
        <button class="pulse call-button" onclick="return gtag_report_conversion('tel:<?php echo $companyPhone ?>'); return false;" title="Pozovite odmah">
            <?php echo $companyPhoneLocal ?>
        </button>
    </nav>
        
    <div id="guide">
        <button onclick="closeBtn();" aria-label="Zatvori instrukcije">&times;</button>
    </div>
    <button class="fa-solid guide pulse" aria-label="Instrukcije za korišćenje navigacionog menija"></button>
</header>