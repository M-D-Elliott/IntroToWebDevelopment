function clearErrors() {
    var formElements = document.forms["evensForm"].elements;
    var formElementsLength = formElements.length;
    for (var loopCounter = 0;
        loopCounter < formElementsLength;
        loopCounter++) {
        var parent = formElements[loopCounter].parentElement;
        if (parent.className.indexOf("has-") != -1) {
            parent.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    var form = document.forms["evensForm"];
    var results = document.getElementById("results");
    form["num1"].value = "1";
    form["num2"].value = "5";
    form["step"].value = "1";
    document.getElementById("num1Result").innerText = "1";
    document.getElementById("num2Result").innerText = "1";
    document.getElementById("stepResult").innerText = "5";
    document.getElementById("evens").innerHTML = "";
    results.style.display = "none";
    document.getElementById("submitButton").innerText = "Display Evens";
    form["num1"].focus();
}

function validateItems() {
    clearErrors();
    var form = document.forms["evensForm"];
    var results = document.getElementById("results");
    var num1 = parseInt(form["num1"].value);
    var num2 = parseInt(form["num2"].value);
    var step = parseInt(form["step"].value);
    var num1Parent = form["num1"].parentElement;
    var num2Parent = form["num2"].parentElement;
    var stepParent = form["step"].parentElement;
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        num1Parent.className = "form-group has-error";
        form["num1"].focus();
        return false;
    }
   if (num2 == "" || isNaN(num2)) {
       alert("Num2 must be filled in with a number.");
       num2Parent.className = "form-group has-error";
       form["num2"].focus();
       return false;
   }
   if(num2 <= num1) {
     alert("Num2 is less than or equal to Num1");
     num2Parent.className = "form-group has-error";
     form["num2"].focus();
     return false;
   }
   if(step <= 0) {
     alert("Step must be greater than 0");
     stepParent.className = "form-group has-error";
     form["step"].focus();
     return false;
   }
   var results = document.getElementById("results");
   results.style.display = "block";
   document.getElementById("num1Result").innerText = num1;
   document.getElementById("num2Result").innerText = num2;
   document.getElementById("stepResult").innerText = step;
   var evens = document.getElementById("evens");
   evens.innerHTML = "";
   while(num1 < num2) {
     if(num1 % 2 === 0) {
       var node = document.createElement("p");
       node.innerText = num1
       evens.appendChild(node);
     }
     num1 += step;
   }
   return false;
}
