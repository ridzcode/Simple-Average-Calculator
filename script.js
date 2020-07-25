
const btn = document.getElementsByClassName('btn')[0];

btn.addEventListener('click', count);

function count() {

    let rm = document.getElementById('rm').value;
    let quantity = document.getElementById('quantity').value;
    
    let rmInt = parseFloat(rm);
    let quantityInt = parseInt(quantity);
    let total = rmInt / quantityInt;
    let result = "Rm " + total;

    document.getElementsByClassName('total')[0].value = result;
}