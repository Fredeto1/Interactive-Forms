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
    let indexOf= 
    let activitiesPicked = 
    
});         	


