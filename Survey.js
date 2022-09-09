empty = [];


function firstOnClick (){
    let wipe = document.querySelectorAll('.rating')
    wipe.forEach(element => {
        element.style.backgroundColor = 'hsl(216, 12%, 54%, .2)';
        element.style.color = 'hsl(217, 12%, 63%)';
      });
    let rating = document.getElementById("first");
    rating.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating.style.color = 'white';
    empty.push(rating.innerHTML);
};

function secondOnClick (){
    let wipe = document.querySelectorAll('.rating')
    wipe.forEach(element => {
        element.style.backgroundColor = 'hsl(216, 12%, 54%, .2)';
        element.style.color = 'hsl(217, 12%, 63%)';
      });
    let rating = document.getElementById("second");
    rating.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating.style.color = 'white';
    empty.push(rating.innerHTML);
};

function thirdOnClick (){
    let wipe = document.querySelectorAll('.rating')
    wipe.forEach(element => {
        element.style.backgroundColor = 'hsl(216, 12%, 54%, .2)';
        element.style.color = 'hsl(217, 12%, 63%)';
      });
    let rating = document.getElementById("third");
    rating.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating.style.color = 'white';
    empty.push(rating.innerHTML);
};

function fourthOnClick (){
    let wipe = document.querySelectorAll('.rating')
    wipe.forEach(element => {
        element.style.backgroundColor = 'hsl(216, 12%, 54%, .2)';
        element.style.color = 'hsl(217, 12%, 63%)';
      });
    let rating = document.getElementById("fourth");
    rating.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating.style.color = 'white';
    empty.push(rating.innerHTML);
};

function lastOnClick (){
    let wipe = document.querySelectorAll('.rating')
    wipe.forEach(element => {
        element.style.backgroundColor = 'hsl(216, 12%, 54%, .2)';
        element.style.color = 'hsl(217, 12%, 63%)';
      });
    let rating = document.getElementById("last");
    rating.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating.style.color = 'white';
    empty.push(rating.innerHTML);
};

function saveValue(){
    let value = empty[empty.length - 1];
    sessionStorage.setItem("newValue", value);
    location.href = "/Survey-Example/Results.html"
};

