function convert() {
    var number=document.getElementById("number").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    if (from == "VND"){
        if (to == "USD") {
            let result = number / 23000;
            document.getElementById("result").innerHTML = result;
        } else {
            let result = number /27000;
            document.getElementById("result").innerHTML = result;

        }
    }
    if (from == "USD"){
        if (to == "VND") {
            let result = number * 23000;
            document.getElementById("result").innerHTML = result;
        } else {
            let result = number*23/26;
            document.getElementById("result").innerHTML = result;


        }
    }
    if (from == "EURO"){
        if (to == "VND") {
            let result = number * 27000;
            document.getElementById("result").innerHTML = result;
        } else {
            let result = number*26/23;
            document.getElementById("result").innerHTML = result;


        }
    }
    if (from == to){
        let result = number;
        document.getElementById("result").innerHTML = result;

    }

}