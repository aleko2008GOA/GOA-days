import numpy as np
# 1
class book:
    def __init__(self, title, author, year):
        self.title = title,
        self.author = author,
        self.year = year

book1 = book("The White Fang", "Jack London", 1906)
# 2
book1.genre = "Adventure"
# 3
del(book1.genre)
# 4
print(book1.title)
# 5
try:
    print(book1.genre)
except AttributeError:
    print(AttributeError)
# 6
print(book1.title, book1.author, book1.year)
# 7
book2 = book("He", "Jecky", 1978)
book3 = book("Somethin", "Me", 1289)
arr1 = [book1, book2, book3]
# 8
num_of_prop = len(book1.__dict__)
print(num_of_prop)
# 9
class book2:
    def __init__(self, title, author, year):
        self.title = title,
        self.author = author,
        self.year = year

book4 = book2("He", "Jecky", 1978)
all_books = book("The White Fang", "Jack London", book4)
print(all_books.year.title)
# 10
array = np.array([str(book1.title), str(book1.author), int(book1.year)])
print(array)
# 11
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
# 12
arr = np.array(list(arr) + [11])
# 13
arr = np.array([0] + list(arr))
# 14-15
arr = np.delete(arr, [0, -1])
# 16
num = len(arr)
# 17
print(arr[2])
# 18
for i in range(num):
    print(arr[i])
# 19
new_arr = arr * 2
# 20
new_arr = np.flip(new_arr)