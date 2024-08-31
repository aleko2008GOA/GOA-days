while True:
    str2 = input('from 2 to 10: ')
    try:
        int(str2) + 1
        if all(i in '01' for i in str2):
            break
        else:
            print("Invalid binary number! Use only 0 and 1.")
    except:
        print("Use numbers only!")
        
while True:
    str10 = input('from 10 to 2: ')
    try:
        int(str10) + 1
        break
    except:
        print("Use numbers only!")

arr2 = list(str2)
arr10 = []

y = 0
for index, i in enumerate(arr2):
    y += int(i) * (2 ** (len(arr2) - index - 1))
print(f'{str2} to {y}')

x = int(str10)
while x != 1:
    arr10.append(x % 2)
    x = int(x / 2)
arr10.append(1)
arr10.reverse()

print(f'{str10} to {int(''.join(str(i) for i in arr10))}')