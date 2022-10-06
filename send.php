<?php

	// получим данные с элементов формы
	$login = $_POST['login'];
	$email = $_POST['email'];
	$tel = $_POST['tel'];
	$message = $_POST['message'];

	// обработаем полученные данные
	$login = htmlspecialchars($login); // преобразование символов в сущности (мнемоники)
	$email = htmlspecialchars($email);
	$tel = htmlspecialchars($tel);
	$message = htmlspecialchars($message);

	$login = urldecode($login); // декодирование URL
	$email = urldecode($email);
	$tel = urldecode($tel);
	$message = urldecode($message);

	$login = trim($login); // удаление проблемных символов с обеих сторон
	$email = trim($email);
	$tel = trim($tel);
	$message = trim($message);

	// отправляем данные на почту
	if(mail(
		"verclocker1@gmail.com",
		"Новое письмо с сайта",
		"Логин: ".$login."\n".
		"Email: ".$email."\n".
		"Телефон: ".$tel,
		"Сообщение: ".$message,
		"From: no-reply@mydomain.ru \r\n")

	) {
		echo ('Письмо успешно отправлено!');
	}

	else {
		echo ('Есть ошибки! Проверьте данные...');
	}
?>