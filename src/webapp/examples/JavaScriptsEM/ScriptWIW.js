// JavaScript source code
// use the object names to locate and navigate a form

composers = [
    { "name": "W. A. Mozart", "birth": "1756-01-27", "death": "1791-12-05" },
    { "name": "Ludwig van Beethoven", "birth": "1770-12-17", "death": "1827-03-26" },
    { "name": "Johannes Brahms", "birth": "1833-05-07", "death": "1897-04-03" },
    { "name": "Johann Sebastian Bach", "birth": "1685-03-21", "death": "1750-07-28" },
    { "name": "W. A. Mozart", "birth": "1685-02-23", "death": "1759-04-14" },
]

function odd(n) {
    return n & 0x1;
};

function half(n) {
    return n >> 1;
};

function multiply1(n, a) {
    if (n == 1) return a;
    var result = multiply1(half(n), a + a);
    if (odd(n)) result = result + a;
    return result;
};

function multiply2(r, n, a) {
    if (odd(n)) {
        r = r + a;
        if (n == 1) return r;
    }
    return multiply2(r, half(n), a + a);
}

function multiply4(r, n, a) {
    while (true) {
        if (odd(n)) {
            r = r + a;
            if (n == 1) return r;
        }
        n = half(n);
        a = a + a;
    }
}

function assignChoices() {
    var select = document.getElementById('birthDeathDates')
    for( var i = 0; i < composers.length; i++) {
        var choice = composers[i]
        var el = document.createElement("option")
        el.textContent = choice.name // <<<<< extract just the name
        el.value = choice.birth + "|"  + choice.death// <<<<< fix this
    }
}

function calcDeadYears() {
    // Use the name attribute of input boxes to retrieve their values
    //var mpcnd = document.getElementById("multiplicand").valueOf();  <<< does not work
    //document.form1.mybirthdate.value = "1945-07-24"
    var mybirthdate = document.getElementById("myBirthDate");
    //var mbday = parseInt(mpcnd); // needed to convert the string in the input box to an integer
    //var mplier = document.getElementById("multiplier").valueOf();  <<< does not work
    var cmpDates = document.getElementById("birthDeathDates")
    console.log("cmpDates value: ", cmpDates.value)
    //console.log(cmpDates.selectIndex)
    //console.log(cmpDates.options[cmpDates.selectedIndex])
    //var d = cmpDates.options[cmpDates.selectedIndex]
    var dd = cmpDates.value
    var ddd = dd.split("|")
    //var cmpbirthdate = document.getElementById("cmpBirthDate")
    document.getElementById("cmpBirthDate").value = ddd[0]
    //
    //var cmpdeathdate = document.getElementById("cmpDeathDate")
    document.getElementById("cmpDeathDate").value = ddd[1]
    //var product = multiplicand * multiplier;
    var td = new Date() // today's date
    var tdy = td.getFullYear() // current year
    //alert("tdy: " + tdy)
    //alert("myBirthdate: " + mybirthdate.value);   // yyyy-mm-dd my
    var mb = mybirthdate.value
    var mba = mb.split("-")
    //alert("mb: " + mb)
    //alert(mba)
    //alert(mba[0]) // my birth year
    //alert("cmpBirthDate: " + cmpbirthdate.value); // yyyy-mm-dd composer birth
    var cb = ddd[0]
    var cba = cb.split("-")

    var cd = ddd[1] // composer death
    var cda = cd.split("-")

    //alert("cb: " + cb)
    //alert(cba)
    //alert(cba[0]) // composer birth year

    //alert("cd: " + cd)
    //alert(cda)
    //alert(cda[0])            // composer death year

    //alert(mba[0] - cba[0])
    //alert("my age")
    //alert(tdy - mba[0])      // my age
    var ma = tdy - mba[0]    // current year - my birth year
    //alert("composer's age at death:")
    //alert(cda[0] - cba[0])

    var caad = cda[0] - cba[0] // composer's age at death in years

    //alert("caad")
    //alert(caad)

    //alert("dead years: ")
    //alert(ma - caad)

    document.form1.deadyears.value = ma - caad
    /*
    product = multiply1(multiplier, multiplicand)
    alert("Egyptian product1: " + product);

    var r = 0;
    product = multiply2(r, multiplier, multiplicand);
    alert("Egyptian product2: " + product);
    document.form1.prod.value = product;

    r = 0;
    product = multiply4(r, multiplier, multiplicand);
    alert("Egyptian product4: " + product);
    document.form1.prod.value = product;
    */


};