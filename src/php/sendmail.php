<?php

    // НАСТРОЙКИ получателя/отправителя
    $to_email       = "t.studio@mail.ru";                 // Email получателя отчетов, например: 'admin@mysite.ru'
    $to_name        = "Тимур Салихов";                    // Имя получателя отчетов, например: 'Иван Петров'
    $from_email     = "";                                 // Email отправителя, например: 'noreply@mysite.ru'
    $from_name      = "VideoHappy";                       // Имя, от которого отправляются отчеты, например: 'Мой Сайт'
    $subject        = "[videohappy.ru]";                  // Название сайта в квадратных скобках для подстановки в тему письма префиксом

    // НАСТРОЙКИ СМС уведомлений через сервис sms.ru
    $send_sms       = false;                                    // Включить (true) или Выключить (false) смс-уведомления
    $sms_api_id     = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";   // Индивидуальный API ID в сервисе sms.ru
    $sms_phone      = "7XXX1234567";                            // 11-значный номер телефона для уведомлений, наиная с 7 без плюса

    // НЕ ТРОГАЙТЕ КОД НИЖЕ ЭТОЙ СТРОКИ!!!

    $data["form"]       = strtolower(strip_tags($_REQUEST['form']));
    $data["name"]       = strip_tags($_REQUEST['name']);
    $data["email"]      = strip_tags($_REQUEST['email']);
    $data["phone"]      = strip_tags($_REQUEST['phone']);
    $data["message"]    = strip_tags($_REQUEST['message']);
    $data["service"]    = strip_tags($_REQUEST['service']);

    if (empty($data["form"])) exit;

    $headline = "Заявка на обратную связь";

    $subject .= " " . $headline;

    if ($data["service"] == "") {
        $data["service"] = "-";
    };

    $to_email       = strip_tags(trim($to_email));
    $from_email     = strip_tags(trim($from_email));

    if (empty($from_email)) {$from_email = $to_email;}

    $headers  = "From: $from_name <$from_email>\r\n";
    $headers .= "Reply-To: $from_name <$from_email>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";

    $message  = "<html><body style=\"font-family:Arial,sans-serif;\">\r\n";
    $message .= "<h2 style=\"border-bottom:1px solid #ccc;\">" . $headline. "</h2>\r\n";
    $message .= "<p><strong>Имя:</strong> " . $data["name"] . "</p>\r\n";
    $message .= "<p><strong>Телефон:</strong> " . $data["phone"] . "</p>\r\n";
    $message .= "<p><strong>Email:</strong> " . $data["email"] . "</p>\r\n";
    $message .= "<p><strong>Услуга:</strong> " . $data["service"] . "</p>\r\n";
    $message .= "<p><strong>Сообщение:</strong> " . $data["message"] . "</p>\r\n";

    $message .= "</body></html>";

    $result = @mail($to_email, $subject, $message, $headers);

    if ($send_sms) {
        $sms_message =  "Заявка с videohappy.ru: "+ $data["name"] + ", " + $data["phone"];
        $body = file_get_contents("http://sms.ru/sms/send?api_id=".$sms_api_id."&to=".$sms_phone."&text=".urlencode(iconv("utf-8","utf-8",$sms_message)));
    };

    if($result) {
        echo "true";
    } else {
        echo "false";
    }

?>
