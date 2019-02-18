// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice


function toggle_div_fun(id) {
    var divelement = document.getElementById(id);
    if(divelement.style.display=='none'
    divelement.style.display='block';
    else divelement.style.display ='none';
}


var fields = {
    
    firstName = "Sonia",
    lastName = "Gabbiano",
    jobTitle = "Account Manager",
    homeOffice = "Madrid",
    tellMeMore = "I am trying to get into this course as hard as I can"


}

// using jQuery and the object above, display the information as the appropriate button is clicked


<script src="https://code.jquery.com/jquery-3.3.1.min.js"> 

  
  $(document).ready(function() {
    
  $('#firstName').click .function() {
    $('#Sonia').css("toggle");
  

  });
});

</script>