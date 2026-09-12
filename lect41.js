const form = document.querySelector('form');
const btn = document.querySelector('#btn');
const username = document.querySelector("#username");
const bio = document.querySelector("#bio");
const charCount = document.querySelector("#char-count");
const checkbox  = document.querySelector("#checkbox");
const country = document.querySelector("#country");
const password = document.querySelector("#password");


const LIMIT = 200;

charCount.textContent = `${LIMIT} characters remaining`
bio.addEventListener("input", () => {
    const remaining = LIMIT - bio.value.length;
    
    if (remaining < 0) {
        bio.value = bio.value.substring(0, LIMIT); // Enforce strict limit
        charCount.textContent = "0 characters remaining";
    } else {
        charCount.textContent = `${remaining} characters remaining`;
    }
});


function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage;
}

function clearError(input) {
  const errorMsg = input.parentElement.querySelector(".error-message");
    if (errorMsg) {
        errorMsg.textContent = "";
    }
}

function validUsername(username) {
    //validation check 1 
    if(username.value.trim().length === 0) {
        showError(username, "Please Enter your name");
    return false;
    } 
 



    //validation check 1 
    if(username.value.trim().length < 3) {
        showError(username, "Username must be at least 3 characters");
                return false;
    } 
clearError(username);
return true;
}


//password
function validPassword(password) {
    //check 1
    if (password.value.trim().length === 0) {
        showError(password, "Please Enter you password")
        return false
    }

    //check 2
    if (password.value.trim().length < 8) {
        showError(password, "password must be at least 8 character")
        return false
    }

    clearError(password)
    return true
}

//checking valid bio
function validBio(bio) {
    if(bio.value.trim().length === 0) {
        showError(bio, "Please enter your bio");
        return false;
    }
    clearError(bio);
    return true;
}
//checking options
function validOptions(country) {
    //check 1
    if (country.value === "") {
        showError(country, "Select your country first")
        return false;
    }
    clearError(country);
    return true;
}

//checking validation for terms and conditions
function validCheckBox(checkbox) {
    if(!checkbox.checked) {
        showError(checkbox, "You must agree to login");
        return false;
    }
    clearError(checkbox);
    return true;
}



// form.addEventListener('submit', (e) => {
//     e.preventDefault();
// //    const name = document.querySelector('#name').value;
// //    const email = document.querySelector('#email').value;
// //    const password = document.querySelector('#password').value;
// const isUsernameValid = validUsername(username);
// // 
//     if(isUsernameValid) {
//         document.querySelector("h1").classList.remove("hidden");
//     } else {
//         document.querySelector("h1").classList.add("hidden");``
//     }

// //    console.log({name, email, password});  
   
// });

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // const password = document.querySelector("#password").value

    const isUsernameValid = validUsername(username);// passing username element
    const isValidPassword = validPassword(password);// passing password element
    const isCheckbox = validOptions(country);
    const isBioCheck = validBio(bio);
    const isCheckBox =  validCheckBox(checkbox);
    if (isUsernameValid && isValidPassword && isCheckbox && isBioCheck && isCheckBox) {
        document.querySelector("h1").classList.remove("hidden")
    } else {
        document.querySelector("h1").classList.add("hidden")

    }
})