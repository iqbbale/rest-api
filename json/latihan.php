<?php

// $mahasiswa = [
//     // jika di tulis begini ini namnya arry of object dibacanya meskipun di dalamnya ini [] tapi di browser menamngkap {}
//     [
//         "nama" => "iqbal",
//         "nim" => "e41253039",
//         "email" => "iqbal@gmail.com"
//     ],
//     [
//         "nama" => "balle",
//         "nim" => "e41253039",
//         "email" => "iqbal@gmail.com"
//     ]
// ];

// conect db
$dbh = new PDO('mysql:host=localhost;dbname=mhs', 'root', '');
$db = $dbh->prepare('SELECT * FROM mahasiswapolije');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;
?>
