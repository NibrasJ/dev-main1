format_output = "\033[47m\033[30m"
format_reset = "\033[0m"

print(f"{format_output} ----START---- {format_reset}")

# Tuples
# Tuples are immutable data collections
# Think of them as lists that don't change

fruits = ("Apple", "pear",  "banana")

# we can print out whole tuple or individual entries in the same way as we do with a list.
print(fruits)
print(fruits[1])

#here we tried to update an item in our tuple
# this is not allowed with a tuple
#fruits[1] = "mango"
# print(fruits)

#accessing lenght of tuple
print("items in tuple:", len(fruits))

#iterating through a tuple

for fruit in fruits:
    print(fruit)

#tuple are most useful for read only data
#they can also be stored in sets & dictionary

#sets
#sets are unordered collections of unique data points
days_of_week = {"monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"}

print(days_of_week)

#sets will not include duplicates like monday
days_of_week = {"monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "monday"}
print(days_of_week)

#intersection allows us to access values present in both collections
weekend = {"saturday", "sunday"}
print(days_of_week.intersection(weekend))

#this can also be written with & 
print(days_of_week & weekend)

#difference  allows us to access values that are in the first set, but not the second
print(days_of_week.difference(weekend))

#this does not return any value
print(weekend.difference(days_of_week))

# this can also be be written with a -
print(days_of_week - weekend)

# Union combines the values found in two collections
weekdays = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"}
full_week = weekdays.union (weekend)
print(full_week)
# Can also be written using |

week = weekdays | weekend
print(week)