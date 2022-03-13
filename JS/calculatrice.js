var val = 0;
var res = 0;
var op = 0;
var first = 0;
var mul = 0;
var dec = 10;
var res_test = 0;

function ajouter(x) {
    if (res_test == 1) {
        res_test = 0;
        val = 0;
    }

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

    val = Math.round(val * 100) / 100;

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
    op = 0;
    res = Math.round(res * 100) / 100;
    document.getElementById('affichage').innerHTML = res;
}

function resultat() {
    calcul(op);
    res = Math.round(res * 100) / 100;
    val = res;
    first = 0;
    mul = 0;
    dec = 10;
    op = 0;
    res_test = 1;
    document.getElementById('affichage').innerHTML = res;
}

function nettoyer() {
    val = 0;
    res = 0;
    op = 0;
    first = 0;
    mul = 0;
    dec = 10;
    res_test = 0;
    document.getElementById('affichage').innerHTML = '0';
}