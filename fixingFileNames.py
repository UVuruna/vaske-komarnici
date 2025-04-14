import os

folder_path = "U:/xampp/htdocs/vaske-komarnici/img/items/product/"
prefiks = "novi_"
COUNTER = 0
for fajl in os.listdir(folder_path):
    stara_putanja = os.path.join(folder_path, fajl)
    ime_fajla = fajl
    
    if os.path.isfile(stara_putanja):
        COUNTER += 1
        if 'Plise' in ime_fajla:
            for i in ['Window','Door']:
                if i in ime_fajla:
                    ime_fajla = ime_fajla.replace(f"_{i}", "")
                    ime_fajla = ime_fajla.replace("Plise", f"Plise{i}")
        else:
            ime_fajla = ime_fajla.replace("_Window", "")
            if 'Rolo' in ime_fajla:
                ime_fajla = ime_fajla.replace("Rolo", "Rolled")
        
        if ime_fajla == fajl:
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
        
