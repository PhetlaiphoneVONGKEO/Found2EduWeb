var attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

//admin
if ( username == "admin" && password == "admin123"){
// alert ("Login successfully");
window.location = "index_admin.html"; // Redirecting to other page.
return false;
}
else{
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("loginsubmit").disabled = true;
return false;
}
}
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;


//user
if ( username == "user" && password == "user123"){
// alert ("Login successfully");
window.location = "index.html"; // Redirecting to other page.
return false;
}
else{
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("loginsubmit").disabled = true;
return false;
}
}


//error
if ( username == "" && password == ""){
    window.location = "error.html"; // Redirecting to other page.
    return false;
    }
    else{
    if( attempt == 0){
    document.getElementById("username").disabled = false;
    document.getElementById("password").disabled = false;
    document.getElementById("loginsubmit").disabled = false;
    return false;
    }
    }
   
    
//incorrect 
if ( username == "" && password == ""){
    return false;
    }
    else{
    alert("Your username or password is incorrect");
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = false;
    document.getElementById("loginsubmit").disabled = false;
    return false;
    }
    }
        

}
var attempt = 4;
function linkjs(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        //admin
        if ( username == "admin" && password == "admin123"){
        // alert ("Login successfully");
        window.location = "#"; // Redirecting to other page.
        return false;
        }
        else{
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("loginsubmit").disabled = true;
        return false;
        }
        }
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        
        //user
        if ( username == "user" && password == "user123"){
        // alert ("Login successfully");
        window.location = "#"; // Redirecting to other page.
        return false;
        }
        else{
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("loginsubmit").disabled = true;
        return false;
        }
        }
        
        
        //error
        if ( username == "" && password == ""){
            window.location = "login_index.html"; // Redirecting to other page.
            return false;
            }
            else{
            if( attempt == 0){
            document.getElementById("username").disabled = false;
            document.getElementById("password").disabled = false;
            document.getElementById("loginsubmit").disabled = false;
            return false;
            }
            }
           
            
        //incorrect 
        if ( username == "" && password == ""){
            return false;
            }
            else{
            alert("Your username or password is incorrect");
            if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = false;
            document.getElementById("loginsubmit").disabled = false;
            return false;
            }
            }
                
        
        }
var attempt = 5;
function linkjj(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        //admin
        if ( username == "admin" && password == "admin123"){
        // alert ("Login successfully");
        window.location = "#"; // Redirecting to other page.
        return false;
        }
        else{
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("loginsubmit").disabled = true;
        return false;
        }
        }
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        
        //user
        if ( username == "user" && password == "user123"){
        // alert ("Login successfully");
        window.location = "#"; // Redirecting to other page.
        return false;
        }
        else{
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("loginsubmit").disabled = true;
        return false;
        }
        }
        
        
        //error
        if ( username == "" && password == ""){
            window.location = "login_index.html"; // Redirecting to other page.
            return false;
            }
            else{
            if( attempt == 0){
            document.getElementById("username").disabled = false;
            document.getElementById("password").disabled = false;
            document.getElementById("loginsubmit").disabled = false;
            return false;
            }
            }
           
            
        //incorrect 
        if ( username == "" && password == ""){
            return false;
            }
            else{
            alert("Your username or password is incorrect");
            if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = false;
            document.getElementById("loginsubmit").disabled = false;
            return false;
            }
            }
                
        
        }