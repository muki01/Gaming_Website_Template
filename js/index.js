function check()
{
 var username = document.getElementById("user").value;
 var password = document.getElementById("pass").value;
 if(username == "muki2004" && password == "muki2004")
  {
    window.open("home.html","_self");

  }
 else{
   alert("Invalid username or password")
 }}