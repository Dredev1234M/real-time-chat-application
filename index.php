<!DOCTYPE html>
<head>	
	<title>Application de Chat en temps réel avec PUSHER</title>	
<link rel="stylesheet" type="text/css" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
<link rel="stylesheet" href="assets/styles.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" type="text/javascript" ></script>	
<script src="//js.pusher.com/2.2/pusher.min.js" type="text/javascript" type="text/javascript" ></script>	
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js" type="text/javascript" ></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.3.0/bootbox.min.js" type="text/javascript" ></script>		
	<script type="text/javascript">	
	// Enable pusher logging - don't include this in production	//Pusher.log = function(message) {	
	//if (window.console && window.console.log) {			
	//window.console.log(message);		
	//}	//};		
	</script>		
</head>
<body>
<br />	
<div class = "container">		
	<div class = "col-md-6 chat_box">						
		<div class = "form-control messages_display"></div>			
		<br />						
		<div class = "form-group">				
			<label>Nom</label>				
			<input type = "text" class = "input_name form-control" placeholder = "Entrez votre nom" />	
		</div>						
		<div class = "form-group">				
			<label>Message</label>				
			<textarea class = "input_message form-control messagebox" placeholder = "Votre Message"></textarea>			
		</div>						
		<div class = "form-group input_send_holder">				
			<input type = "submit" value = "Envoyez" class = "btn btn-primary input_send" />			
		</div>					
	</div>
	
	<script type="text/javascript" src="assets/filepusher.js"></script>
	
</div>
</body>