// -------Form events----------

// Loops through the elements of the passed in form and set's their isValid attribute to true. This allows input to be sent.
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

// Simply calls clear errors, but is adaptable for more alterations. This particular page does not call for a reset.
function resetForm(form) {
    clearErrors(form);
    return false;
}

// validates name value, the email value, and the phone number value that the user inputs to the form. If a form field is found invalid, this sets its isValid attribute to false, uses JS focus() on the field and returns false to prevent submission. If all validations pass, simply alerts the user of success and returns false to avoid submission.
function validateItems(form) {
    clearErrors(form);
    var name = form["name"];
    var email = form["email"];
    var phone = form["phone"];
    if (!(validateName(name.value))) {
        name.isValid = false;
        name.focus();
        return false;
    }
    if(!(validateEmail(email.value))) {
      email.isValid = false;
      email.focus();
      return false;
    }
    if(!(validatePhone(phone.value))) {
      phone.isValid = false;
      phone.focus();
      return false;
    }
   alert("Thank you for contacting us!");
   return false;
}

// If the name value passed is not a string or contains more than letters and spaces this will alert the user and return false. If the name value is empty this will alert the user and return false. If both conditions pass this will return true.
function validateName(nameValue) {
  var re = /^[a-zA-Z\s]*$/;

  if (typeof nameValue !== 'string' ||  !(re.test(String(nameValue).toLowerCase()))) {
    alert("Your name must be comprised of letters and spaces. only");
    return false;
  } else if(!nameValue.length) {
    alert("Your must enter your name!");
    return false;
  }
  return true;
}

// As the above; compares email value to a regex object which requires the form 'aaa@bbb.com' and ensures that the email value has length. Returns false if either condition fails, else returns true.
function validateEmail(emailValue) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!(re.test(String(emailValue).toLowerCase()))) {
      alert("Email address must be in form 'youremail@website.com'");
      return false;
    } else if(!emailValue.length) {
      alert("Please enter an email address.");
      return false;
    }
    return true;
}

// Removes all dashes '-', if any, from the phone number and ensures that it is only comprised of numbers. This then checks if the length is exactly ten, requiring the standard "123-456-7890" 10-digit format.
function validatePhone(phoneValue) {
  var re = /^\d+$/;
  var phoneNumber = String(phoneValue.replace(/\-/g, ''));

  if(!re.test(phoneNumber)) {
    alert("Phone number must contain numbers and  dashes, '-', only.");
    return false;
  } else if(phoneNumber.length !== 10) {
    alert("Phone number must include area code and exclude leading 1.");
    return false;
  }
  return true;
}
