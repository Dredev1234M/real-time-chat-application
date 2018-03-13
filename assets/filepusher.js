// Entrez votre propre clé pusher app
	var pusher = new Pusher('7bb2de607cf92f0b1c8c');
	// Entrez une chaîne unique à laquelle vous souhaitez que vos utilisateurs soient abonnés.
	var channel = pusher.subscribe('test_channel');
	channel.bind('my_event', function(data) {
		// Ajouter le nouveau message au conteneur
		$('.messages_display').append('<p class = "message_item">' + data.message + '</p>');
		// Afficher le bouton d'envoi
		$('.input_send_holder').html('<input type = "submit" value = "Send" class = "btn btn-primary input_send" />');
		// Faites défiler vers le bas du conteneur lorsqu'un nouveau message est disponible
		$(".messages_display").scrollTop($(".messages_display")[0].scrollHeight);
	});
	
	// Requête AJAX
	function ajaxCall(ajax_url, ajax_data) {
		$.ajax({
			type: "POST",
			url: ajax_url,
			dataType: "json",
			data: ajax_data,
			success: function(response, textStatus, jqXHR) {
				console.log(jqXHR.responseText);
			},
			error: function(msg) {}
		});
	}
	
	// Déclenchez la touche Entrée lorsque vous cliquez dessus.
	$.fn.enterKey = function(fnc) {
		return this.each(function() {
			$(this).keypress(function(ev) {
				var keycode = (ev.keyCode ? ev.keyCode : ev.which);
				if (keycode == '13') {
					fnc.call(this, ev);
				}
			});
		});
	}
	
	// Envoyer le message
	$('body').on('click', '.chat_box .input_send', function(e) {
		e.preventDefault();
		
		var message = $('.chat_box .input_message').val();
		var name = $('.chat_box .input_name').val();
		
		// Valider le champ nom
		if (name === '') {
			bootbox.alert('<br /><p class = "bg-danger">Entrez un nom S.V.P.</p>');
		
		} else if (message !== '') {
			// Définir les données ajax
			var chat_message = {
				name: $('.chat_box .input_name').val(),
				message: '<strong>' + $('.chat_box .input_name').val() + '</strong>: ' + message
			}
			// Envoyer le message au serveur
			ajaxCall('../message.php', chat_message);
			
			// Effacer le champ de saisie du message
			$('.chat_box .input_message').val('');
			// Afficher une image de chargement lors de l'envoi
			$('.input_send_holder').html('<input type = "submit" value = "Envoyer" class = "btn btn-primary" disabled /> &nbsp;<img src = "loading.gif" />');
		}
	});
	
	//Envoyer le message lorsque la touche entrée est appuyée
	$('.chat_box .input_message').enterKey(function(e) {
		e.preventDefault();
		$('.chat_box .input_send').click();
	});