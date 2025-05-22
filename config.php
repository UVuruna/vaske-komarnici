<?php
$start = microtime(true);
function chooseTheme() {
    date_default_timezone_set('Europe/Belgrade');
    $hour = (int) date('G');
    if ($hour >= 4 && $hour < 10) {return 'morning';}
    elseif ($hour >= 10 && $hour < 16) {return 'noon';}
    elseif ($hour >= 16 && $hour < 22) {return 'afternoon';}
    else {return 'night';}
}
$theme = $_COOKIE['theme'] ?? chooseTheme();

