//FOCUS
//Makes the cursor start in the name field
$('#name').focus();

//JOB ROLE

//hides the other field until it's selected
$('#other-title').hide();
//Event listener that is on the title id and listens for when other is clicked. 
//If the value of the event is equal to other it shows the Your Job Role input field otherwise it hides it.
$('#title').on('change', function (event) {
    if ($(this).val() === 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});

//TEE-SHIRT SECTION
//Hides the  color choices
$('#colors-js-puns').hide();

//The event listener listens for when the design choice changes. and then removes the color choices
//by setting the value of color to an empty HTML string.
$('#design').on('change', function () {
    $('#color').html('');
    //If js puns is selected only show the following colors by appending them to the now empty string
    if ($(this).val() === 'js puns') {
        $('#color').append('<option value = "cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>');
        $('#color').append('<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>');
        $('#color').append('<option value="gold">Gold (JS Puns shirt only)</option>');
        $('#colors-js-puns').show();
        //If heart js is selected only show the following colors by appending them to the now empty string
    } else if ($(this).val() === 'heart js') {
        $('#color').append('<option value = "tomato">Tomato (I ? JS shirt only)</option>');
        $('#color').append('<option value = "steelblue">Steel Blue (I ? JS shirt only)</option>');
        $('#color').append('<option value="dimgrey">Dim Grey (I ? JS shirt only)</option>');
        $('#colors-js-puns').show();
        //If nothing is selected then hide all the color choices
    } else {
        $('#colors-js-puns').hide();
    }
});

// //REGISTER FOR ACTIVITIES SECTION

// /*Create a DOM element, store it in a global variable and append it to the `.activity` section. You
// can view the elements tab in the Chrome DevTools to check that your element is in the DOM.
// Create a global variable to store total activity cost — initially set to 0 — don't use const since
// you want to update this as needed. 
// Is this saying I need one variable or two? if its two what is the first variable for?*/



let totalCost = 0
const totalCostLabel = '<label id="totalCost">Total Cost:</label>';
$('.activities').append(totalCostLabel);

$('.activities').on('change', function (e) {

    if ($('input[name="js-frameworks"]').is(':checked')) {
        $('input[name="express"]').prop('disabled', true)
    } else {
        $('input[name="express"]').prop('disabled', false)
    }
    if ($('input[name="express"]').is(':checked')) {
        $('input[name="js-frameworks"]').prop('disabled', true)
    } else {
        $('input[name="js-frameworks"]').prop('disabled', false)
    }
    if ($('input[name="js-libs"]').is(':checked')) {
        $('input[name="node"]').prop('disabled', true)
    } else {
        $('input[name="node"]').prop('disabled', false)
    }
    if ($('input[name="node"]').is(':checked')) {
        $('input[name="js-libs"]').prop('disabled', true)
    } else {
        $('input[name="js-libs"]').prop('disabled', false)
    }



    const selectedText1 = e.target.parentNode.innerText;
    const cost = selectedText1.split('$')[1];
    if (e.target.checked) {
        totalCost = totalCost + parseInt(cost);
    } else {
        totalCost = totalCost - parseInt(cost);
    }
    document.getElementById("totalCost").innerText = "Total Cost $" + totalCost


});

// const $creditPayment = $("#credit-card");
// const $payPal = $creditPayment.next();
// $payPal.hide();
// const $bitcoin = $creditPayment.next().next();
// $bitcoin.hide();

// $('#payment').on('change', function () {
//     if ($(this).val() === $creditPayment) {
//         $creditPayment.show();
//         $payPal.hide();
//         $bitcoin.hide();
//     } else if ($(this).val() === $payPal) {
//         $payPal.show();
//         $creditPayment.hide();
//         $bitcoin.hide();
//     } else ($(this).val() === $bitcoin); {
//         $bitcoin.hide();
//         $creditPayment.hide();
//         $payPal.hide();
//     }
// });

$('.credit-card').show();
$('p').hide();

$('#payment').on('change', function () {
    if ($(this).val() === "credit card") {
        $('#credit-card').show();
        $('p').hide();
    } else {
        $('#credit-card').hide();
    }
    if ($(this).val() === "paypal") {
        $('p:first').show();
        $('p:last').hide();
    }
    if ($(this).val() === "bitcoin") {
        $('p:last').show();
        $('p:first').hide();
    }
});



//Adding error text

$('label[for="name"]').after('<label class="error" id="name-error"><font color="red">Name field must not be empty</font></label>');


function validateName() {
    if ($('#name').val() === "") {
        $('#name-error').show();
        return false
    } else {
        $('#name-error').hide();
        return true
    }
}

$('label[for="mail"]').after('<label class="error" id="email-error"><font color="red">Please enter a valid email address</font></label>');


const validateEmail = (email) => {
    const valid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
    if (valid) {
        $('#email-error').hide();
        return true;
    } else {
        $('#email-error').show();
        return false;
    }
}




$('fieldset.activities legend').after('<label class="error" id="activities-error"><font color="red">Please select at least one activity</font></label>');

function validateActivites() {
    if ($('.activities input:checked').length > 0) {
        $('#activities-error').hide();
        return true
    } else {
        $('#activities-error').show();
        return false
    }
}
$('label[for="cc-num"]').after('<label class="error" id="cc-error"><font color="red">Please enter a valid Credit Card number</font></label>');

function validateCCNum(cc) {
    const valid = /^\d{13,16}$/.test(cc);
    if (valid) {
        $('#cc-error').hide();
        return true
    } else {
        $('#cc-error').show();
        return false
    }

}

$('label[for="zip"]').after('<label class="error" id="zipcode-error"><font color="red">Please enter a valid zip code</font></label>');

function validateZip(zip) {
    const valid = /^\d{5}$/.test(zip);
    if (valid) {
        $('#zipcode-error').hide();
        return true
    } else {
        $('#zipcode-error').show();
        return false
    }

}

$('label[for="cvv"]').after('<label class="error" id="cvv-error"><font color="red">Please enter a valid CVV number </font></label>');

function validateCvv(cvv) {

    const valid = /^\d{3}$/.test(cvv);
    if (valid) {
        $('#cvv-error').hide();
        return true
    } else {
        $('#cvv-error').show();
        return false
    }

}

$('.error').hide();

function validation() {
    if ($('#payment').val() === 'credit card') {
        if (validateName() && validateEmail(email) && validateActivites() && validateCCNum(cc) && validateZip(zip) && validateCvv(cvv)) {
            return true;
        } else {
            return false;
        }
    } else {
        if (validateName() && validateEmail(email) && validateActivites()) {

        } else {
            return false;
        }
    }
}

$('form').on('submit', function (e) {
    if (validation()) {
        window.location.reload();
    }
    else {
        e.preventDefault();
    }
});