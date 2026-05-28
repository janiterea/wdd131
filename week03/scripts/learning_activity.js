let firstName = "Antonia";
let lastName = "Francesca";

function fullName(first, last) {
    return "${first} ${last}";
}

const fullName = function(first, last) {
    return "${first} ${last}";
}

const fullName = (first, last) => "${first} ${last}"



console.log(div(15, 3));
function div(a, b) {
    return a / b;
};

// arrow function e.g. ((list_item) => list_item.length) is the same as function(list_item) { return list_item.length}; });

document.querySelector("#fullName").textContent = fullName(firstName, lastName);

<picture>
  <source srcset="images/hero-small.webp" media="(max-width: 500px)">
  <source srcset="images/hero-medium.webp" media="(max-width: 1000px)">
  <img srcset="images/hero-large.webp" alt="Hero Photo" width="500" height="250">
</picture>

const message = document.querySelector("#message");
const input = document.querySelector("#favchap").value;

if (input.value !== "") {
  message.innerHTML = "Thank you. Your favorite chapter is ${input}."
} else {
  message.innerHTML = "Please enter a chapter.";
}

let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});

if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}