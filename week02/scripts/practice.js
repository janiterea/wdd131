const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}

// while loop
let i = 0;
while (i <  studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
    i++;
}

// forEach loop
studentReport.forEach(function(item) {
    if (item < LIMIT) {
        console.log(item);
    }    
});

// for...in loop
for (i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}

// for loop to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) for the next DAYS days starting today

for (let i = 0; i < DAYS; i++) {
    // create a new date for each day
    const date = new Date();
    date.setDate(date.getDate() + i)

    // get the weekday name
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    console.log(dayName)
}

// while loop to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) for the next DAYS days starting today

let count = 0;

while (count < DAYS) {
    const date = new Date();
    date.setDate(date.getDate() + count);

    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    console.log(dayName);

    count++;
}


