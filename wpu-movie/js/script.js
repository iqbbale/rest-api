function searchMovie() {
  // di sini kita taruh ketika menulis agar serach sebelumnya itu dihilangkan dan dikasi search yang baru
  $("#movie-list").html("");

  // $.getJSON('http://omdapi.com?apikey=')
  // daripada nulis kayak gitu panjang kita nulis dengan fungsi aslinya yaitu ajax
  $.ajax({
    // dalma ajax ada yang harus kita lakukan
    // 1. ambil urlnya
    url: "http://www.omdbapi.com/",
    // 2. tentukan methodnya mau gimana mau get post dll
    type: "get",
    // 3. dataType-nya apa jadi harus dilihat mau data model apa, json/object/xml
    dataType: "json",
    // 4. ini untuk mengirim yang mana ini kita mau mengirim apa ke nomer 1
    data: {
      // datanya ada 2 = 1. APIkey kita, 2. pencariannya apa
      apikey: "a6c04af6",
      s: $("#search-input").val(),
    },
    // 5. jika sukses apa yang akan dilakukan
    success: function (result) {
      // console.log(result)
      if (result.Response == "True") {
        let movies = result.Search;
        // console.log(movies)
        $.each(movies, function (i, data) {
          $("#movie-list").append(
            `
              <div class="col-md-4">
                <div class="card-mb-3">
                <img src="` +
              data.Poster +
              `" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">` +
              data.Title +
              `</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">` +
              data.Year +
              `</h6>
                  <a href="#" class="btn btn-primary see-detail" data-bs-toggle="modal"
                  data-bs-target="#exampleModal" data-id="` +
              data.imdbID +
              `">See detail</a>
                </div>
                </div>
              </div>
            `,
          );
        });
        // hilangkan hasil search
        $("#search-input").val("");
      } else {
        $("#movie-list").html(
          `
          <div class="col">
            <h1 class="text-center">` +
            result.Error +
            `</h1>
          </div>
          `,
        );
      }
    },
  });
}

$("#search-button").on("click", function () {
  searchMovie();
});

// tangani ketika tombol enter di pencet
// keyup itu ketika tombol dilepas
$("#search-input").on("keyup", function (e) {
  // ketika hanya pas tombol enter di pencet
  // tombol enter itu codenya 13
  // keyCode itu ketika di click
  if (e.keyCode === 13) {
    searchMovie();
  }
});

// jk disini atau disi ini doang ini tidak akan terkirim karena akan terjadi event bumbling
//  yang mana akan menyebabkan ini tidak dikirim kemanapun alias ke data yang kosong
// karena ini akan dikirm ke dalam #movielist
// dan juga bisa kita akalin nantinya
// pada saat tombol detail di click
// $('.see-detail').on('click', function(){
//   // data('id') ini akan di ambil pada data-id di see detail
//   console.log($(this).data('id'))
// })

// kita akalin disini
// see-detail disitu maka di arahkan ke dalam click see-detail
$("#movie-list").on("click", ".see-detail", function () {
  // console.log($(this).data('id'))
  $.ajax({
    url: "http://www.omdbapi.com/",
    dataType: "json",
    type: "get",
    data: {
      apikey: "a6c04af6",
      i: $(this).data("id"),
    },
    success: function (movie) {
      if (movie.Response == "True") {
        $(".modal-body").html(
          `
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4">
                  <img src="` +
            movie.Poster +
            `" alt="" class="img-fluid">
                </div>
                <div class="col-md-8">
                  <ul class="list-group">
                    <li class="list-group-item"><h3>` +
            movie.Title +
            `</h3></li>
                    <li class="list-group-item">Released : ` +
            movie.Released +
            `</li>
                    <li class="list-group-item">Genre : ` +
            movie.Genre +
            `</li>
                    <li class="list-group-item">Director : ` +
            movie.Director +
            `</li>
                    <li class="list-group-item">Actor : ` +
            movie.Actors +
            `</li>
                  </ul>
                </div>
              </div>
            </div>
          `,
        );
      }
    },
  });
});
