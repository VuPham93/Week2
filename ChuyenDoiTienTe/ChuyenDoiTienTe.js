function Doitien() {
    let a = parseInt(document.getElementById("amount").value);
    let b = (document.getElementById("fcurency").value);
    let c = (document.getElementById("tcurency").value);
    if (b == 'VND'){
        if (c == 'VND'){ T = a}
        if (c == 'USD'){ T = a*0.000043}
        if (c == 'YEN'){ T = a*0.0046}
        if (c == 'EUR'){ T = a*0.000038}
    }
    if (b == 'USD'){
        if (c == 'VND'){ T = a*23245}
        if (c == 'USD'){ T = a}
        if (c == 'YEN'){ T = a*107.92}
        if (c == 'EUR'){ T = a*0.0}
    }
    if (b == 'Yen'){
        if (c == 'VND'){ T = a*215}
        if (c == 'USD'){ T = a*0.0093}
        if (c == 'YEN'){ T = a}
        if (c == 'EUR'){ T = a*0.0083}
    }
    if (b == 'EUR'){
        if (c == 'VND'){ T = a*25961}
        if (c == 'USD'){ T = a*1.12}
        if (c == 'YEN'){ T = a*120.52}
        if (c == 'EUR'){ T = a}
    }
    document.getElementById("result").innerHTML= (a+' '+b+' = '+T+' '+c);
}