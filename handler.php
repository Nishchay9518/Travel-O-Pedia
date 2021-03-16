<?php 

   $username = filter_input(INPUT_POST, 'user_name');
   
  

   
   if (filter_var($username, FILTER_VALIDATE_EMAIL) 
   && preg_match('/@.+\./', $username)){
       include('success.html');
   } else{
    if(empty($username)) {
        $name_error = 'Please Insert your username'; 
    } else{
     $name_error = 'Invalid Email';
    }
       include('contactform.html');
    }
    
    

?>
