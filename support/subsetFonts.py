from fontTools.subset import main

def createSubSet(
    font_path:str = "fonts/fa-solid-900.woff2",
    characters:str = "0xf05e,0xf015,0xf0d7" # fa-ban (\f05e), fa-home (\f015), fa-caret-down (\f0d7)
    ):

    font = font_path.split('.')[0]
    font_path = "fonts/fa-solid-900.woff2"

    main([
        font_path,
        f"--unicodes={characters}",
        f"--output-file={font}-subset.woff2"
    ])
    
def compressFontSet(
    font_path:str,
    characters:str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzČĆŽŠĐčćžšđ0123456789.,!?-–—()[]{}:;'\" "
    ):
    
    unicode_hex = ",".join([f"U+{ord(char):04X}" for char in characters])
    font = font_path.split('.')[0]

    main([
        font_path,
        f"--unicodes={unicode_hex}",
        "--flavor=woff2",
        f"--output-file={font}-subset.woff2",
        "--layout-features='*'",  # Sačuvaj osnovne OpenType funkcije
    ])
    

for font in ['fonts/Poppins-Regular.ttf',
             'fonts/Poppins-Medium.ttf',
             'fonts/Poppins-SemiBold.ttf',
             'fonts/Poppins-Bold.ttf',
             'fonts/Poppins-ExtraBold.ttf',
             'fonts/Poppins-Black.ttf']:
    compressFontSet(font)
