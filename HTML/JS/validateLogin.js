
 let userName = $("#uname");
 let password = $("#pass");
 let loginBtn = $("#btn-1");
 let formSubmit = $("#form1")

 let nameError = $("#nameError");
 let passError = $("#passError");

$(function(){

    //username validation.
    userName.blur(()=> validateName());
    password.blur(()=> validatePass());
    formSubmit.submit(()=> validateAll())
    
    loginBtn.click(function(){
    })

//
const validateName = () =>{
    nameError.text("");
    console.warn("validate username calling ");
    let name = userName.val();
    if(name==""){
        nameError.text("*Should not be Null");
        userName.css('border','2px solid red');
        return false;
    }else{
        userName.css('border','2px solid green');
        return true;
    }
}

//
const validatePass = () =>{
    passError.text("");
    console.warn("validate password calling ");
    let pass = password.val();
    if(pass==""){
        passError.text("*Should not be Null");
        password.css('border','2px solid red');
        return false;
    }else{
        password.css('border','2px solid green');
        return true;
    }
}

//
const validateAll = () =>{
    let st1 = validateName();
    let st2 = validatePass();

    return st1 && st2;

}

})