# 1. Print 1-255
# Print1To255()
# Print all the integers from 1 to 255.
def print1to255():
    for i in range(1, 256):
        print i
print "1. Print 1-255"
print1to255()

# 2. Print Odds 1-255
# PrintOdds1To255()
# Print all odd integers from 1 to 255.
def print_odd1to255():
    for i in range(2, 256, 2):
        print i
print "2. Print Odds 1-255"
print_odd1to255()

# 3. Print Ints and Sum 0-255
# PrintIntsAndSum0To255()
# Print integers from 0 to 255, and with each integer print the sum so far.
def printIntAndSum():
    sum = 0
    for i in range(0, 256):
        sum += i
        print i, sum
print "3. Print Ints and Sum 0-255"
printIntAndSum()

# 4. Iterate and Print Array
# PrintArrayVals(arr)
# Iterate through a given array, printing each value.
def printArrayVals(arr):
    for elem in arr:
        print elem
print "4. Iterate and Print Array"
printArrayVals([12, 32, "Hello", "Good"])

# 5. Find and Print Max
# PrintMaxOfArray(arr)
# Given an array, find and print its largest element.
def printMax(arr):
    max = arr[0]
    for elem in arr:
        if elem > max:
            max = elem
    print max
print "5. Find and Print Max"
printMax([2,34, 43, 44,2])

# 6. Get and Print Average
# PrintAverageOfArray(arr)
# Analyze an array's values and print the average.
def printAvg(arr):
    sum = 0
    for elem in arr:
        sum += elem
    print sum / len(arr)
print "6. Get and Print Average"
printAvg([32, 32, 3, 3])

# 7. Array with Odds
# ReturnOddsArray1To255()
# Create an array with all the odd integers between 1 and 255 (inclusive).
def returnOddArr():
    arr = []
    for i in range(2, 256, 2):
        arr.append(i)
    return arr
print "7. Array with Odds"
print returnOddArr()

# 8. Square the Values
# SquareArrayVals(arr)
# Square each value in a given array, returning that same array with changed values.
def squareArr(arr):
    for i in range(0, len(arr)):
        arr[i] *= arr[i]
    return arr
print "8. Square the Values"
print squareArr([3, 2, 5, 2])

# 9. Greater than Y
# ReturnArrayCountGreaterThanY(arr, y)
# Given an array and a value Y, count and print the number of array values greater than Y.
def printGreaterY(arr, y):
    for elem in arr:
        if elem > y:
            print elem
print "9. Greater than Y"
printGreaterY([32, 3, 312, 43], 50)

# 10. Zero Out Negative Numbers
# ZeroOutArrayNegativeVals(arr)
# Return the given array, after setting any negative values to zero.
def zeroNagative(arr):
    for i in range(0, len(arr)):
        if arr[i] < 0:
            arr[i] = 0
    return arr
print "10. Zero Out Negative Numbers"
print zeroNagative([2, -2, -3, 9, -9])

# 11. Max, Min, Average
# PrintMaxMinAverageArrayVals(arr)
# Given an array, print the max, min and average values for that array.
def printmma(arr):
    min = arr[0]
    max = arr[0]
    sum = 0
    for elem in arr:
        if elem > max:
            max = elem
        if elem < min:
            min = elem
        sum += elem
    print max, min, sum / len(arr)
print "11. Max, Min, Average"
printmma([32, 56, 2, 3, 4])

# 12. Shift Array Values
# ShiftArrayValsLeft(arr)
# Given an array, move all values forward (to the left) by one index, dropping 
# the first value and leaving a 0 (zero) value at the end of the array.
def shiftArrLeft(arr):
    for i in range(0, len(arr) - 1):
        arr[i] = arr[i+1]
    arr[-1] = 0
    return arr
print "12. Shift Array Values"
print shiftArrLeft([2, 3, 5, 6])

# Swap String For Array Negative Values
# SwapStringForArrayNegativeVals(arr)
# Given an array of numbers, replace any negative values with the string 'Dojo'.
def zeroNagativeDojo(arr):
    for i in range(0, len(arr)):
        if arr[i] < 0:
            arr[i] = "Dojo"
    return arr
print "13. Swap String For Array Negative Values"
print zeroNagativeDojo([32, -3, 2, -2, 3])