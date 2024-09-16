import React from "react";
import ClientComp from "./clientComp";
import ServerComp from "./serverComp";

function Home() {
  return (
    <>
      <ClientComp
        prop1={<ServerComp prop={FIRST_SNIPPET} />}
        prop2={<ServerComp prop={SECOND_SNIPPET} />}
        prop3={<ServerComp prop={THIRD_SNIPPET} />}
      />
    </>
  );
}

const FIRST_SNIPPET = `\
# This is a comment. Python ignores anything after the # symbol
name = "John Doe"  # This is a string
age = 30  # This is an integer
height = 5.9  # This is a floating point number

# Let's print these out
print("Name:", name)
print("Age:", age)
print("Height:", height)\
`;

const SECOND_SNIPPET = `\
# If statement
if age > 18:
    print(name, "is an adult.")
else:
    print(name, "is a minor.")

# For loop
for i in range(5):  # range(5) generates numbers from 0 to 4
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1  # This is the same as 'count = count + 1'\
`;

const THIRD_SNIPPET = `\
# Define a function
def greet(name):
    return "Hello, " + name

# Call the function
print(greet("John Doe"))

# List
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Dictionary
person = {"name": "John Doe", "age": 30, "height": 5.9}
for key, value in person.items():
    print(key, ":", value)\
`;

export default Home;
