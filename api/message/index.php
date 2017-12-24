<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Max-Age: 3600');
// header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
// header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

// echo 'REFERER: ' . $_SERVER['HTTP_REFERER'] . "<br>";
if (empty($_SERVER['HTTP_REFERER'])) {
  // echo "EMPTY<br>";
//   header('HTTP/1.1 404 Not Found');
//   return;
} else {
  // echo "NOT EMPTY<br>";
}

if (isset($_POST) ) {
  // $_POST = json_decode(file_get_contents('php://input'), true);
  $inputData = my_json_decode(file_get_contents('php://input'));
  // echo 'Name:' . $inputData['name'] . "\n";
  // echo 'Email: ' . $inputData['email'] . "\n";
  // echo 'Message: ' . $inputData['message'] . "\n";

  list($firstName, $part) = preg_split('/\s/', $inputData['name']);

  // double check form data
  // todo ...

  // email recipient
  $email = "rafael.sobrino@yahoo.com";
  $headers = "From: info@evevides.com" . "\r\n" . "CC: testxxxxxxxxxxxxx@gmail.com";
  $content = 'HELLO WORLD!';
  // "<pre>
  //   Name: {$inputData['name']}\n
  //   Email: {$inputData['email']}\n
  // </pre>";

  try {
    mail($email, 'Comment', $content, $headers);
    echo 'Message Sent. Thank you ' . ucfirst($firstName) . '!';
  } catch (Exception $e) {
    print_r($e);
    echo 'Unable to Send Message!';
  }
}

function my_json_decode($str) {
  $data = array();
  // remove extra spaces
  $str = preg_replace(array('/:\s/', '/,\s/', '/"/'), array(':', ',', ''), $str);
  $postData = preg_split("/,/", preg_replace('/[{}]/', '', $str));

  foreach ($postData as $record) {
    list($key, $value) = preg_split('/:/', $record);
    $data[$key] = $value;
  }

  return $data;
}
?>
