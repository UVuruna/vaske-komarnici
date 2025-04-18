export function updateManifest(themeColor, bgColor) {
    const manifest = {
        name: "Vaske Komarnici",
        short_name: "Komarnici",
        start_url: window.location.origin + "/",
        display: "standalone",
        background_color: bgColor,
        theme_color: themeColor,
        icons: [
            {
                src: window.location.origin + "/img/logo/android-chrome-192x192.png",
                type: "image/png",
                sizes: "192x192"
            },
            {
                src: window.location.origin + "/img/logo/android-chrome-512x512.png",
                type: "image/png",
                sizes: "512x512"
            }
        ]
    };

    const stringManifest = JSON.stringify(manifest);
    const blob = new Blob([stringManifest], { type: 'application/json' });
    const manifestURL = URL.createObjectURL(blob);

    let link = document.querySelector('link[rel="manifest"]');
    if (!link) {
        link = document.createElement('link');
        link.rel = 'manifest';
        document.head.appendChild(link);
    }
    link.href = manifestURL;

    console.log("Custom manifest applied!");
}