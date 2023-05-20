document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Here, you can add your own code to handle the form submission, such as sending an email or storing the data.
  
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  
    // Display a success message
    document.getElementById('success-message').innerHTML = 'Message Not Sent!! Work in progress!! Contact Me At: DylanJStanding@gmail.com';
  });
  