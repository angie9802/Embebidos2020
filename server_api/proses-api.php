<?php

header('Acces-Control-Allow-Origin: *');
header("Acces-Control-Allow-Credentials: true");
header("Acces-Control-Allow-Methods: POST,GET,OPTIONS");
header("Acces-Control-Allow-Headers: Content-Tpe, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

include "config/config.php";

$postjson = json_decode(file_get_contents('php://input'), true);
$today    = date('Y-m-d');

if($psotjson['aski']=='registro'){
    $query =  mysqli_query($mysqli, "INSERT INTO Sedentarismo SET
    Nombre = '$postjson[username]',
    Clave  = '$postjson[password]',
    Estado = 'y',
    Creado_en  = '$today'
    ");

    $idcust = mysqli_insert_id($mysqli);

    if($query) $result = json_encode(array('succes'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, porfavor intente de nuevo'));

    echo $result;
}

?>