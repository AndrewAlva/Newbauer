<?php 

	$recipient = 'ventas@newbauerchemicals.com, andrew@luckyme.mx';


	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$formcontent="De: $name \n Mensaje: $message";
	
	$subject = "Mensaje desde newbauerchemicals.com";
	$mailheader = "From: $email \r\n";
	$mail_sent = mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	

	if ($mail_sent == true){ ?>
		<script language="javascript" type="text/javascript">
			alert('Mensaje enviado');
			window.location = 'contacto.html';
		</script>
		<?php } else { ?>

		<script type="text/javascript">
			alert('Mensaje no enviado, consulta al administrador.');
			window.location = 'contacto.html';
		</script>
		<?php } 
		?>

	}

}



?>