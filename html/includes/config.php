<?php

$ThemeList = ['morning', 'noon', 'afternoon', 'night'];

$ThemeColors = [
    'morning' => [
        'primary' => '#36597c',
        'secondary' => '#cedce9',
        'primaryElement' => '#b28d34',
        'secondaryElement' => '#f0c42d'
    ],
    'noon' => [
        'primary' => '#2f3727',
        'secondary' => '#dfdedd',
        'primaryElement' => '#437118',
        'secondaryElement' => '#90a955'
    ],
    'afternoon' => [
        'primary' => '#263751',
        'secondary' => '#bdc4d4',
        'primaryElement' => '#840000',
        'secondaryElement' => '#ba4c5b'
    ],
    'night' => [
        'primary' => '#524e53',
        'secondary' => '#d5d3e1',
        'primaryElement' => '#7151a9',
        'secondaryElement' => '#8e83aa'
    ]
];
function chooseTheme() {
    date_default_timezone_set('Europe/Belgrade');
    $hour = (int) date('G');

    if ($hour >= 4 && $hour < 10) {
        return 'morning';
    } elseif ($hour >= 10 && $hour < 16) {
        return 'noon';
    } elseif ($hour >= 16 && $hour < 22) {
        return 'afternoon';
    } else {
        return 'night';
    }
}
$theme = $_COOKIE['theme'] ?? chooseTheme();

$config = [
    'ThemeColors' => $ThemeColors,
    'ThemeList' => $ThemeList,
    'theme' => $theme
];

extract($ThemeColors[$theme]);
