function regTest(){
// the actual regExp has to be made into its own object so it can inherit the .test function
    userRegStr = document.getElementById("taRegTest").value;
    userRegExp = new RegExp(userRegStr,"g");
    userStr = document.getElementById("taToTest").value;

  
   if(userRegExp.test(userStr) == true){
        document.getElementById("pass").value = "Passed";
    }else{
        document.getElementById("pass").value = "Failed";
    }
}