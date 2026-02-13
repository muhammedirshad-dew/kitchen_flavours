# def add(a,b):
#     return a + b


# print(add(2,3)) 


# i = 1

# while i <=5:
#     print(i)
#     i += 1



try:
    a = int(input("Enter a number: "))
    b = int(input("Enter another number: "))
    result = a / b
    print("Result:", result)

except ZeroDivisionError:
    print("Error: Zero division not allowed")

except ValueError:
    print("Error: Please enter valid numbers")

except Exception as e:
    print("Unknown error:", e)

else:
    print("Program executed successfully")

finally:
    print("Program finished")
