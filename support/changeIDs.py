
def svgChangeIDs(url:str):
    with open(url, 'r') as SVG:
        text:str = SVG.read()
    name = url.split('.')[0].split('/')[-1]
    print(name)
    for i in ['radial-gradient','linear-gradient']:
        text = text.replace(i,f'{i}-{name}')
    
    with open(url, 'w') as SVG:
        SVG.write(text)
    

for i in ['img/logo/logo.svg', 'img/other/dropdown-menu.svg']:
    svgChangeIDs(i)