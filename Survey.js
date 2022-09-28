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
    let clickEvents = document.getElementById('submit');
    clickEvents.style.pointerEvents = 'all';
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
    let clickEvents = document.getElementById('submit');
    clickEvents.style.pointerEvents = 'all';
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
    let clickEvents = document.getElementById('submit');
    clickEvents.style.pointerEvents = 'all';
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
    let clickEvents = document.getElementById('submit');
    clickEvents.style.pointerEvents = 'all';
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
    let clickEvents = document.getElementById('submit');
    clickEvents.style.pointerEvents = 'all';
};

function saveValue(){
    let value = empty[empty.length - 1];
    sessionStorage.setItem("newValue", value);
    location.href = "/public/Survey-Example/Results.html"
};

function closeModal(){
  let modal = document.getElementById('modal-blur');
  modal.style.transform = 'scale(0)';
};

