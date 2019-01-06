  <?php header('Content-Type: text/html');
  $url = $_POST['url'];
  echo file_get_contents($url);
  ?>
