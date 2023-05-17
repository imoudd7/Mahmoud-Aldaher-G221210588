<?php
    $user=$_POST['ad'];
    $password=$_POST['şifre'];
    if(($user=="g221210588@sakarya.edu.tr") && ($password=="g221210588"))
    {
  
        echo " <script>location.replace('index.html')  
        alert('Welcome :) g221210588')   </script>";
      
    }
    else if ($user=="g221210588@sakarya.edu.tr")
    { 
        echo " <script>location.replace('login.html')
        alert('mail adrersi bulunmaktadır yalnız şiferinizi yanlıştır')  </script>";
        
    }
    else 
    { 
        echo " <script>location.replace('login.html')
        alert('mail adresi bulunmamaktadır')  </script>";
        
    }
?>