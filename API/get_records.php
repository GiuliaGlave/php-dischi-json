<?php

 $data = file_get_contents(__DIR__ . "/../data/records.json"); 

    header('Content-Type: application/json');
 
     echo $data; 
?>