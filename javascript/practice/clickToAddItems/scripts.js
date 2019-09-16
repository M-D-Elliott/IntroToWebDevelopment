function main() {
  function clearErrors() {
      var formElements = document.forms["numberFun"].elements;
      var formElementsLength = formElements.length;
      console.log(formElementsLength);
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
      var form = document.forms["numberFun"];
      form["num1"].value = "";
      form["num2"].value = "";
      document.getElementById("results").style.display = "none";
      document.getElementById("submitButton").innerText = "Submit";
      form["num1"].focus();
  }

  function validateItems() {
      clearErrors();
      var form = document.forms["numberFun"];
      var num1 = form["num1"].value;
      var num2 = form["num2"].value;
      var num1Parent = form["num1"].parentElement;
      var num2Parent = form["num2"].parentElement;
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
     document.getElementById("results").style.display = "block";
     document.getElementById("submitButton").innerText = "Recalculate";
     document.getElementById("addResult").innerText = Number(num1) +
                                                       Number(num2);
     document.getElementById("subtractResult").innerText = num1 - num2;
     document.getElementById("multiplyResult").innerText = num1 * num2;
     document.getElementById("divideResult").innerText = num1 / num2;
     // We are returning false so that the form doesn't submit
     // and so that we can see the results
     return false;
  }
}
