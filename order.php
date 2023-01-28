<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $fName = $_POST['fName'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $country = $_POST['country'];
        $postcode = $_POST['postalCode'];
        $tosave = $_POST['saveInfo'];

        echo $email . "<br>" .
        $phone . "<br>" .
        $fName . "<br>" .
        $address . "<br>" .
        $city . "<br>" .
        $country . "<br>" .
        $postcode . "<br>" .
        $tosave;
    }
?>