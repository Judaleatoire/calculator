var val = 0;
var res = 0;
var op = 0;
var first = 0;
var mul = 0;
var dec = 10;

function ajouter(x) {
    if (x == '.') {
        mul = 1;
        return;
    }

    if (mul == 0) {
        val *= 10;
        val += x;
    } else {
        val += x / dec;
        dec *= 10;
    }

    // val *= 10;
    // val += x;
    document.getElementById('affichage').innerHTML = val;
}

function operation(x) {
    if (first == 0) {
        first = 1;
        res = val;
        val = 0
        op = x;
        mul = 0;
        dec = 10;
        return;
    }
    calcul(op);
    op = x;
}

function calcul(operation) {
    switch (operation) {
        case '+':
            res = res + val;
            val = 0;
            break;
        case '-':
            res = res - val;
            val = 0;
            break;
        case '*':
            res = res * val;
            val = 0;
            break;
        case '/':
            res = res / val;
            val = 0;
            break;
        default:
            res = val;
            val = 0;
            break;
    }
    mul = 0;
    dec = 10;
    document.getElementById('affichage').innerHTML = res;
}

function resultat() {
    calcul(op);
    val = res;
    first = 0;
    mul = 0;
    dec = 10;
    document.getElementById('affichage').innerHTML = res;
}

function nettoyer() {
    val = 0;
    res = 0;
    op = 0;
    first = 0;
    mul = 0;
    dec = 10;
    document.getElementById('affichage').innerHTML = '0';
}