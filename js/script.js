 //FOCUS
//Makes the cursor start in the name field
$('#name').focus();  

//JOB ROLE

//hides the other field until it's selected
$('#other-title').hide();  
//Event listener that is on the title id and listens for when other is clicked. 
//If the value of the event is equal to other it shows the Your Job Role input field otherwise it hides it.
$('#title').on('change', function(event){
    if ($(this).val()==='other') {
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

// //let totalCost= 0;

// let jsf = document.getElementById('jsframeworks');
// let express = document.getElementById('express');
// let node = document.getElementById('node');
// let jslib = document.getElementById('jslib');
// let mainconf = document.getElementById('mainconf');
// let buildtools = document.getElementById('buildtools');
// let npmw = document.getElementById('npmw');

// let checkboxes = document.getElementsByName('checkbox'); 

// function enableButtonDisplayTotal() {
//     submitButton.removeAttribute('disabled');
//     displayTotal();
//     validateActivity();
// }

// for (var i = 0; i < checkboxes.length; i++) {
//     checkboxes[i].addEventListener('change', function(e) {
//     enableButtonDisplayTotal(data);
//     });
// } 

// jsf.addEventListener('change', function(event) {
//     express.disabled = event.target.checked;
//     express.parentElement.style.setProperty("text-decoration", event.target.checked ? "line-through" : "");
//     enableButtonDisplayTotal();
// });

// express.addEventListener('change', function(event) {
//     jsf.disabled = event.target.checked;
//     jsf.parentElement.style.setProperty("text-decoration", event.target.checked ? "line-through" : "");
//     enableButtonDisplayTotal();
// });

// node.addEventListener('change', function(event) {
//     jslib.disabled = event.target.checked;
//     jslib.parentElement.style.setProperty("text-decoration", event.target.checked ? "line-through" : "");
//     enableButtonDisplayTotal();
// });

// jslib.addEventListener('change', function(event) {
//     node.disabled = event.target.checked;
//     node.parentElement.style.setProperty("text-decoration", event.target.checked ? "line-through" : "");
//     enableButtonDisplayTotal();
// });

// // event listener for submit button
// var selectActivity = document.createElement('label');
// var activitiesTotal = document.createElement('total-cost');
// var activitiesFieldset = document.getElementsByTagName('fieldset')[2];

// var theForm = document.querySelector('form');

// /*theForm.addEventListener('submit', function(event) {
//     if (!checkName() || !checkMail() || !validateActivity() || !checkPaymentMethod()) {
//         event.stopPropagation();
//         event.preventDefault();
//     };
// });*/

// var submitButton = document.querySelector('button[type="submit"]');

// // Check in real time that the user entered a name at all and is longer than two characters
// var nameInput = document.getElementById('name');
// var nameLabel = document.getElementsByTagName('label')[0];
// var nameError = document.createElement('label');

// function checkName(event) {
//     if (nameInput.value === '' || nameInput === null) {
//         window.scrollTo(0, nameInput.parentElement.offsetTop);
//         nameInput.setCustomValidity("Please enter a name");
//         nameError.textContent = 'Please enter a name';
//         nameError.setAttribute('class', 'error');
//         nameLabel.appendChild(nameError);
//         return false
//     } else if (nameInput.value.length < 2) {
//         nameInput.setCustomValidity("Please enter a name longer than two characters");
//         nameError.textContent = 'Please enter a name longer than two characters';
//         nameError.setAttribute('class', 'error');
//         nameLabel.appendChild(nameError);
//         window.scrollTo(0, nameInput.parentElement.offsetTop);
//         return false
//     } else if (nameError.parentElement !== null) {
//         nameInput.setCustomValidity("");
//         nameLabel.removeChild(nameError);
//     }
//     return true
// };

// // display total price of activities selected
// function displayTotal(data) {
//     var price = [].slice.call(document.querySelectorAll('[data-price]')).reduce(function(total, checkbox) {
//         return checkbox.checked ? total + parseInt(checkbox.dataset.price, 10) : total;
//     }, 0);
//     activitiesTotal.textContent = 'Your total is $' + price;
//     activitiesFieldset.appendChild(activitiesTotal);
// }
// displayTotal();

// // Error message for when no activity is selected
// function activitiesError() {
//     selectActivity.textContent = 'Please select an activity';
//     selectActivity.setAttribute('class', 'error');
//     activitiesFieldset.appendChild(selectActivity);
//     window.scrollTo(0, activitiesFieldset.offsetTop);
// }

// // Check that the user has ticked an activity checkbox, if not, submit button is disabled
// //function validateActivity() {
//     var activitySelected =
//         jsf.checked ||
//         express.checked ||
//         node.checked ||
//         jslib.checked ||
//         mainconf.checked ||
//         buildtools.checked ||
//         npmw.checked;

//     // If at least one activity is selected
//     if (activitySelected) {
//         // remove error label if it exists
//         if (selectActivity.parentElement) {
//             selectActivity.parentElement.removeChild(selectActivity);
//         }
//     } else {
//         submitButton.setAttribute('disabled', '');
//         activitiesError();
//         return false;
//     }
//     return true;



let totalCost= 0
const totalCostLabel= '<label>Total Cost:</label>';
$('.activities').append(totalCostLabel);

$('.activities').on('change', function(e) {
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


});         	
