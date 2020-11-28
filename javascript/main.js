 $(document).ready(function () {
 	$('.submit').click(function (e) {
 		
 		let emailRegex = /\S+@\S+\.\S+/;

 		let email = $('.email').val()
 		let subject = $('.subject').val()
 		let message = $('.message').val()
 		let valid = $('.valid')

 		valid.empty()

 		if (emailRegex.test(email)) {
 			console.log('email valid')
 		}else{
 			
 			valid.append('<div>*email is not valid</div>')
 			e.preventDefault()
 		}

 		if (subject.length >= 3) {
 			console.log('subject valid')
 		}else{
 			
 			valid.append('<div>*subject is too short</div>')
 			e.preventDefault()
 		}

 		if (message.length >= 10) {
 			console.log('message valid')
 		}else{
 			
 			valid.append('<div>*message is too short</div>')
 			e.preventDefault()
 		}
 	})
 })

 function myFunction() {
	let x = document.getElementById("myLinks");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }