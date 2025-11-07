var iAge; 
var sMF; 

iAge = prompt("Please enter yoyr age in years" , 0); 
sMF = prompt("Are you a (M)ale or (F)emale" , "M"); 

if(iAge > 20){ 
    if(sMF == "M"){ 
        alert("You are a Male over 20 years of age"); 
    }else{ 
        alert("You are a Female over 20 years of age"); 
    } 
}else{ 
    if(sMF == "M"){ 
        alert("You are a Male under the age of 21"); 
    }else{ 
        alert("You are a Female under the age of 21"); 
    } 
} 