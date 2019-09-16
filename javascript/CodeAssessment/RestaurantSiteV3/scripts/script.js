// -------Form events----------
function clearErrors(form) {
    var formElements = form.elements;
    var formElementsLength = formElements.length;
    for (var loopCounter = 0;
        loopCounter < formElementsLength;
        loopCounter++) {
        var element = formElements[loopCounter];
        if (!element.isValid) {
            element.isValid = true;
        }
    }
}

function resetForm(form) {
    clearErrors(form);
    return false;
}

function validateItems(form) {
    clearErrors(form);
    var name = form["name"];
    var email = form["email"];
    var phone = form["phone"];
    if (!(validateName(name.value))) {
        alert("Your name must be comprised entirely of letters.");
        name.isValid = false;
        name.focus();
        return false;
    }
    if(!(validateEmail(email.value))) {
      alert("Email address must be in form 'xxx@yyy.com'");
      email.isValid = false;
      email.focus();
      return false;
    }
    if(!(validatePhone(phone.value))) {
      alert("Phone number must contain numbers and  dashes, '-', only.");
      phone.isValid = false;
      phone.focus();
      return false;
    }
    alert("Thank you for contacting us!");
   return false;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateName(name) {
  var re = /^[a-zA-Z]+$/;
  return (typeof name === 'string' && re.test(String(name).toLowerCase()))
}

function validatePhone(phone) {
  var re = /^\d+$/;
  var phoneNumber = String(phone.replace(/\-/g, ''));
  return re.test(phoneNumber);
}
