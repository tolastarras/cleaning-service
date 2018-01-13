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
  list($firstName, $part) = preg_split('/\s/', $inputData['name']);

  // double check form data
  // todo ...
  $message = preg_replace('/\\\n/', '<br>', $inputData['message']);
  if (empty($message)) return;

  // email recipient
  $to = "rafael.sobrino@yahoo.com";
  $from = "noreply@evevides.com";
  $subject = $inputData['type'];
  $headers = "From: " . strip_tags($from) . "\r\n";
  $headers .= "Reply-To: ". strip_tags($from) . "\r\n";
  // $headers .= "CC: susan@example.com\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $content = "
  <!DOCTYPE html>
  <html>
    <body>
      <div style='padding:0;margin:0;'>
        <b>Name:</b> {$inputData['name']}<br>
        <b>Email:</b> {$inputData['email']}<br>
        <b>Phone:</b> {$inputData['phone']}<br>
        <b>Message:</b><br>
        {$message}
      </div>
    </body>
  </html>";

  try {
    mail($to, $subject, $content, $headers);
    echo 'Message Sent. Thank you ' . ucfirst($firstName) . '!';
  } catch (Exception $e) {
    // print_r($e);
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
