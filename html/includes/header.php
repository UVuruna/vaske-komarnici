<div id="header">
    <div id="guide">
        <button onclick="closeBtn();">&times;</button>
    </div>
    <i onclick="showGuide('header', 'prezentacija slika sa terena')" class="fa-solid guide pulse"></i>

    <span class="logo-frame" onclick="themeCycle('<?php echo $basePath ?>')">  
        <?php 
            $logoSVG = str_replace(
                '<svg ', 
                "<svg width='70' height='70' ", 
                $logoSVG);
            echo $logoSVG;
        ?>
    </span>
    <div class="pages_frame">
        <?php
            $dropdownMenu = str_replace(
                '<svg ', 
                "<svg width='70' height='70' ", 
                $dropdownMenu);
            echo $dropdownMenu
        ?>
        <nav>
            <ul class="menu" role="menu">
                <li role="menuitem"><a href="<?php echo $basePath ?>" aria-label="Početna strana"><i class="fa-solid home" style="transform: scale(1.5);"></i></a></li>
                <li class="dropdownTrigger" role="menuitem">Tip Komarnika<i class="fa-solid down-arrow"></i>
                    <ul role="menu">
                        <li role="menuitem"><a href="<?php echo $basePath ?>katalog/fiksni-komarnici">Fiksni</a></li>
                        <li role="menuitem"><a href="<?php echo $basePath ?>katalog/rolo-komarnici">Rolo</a></li>
                        <li role="menuitem"><a href="<?php echo $basePath ?>katalog/plise-komarnici">Plise</a></li>
                    </ul>
                </li>
                <li role="menuitem"><a href="<?php echo $basePath ?>o_nama">O nama</a></li>
                <li role="menuitem"><a href="<?php echo $basePath ?>katalog/">Katalog</a></li>
                <li role="menuitem" class="pulse"><a href="<?php echo $basePath ?>kontakt/">Poručite Odmah</a></li>
            </ul>
        </nav>
        <button class="pulse" onclick="window.location.href='tel:<?php echo $companyPhone ?>'"><?php echo $companyPhoneLocal ?></button>
    </div>
</div>