<?php
$data = file_get_contents('data/pizza.json');
// jika arry tulis true jika tidak ga usah di tulis
$menu = json_decode($data, true);

$menu = $menu["menu"];
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>wpu hut</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  </head>
  <body>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="img/logo.png" width="120">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </div>
    </div>
  </div>
  </nav>

  <div class="container">

  <div class="row mt-3">
    <div class="col">
      <h1>All menu</h1>
    </div>
  </div>

  <div class="row">
    <?php foreach($menu as $row) : ?>
    <div class="col-md-4">
      <div class="card mb-3" style="width: 18rem;">
        <img src="img/pizza/<?= $row["gambar"]; ?>" class="card-img-top" >
        <div class="card-body">
          <h5 class="card-title"><?= $row["nama"]; ?></h5>
          <p class="card-text"><?= $row["deskripsi"]; ?></p>
          <h5 class="card-title">Rp.<?= $row["harga"]; ?></h5>
          <a href="#" class="btn btn-primary">pesan sekarang</a>
        </div>
      </div>
    </div>
    <?php endforeach; ?>
  </div>

  </div>

    <script src="https://code.jquery.com/jquery-4.0.0.min.js" integrity="sha256-OaVG6prZf4v69dPg6PhVattBXkcOWQB62pdZ3ORyrao=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  </body>
</html>
