 //FOCUS
      //Makes the cursor start in the name field
$('#name').focus();  

//JOB ROLE
//include a text field that will be revealed when the other option is selected from the job role drop down menu
//Give the field an id of other-title and add the place holder of your job role
//<input id="other-title" name="job_role_other" placeholder="Your Job Role" type="text">    
$('#other-title').hide();  

$('#title').on('change',function(event){
    if ($(this).val()==='other') {
        $('#other-title').show(); 
    } else {
        $('#other-title').hide();   
    }
    
  });

 
 

