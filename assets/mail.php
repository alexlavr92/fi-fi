<?php



    // Only process POST reqeusts.

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Get the form fields and remove MORALspace.

        $name = strip_tags(trim($_POST["name"]));

		$name = str_replace(array("\r","\n"),array(" "," "),$name);

        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

        $company = trim($_POST["company"]);

        $phone = trim($_POST["phone"]);

        $message = trim($_POST["message"]);

        $staff = trim($_POST["staff"]);



        // Check that data was sent to the mailer.

        if ( empty($name)or empty($phone) OR empty($company) OR empty($staff) OR empty($phone) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {

            // Set a 400 (bad request) response code and exit.

            http_response_code(400);

            echo "Please complete the form and try again.";

            exit;

        }



        // Set the recipient email address.

        // FIXME: Update this to your desired email address.

        $recipient = "intouch@iappi.tech, lavrinenkoaleksandr92@gmail.com";



        // Set the email subject.

        $sender = "Новая регистраниця на форум F&I";



        //Email Header

        $head = " /// Fi & Fi \\\ ";



        // Build the email content.

        $email_content = "$head\n\n\n";

        $email_content .= "Name: $name\n";

        $email_content .= "Email: $email\n\n";

        $email_content .= "company: $ $company\n\n";

        $email_content .= "phone: $phone\n\n";

        $email_content .= "staff:\n$staff\n";



        // Build the email headers.

        $email_headers = "From: $name <$email>";



        // Send the email.

        if (mail($recipient, $sender, $email_content, $email_headers)) {

            // Set a 200 (okay) response code.

            http_response_code(200);

            echo "Спасибо! Ваша заявка отправлена, мы свяжемся с вами в ближайшее время.";

        } else {

            // Set a 500 (internal server error) response code.

            http_response_code(500);

            echo "Упс! Произошла ошибка, ваша заявка не отправлена, попробуйте ещё раз или позднее.";

        }



    } else {

        // Not a POST request, set a 403 (forbidden) response code.

        http_response_code(403);

        echo "Упс! Ошибка с соединением, ваша заявка не отправлена, попробуйте ещё раз или позднее.";

    }



?>

