<?php 
require('librairies/Pusher.php');

// Changer les details suivant par vos id
$app_id = '107923'; // App ID
$app_key = '7bb2de607cf92f0b1c8c'; // App Key
$app_secret = '5d5d008285995ee3bedb'; // App Secret
$pusher = new Pusher($app_key, $app_secret, $app_id);

// Verifier le message reçu
if(isset($_POST['message']) && !empty($_POST['message'])) {		
	$data['message'] = $_POST['message'];	
	
	// Retourner le message reçu
	if($pusher->trigger('test_channel', 'my_event', $data)) {				
		echo 'Succès';			
	} else {		
		echo 'Erreur';	
	}
}

Mer