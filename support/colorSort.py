GRAY = ['#5b5f62', '#606366', '#6e7174', '#6f7274', '#7f7f7d', '#87898a', '#939393', '#a9a9a9', '#ababab', '#b1b1af', '#b5b5b5', 
        '#c3c3c3', '#c6c6c6', '#c9c9c5', '#c9cac5', '#d7d8d3', '#ddded8', '#dedede', '#ededed', '#f3f3f3']

def createPallete(palleteText):
    with open(f'support/{palleteText}', 'r') as pallete:
        text = pallete.read()
    Pallete = []    
    tempPallete = text.replace('\n','').split('#')
    for i in tempPallete:
        if i:
            Pallete.append(f'#{i}')
    return Pallete


def hex_to_sum(hex_color):
    hex_value = hex_color.lstrip('#')
    suma = 0
    for i,val in enumerate(hex_value):
        suma += int(val, 16)*16 if i%2==0 else int(val, 16)
    return suma
    

def sort_by_hex_sum(colors):
    return sorted(colors, key=hex_to_sum)

if __name__ == '__main__':
    Pallete = sort_by_hex_sum(createPallete('pallete.txt'))
    for i in Pallete:
        print(f'"{i}",')
    print(len(Pallete))
    
    gold = [
        '#926c15',
        '#b28d34',
        '#c9980b',
        '#ffc300',
        '#ffd235',
        '#ffe169',
        '#f0c42d',
        ]
