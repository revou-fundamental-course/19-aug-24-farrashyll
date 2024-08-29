function formValidation(){
    let fullName = document.getElementById("fullName").value;
    if (fullName == ""){
        alert ("All field must be filled!");
    } 
    else{
        document.getElementById('result').innerHTML = "Submitted"
    }
    console.log(fullName);
}