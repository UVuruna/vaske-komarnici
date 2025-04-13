import os

folder_path = "U:/xampp/htdocs/vaske-komarnici/img/items/showroom/"
prefiks = "novi_"
COUNTER = 0
for fajl in os.listdir(folder_path):
    stara_putanja = os.path.join(folder_path, fajl)
    ime_fajla = fajl
    
    if os.path.isfile(stara_putanja):
        COUNTER += 1
        if '.mov' in ime_fajla:
            ime_fajla = ime_fajla.replace(" H264", "")
        elif ' H264' in ime_fajla:
            ime_fajla = ime_fajla.replace(" H264", "_H264")
        else:
            continue
        
        nova_putanja = os.path.join(folder_path, ime_fajla)
        
        print(f"Preimenovano {COUNTER}: {stara_putanja}\n → \t\t{nova_putanja}")
        a = input("Press A to continue...")
        if a == "a":
            print("Continue")
            continue
        else:
            os.rename(stara_putanja, nova_putanja)
            print('Renamed')
        
