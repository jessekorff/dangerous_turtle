let grocery1;
let grocery2;
let grocery3;

function groceryTotal() {
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);

    let result = grocery1 + grocery2 + grocery3

    document.getElementById('result').innerText = `The total for groceries is: ${result}`;

}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      groceryTotal();
    }
  });