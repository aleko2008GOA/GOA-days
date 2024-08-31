text = "My name is Alex"
N = 0
arr = list(text)
for i in range(len(arr)):
    if arr[i].isupper():
        N += 1
print(f"{N} capital letters and {N} increments.")