
function submitForm() {
       event.preventDefault();
       var name = document.getElementById("name").value;
       var age = document.getElementById("age").value;
       var gender = document.getElementById("gender").value;
       var email = document.getElementById("email").value;
       var phone = document.getElementById("phone").value;
       document.getElementById("output").innerHTML =
           "<h2>Student Data</h2>" +
           "<p><strong>Name: </strong>" + name + "</p>" +
           "<p><strong>Age: </strong>" + age + "</p>" +
           "<p><strong>Gender: </strong>" + gender + "</p>" +
           "<p><strong>Email: </strong>" + email + "</p>" +
           "<p><strong>Phone: </strong>" + phone + "</p>";
   }
   

