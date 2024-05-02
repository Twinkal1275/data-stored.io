document.getElementById("inputForm").addEventListener('submit', function(event){
event.preventDefault();

// get form value
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var age = document.getElementById("age").value;


// create new row for the table
var newrow = document.createElement('tr');
newrow.innerHTML = '<td>' + name + '</td><td>' + email +'</td><td>' + age + 
'</td>';

// append new row to the table body
document.getElementById('tableBody').appendChild(newrow);

// clear form input 
document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('age').value = '';
});



