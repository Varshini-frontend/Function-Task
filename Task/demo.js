function getNationBird() {
    return "Peacock";
}
console.log(getNationBird());

function greet() {
    return "Hello! Have a nice day";
  }
console.log(greet());

function sum(a, b) {
    return a + b;
  }
console.log(sum(10, 200)); 

function calculateAverage(a, b) {
    let average = (a + b) / 2;
    console.log(average);
    return average;
  }
calculateAverage(5, 4); 

function greetWithName(name) {
    return "Hello, " + name;
  }
    let personName = "Varshini";
    console.log(greetWithName(personName)); 

const convertMinutesToSeconds = function(minutes) {
    return minutes * 60;
};
    let minutes = 4;
    console.log(convertMinutesToSeconds(minutes));

function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1 + " is the largest");
    } else if (num2 > num3) {
        console.log(num2 + " is the largest");
    } else {
        console.log(num3 + " is the largest");
    }
    }
findLargest(10, 20, 30); 

    function findTriangleType(side1, side2, side3) {
        if (side1 == side2 && side2 == side3) {
          console.log("Equilateral triangle.");
        } else if (side1 == side2 || side2 == side3 || side1 == side3) {
          console.log("Isosceles triangle.");
        } else {
          console.log("Scalene triangle.");
        }
      }
    findTriangleType(3, 3, 3); 

    function checkInRange(num, start, end) {
        if (num >= start && num <= end) {
          console.log("Between the range");
        } else {
          console.log("Outside the range");
        }
      }
    checkInRange(15, 15, 30); 
    checkInRange(20, 34, 51); 

    function evalNumbers(num1, num2, operation) {
        if (operation === "add") {
          console.log(num1 + num2);
        } else if (operation === "subtract") {
          console.log(num1 - num2);
        } else if (operation === "multiply") {
          console.log(num1 * num2);
        } else if (operation === "divide") {
          console.log(num1 / num2);
        } else if (operation === "modulus") {
          console.log(num1 % num2);
        } else {
          console.log("Invalid operation");
        }
      }
        evalNumbers(10, 5, "add"); 
        evalNumbers(20, 6, "subtract"); 
        evalNumbers(30, 7, "multiply"); 
        evalNumbers(30, 5, "divide"); 
        evalNumbers(12, 6, "modulus"); 
        evalNumbers(50, 5, "unknown"); 

    function checkLeapYear(year) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            console.log("leap year");
        } else {
            console.log("not a leap year");
        }
        }
        checkLeapYear(2004); 
        checkLeapYear(1986); 

        function findGrade(marks) {
            if (marks >= 90 && marks <= 100) {
              console.log("S grade");
            } else if (marks >= 80 && marks < 90) {
              console.log("A grade");
            } else if (marks >= 70 && marks < 80) {
              console.log("B grade");
            } else if (marks >= 60 && marks < 70) {
              console.log("C grade");
            } else if (marks >= 50 && marks < 60) {
              console.log("D grade");
            } else if (marks >= 40 && marks < 50) {
              console.log("E grade");
            } else if (marks >= 0 && marks < 40) {
              console.log("Student has failed");
            } else {
              console.log("Invalid marks");
            }
          }
            findGrade(95);  
            findGrade(65);  
            findGrade(-5);  

        function findDaysInMonth(month, year) {
            if (month < 1 || month > 12) {
                console.log("Invalid month");
            } else if (month === 2) {  
                const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
            if (isLeapYear) {
                console.log("29 days");
            } else {
                console.log("28 days");
                }
            } else if ([4, 6, 9, 11].includes(month)) {  
                console.log("30 days");
            } else {  
                console.log("31 days");
            }
           }
            findDaysInMonth(2, 2012);  
            findDaysInMonth(4, 2024);  
            findDaysInMonth(7, 2023);  
            findDaysInMonth(13, 2023); 
            findDaysInMonth(2, 2023);  
          
          
          
      
      
      
      
      
      
  
  
  