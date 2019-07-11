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
