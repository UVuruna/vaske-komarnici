<div id="header">
    <?php include "{$basePath}html/includes/svg.php";?>

    <span class="logo-frame" onclick="themeCycle('<?php echo $basePath ?>')">  
        <?php 
            $logoSVG = str_replace(
                '<svg ', 
                "<svg width='70' height='70' alt='logo {$companyName}'", 
                $logoSVG);
            // Zameni linearne gradijente
            $logoSVG = str_replace(
                'id="linear-gradient"',
                'id="svgIcon-linear-gradient"',
                $logoSVG
            );
            $logoSVG = str_replace(
                'url(#linear-gradient)',
                'url(#svgIcon-linear-gradient)',
                $logoSVG
            );

            // Ako ima radialne gradijente, uradi isto:
            $logoSVG = str_replace(
                'id="radial-gradient"',
                'id="svgIcon-radial-gradient"',
                $logoSVG
            );
            $logoSVG = str_replace(
                'url(#radial-gradient)',
                'url(#svgIcon-radial-gradient)',
                $logoSVG
            );
        
            echo $logoSVG;
        ?>
    </span>
    <div class="pages_frame">
        <?php
            $dropdownMenu = str_replace(
                '<svg ', 
                "<svg width='70' height='70' alt='Navigacioni meni'", 
                $dropdownMenu);
            // Zameni linearne gradijente
                $dropdownMenu = str_replace(
                    'id="linear-gradient"',
                    'id="svgMenu-linear-gradient"',
                    $dropdownMenu
                );
                $dropdownMenu = str_replace(
                    'url(#linear-gradient)',
                    'url(#svgMenu-linear-gradient)',
                    $dropdownMenu
                );

                // Ako ima radialne gradijente, uradi isto:
                $dropdownMenu = str_replace(
                    'id="radial-gradient"',
                    'id="svgMenu-radial-gradient"',
                    $dropdownMenu
                );
                $dropdownMenu = str_replace(
                    'url(#radial-gradient)',
                    'url(#svgMenu-radial-gradient)',
                    $dropdownMenu
                );
            echo $dropdownMenu
        ?>
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