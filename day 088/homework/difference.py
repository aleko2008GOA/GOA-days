import random
arr = [random.randint(1, 3), random.randint(1, 3), random.randint(1, 3)]
if arr[0] != arr[1] and arr[1] != arr[2] and arr[0] != arr[2]:
    print(True)
else:
    print(False)