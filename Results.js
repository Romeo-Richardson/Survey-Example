let value = sessionStorage.getItem("newValue");

function dynText(){
    let dynamic = document.getElementById('dynamic');
    dynamic.innerHTML = 'You selected' + ' ' + value + ' ' + 'out of 5';
};

dynText();
