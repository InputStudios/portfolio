<?php

	// получим данные с элементов формы
	$login = $_POST['login'];
	$email = $_POST['email'];
	$tel = $_POST['tel'];

	// обработаем полученные данные
	$login = htmlspecialchars($login); // преобразование символов в сущности (мнемоники)
	$email = htmlspecialchars($email);
	$tel = htmlspecialchars($tel);

	$login = urldecode($login); // декодирование URL
	$email = urldecode($email);
	$tel = urldecode($tel);

	$login = trim($login); // удаление проблемных символов с обеих сторон
	$email = trim($email);
	$tel = trim($tel);


	// отправляем данные на почту
	if(mail(
		"verclocker1@gmail.com",
		"Новое письмо с сайта",
		"Логин: ".$login."\n".
		"Email: ".$email."\n".
		"Телефон: ".$tel,
		"From: no-reply@mydomain.ru \r\n")

	) {
		echo ('Письмо успешно отправлено!');
	}

	else {
		echo ('Есть ошибки! Проверьте данные...');
	}
?>