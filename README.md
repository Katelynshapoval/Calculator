# Calculator App

This repository contains a simple calculator application implemented in JavaScript. The calculator allows users to perform basic arithmetic operations, such as addition, subtraction, multiplication, division, and calculating percentages. It provides a user interface for input and displays the calculated result.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Functions](#functions)
  
## Introduction

The calculator app is designed to provide a straightforward way to perform calculations using a web browser. It features a user interface where users can input numbers and arithmetic operations, and it displays the result of the calculations.

## Usage

To use the calculator app, follow these steps:

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. The calculator interface will be displayed on the webpage.
4. Click on the number buttons to input numbers.
5. Click on the arithmetic operation buttons (+, -, *, /) to select the desired operation.
6. Click the "=" button to calculate the result.
7. The result will be displayed in the calculator's display area.
8. You can use the "AC" button to clear the input and start over.
9. The "negative" button can be used to toggle the sign of the displayed value.
10. The "dot" button allows you to add a decimal point to the input.
11. The "percent" button calculates the percentage of the displayed value.
12. Explore different calculations using the available buttons.

## Functions

The calculator app includes the following functions:

- `New(symbol)`: This function is responsible for handling user input. It receives a symbol (number or arithmetic operation) as input and updates the calculator's display accordingly. It also manages the state of the calculator, including values, signs, permissions, and restarts.

- `Solve(value, sign = "0", value1 = 0)`: This function performs mathematical calculations based on the given values and arithmetic sign. It supports operations like addition, subtraction, multiplication, division, and calculating percentages.

This calculator app is provided under the [MIT License](LICENSE). Feel free to use, modify, and distribute it
