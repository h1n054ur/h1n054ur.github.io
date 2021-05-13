// window.onkeydown = function(e) {
//     return !(e.keyCode == 32);
// };

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
  var list = document.getElementById('list');

  list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

  document.getElementById('list-screen').classList.remove('slide-out-top');
  document.getElementById('list-screen').classList.add('slide-in-top');
  document.getElementById('list-screen').style.display = "block";
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
  document.getElementById('list-screen').classList.remove('slide-in-top');
  document.getElementById('list-screen').classList.add('slide-out-top');
  document.getElementById('list-screen').style.display = "none";
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "bindings": {
    37: 'prev',
    39: 'next',
    // 32: 'play_pause'
  },
  "songs": [
    {
      "name": "Visions (Boehm Remix)",
      "artist": "Cheat Codes",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1LtUI-yYyUhmGgWLNF4PEkm2BNNlPZtMm&export=download",
      "cover_art_url": "https://i.ibb.co/5RCk38k/image.png"
    },
    {
      "name": "Into My Dream (ft. Louise Mambell)",
      "artist": "3 Monkeyzz",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1WT-E-68gAp072kj_5T6fkYbAyCwxPnhj&export=download",
      "cover_art_url": "https://bit.ly/2Q5ybum"
    },
    {
      "name": "Can't Forget You",
      "artist": "22 Bullets",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1RfLGsBCDo6akJtVOMi_GNkkbyPj9Ud3r&export=download",
      "cover_art_url": "https://bit.ly/2Q0AmiG"
    },
    {
      "name": "Easy Love",
      "artist": "Dunisco",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1SlDDd2zcpPAh7_kf1_RIoDhbaS_3aj8v&export=download",
      "cover_art_url": "https://bit.ly/3f1OZe9"
    },
    {
      "name": "What If",
      "artist": "Adam Friedman",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1S2OWnS0blzvxLsCYFcQL5RX2P-mkbwt_&export=download",
      "cover_art_url": "https://bit.ly/3f1iXPy"
    },
    {
      "name": "Forever (feat. Kid Travis)",
      "artist": "Adam Turley",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1fQ0LwTBDsJDTUabdv1TDx2phxZdazz95&export=download",
      "cover_art_url": "https://bit.ly/3f7XXq6"
    },
    {
      "name": "Anjo",
      "artist": "Addal",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1VitgwKCzYwML_uvq7031UUswRfpQCMwj&export=download",
      "cover_art_url": "https://bit.ly/33oIXyS"
    },
    {
      "name": "Real Love (feat. Stevie Appleton)",
      "artist": "Addal",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1XknydqjjOwT1m9rH17OYa4nVUGW8Qub_&export=download",
      "cover_art_url": "https://bit.ly/3f2u7mV"
    },
    {
      "name": "High (Club Mix)",
      "artist": "ADDAL VS MIDA FT KIFI",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1GsEeBl0-i3T7tCK_3EZ4qRCkkA_OCoAD&export=download",
      "cover_art_url": "https://bit.ly/2QXjCtm"
    },
    {
      "name": "Be Yours",
      "artist": "Addy Ace & Keylo",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1EBNafV1aO4VfXKafFLolJLLHp9kKyFrj&export=download",
      "cover_art_url": "https://bit.ly/3hdMYOv"
    },
    {
      "name": "View ft. Drew Schueler",
      "artist": "Addy Ace & Vic Roz",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1NsJMbI_rrZ4hjBFygLlsctO50CDR67b2&export=download",
      "cover_art_url": "https://bit.ly/3uyAOUv"
    },
    {
      "name": "About Life",
      "artist": "Adon",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1cr-cVSjmt9YrUsOmVqN93CPqGxesu_D3&export=download",
      "cover_art_url": "https://bit.ly/3o0TdGP"
    },
    {
      "name": "Castle In The Sky (feat. Emilia Sonate)",
      "artist": "Adon",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1VuEwU5TDRnDOAS2_lPLny9k5xRdfeUR7&export=download",
      "cover_art_url": "https://bit.ly/3vY4jzr"
    },
    {
      "name": "Love Again",
      "artist": "Adon",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1YSspggdL6gPD3pExHhNsl7v7iDlr3Fxj&export=download",
      "cover_art_url": "https://bit.ly/3nYO1TU"
    },
    {
      "name": "Waterfalls",
      "artist": "Adon",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=14pA0HKAleHI3IMk_Hv1UyWmNeifjqp58&export=download",
      "cover_art_url": "https://bit.ly/3bbTBNN"
    },
    {
      "name": "Simple Love",
      "artist": "Adon, Nicolas Haelg, Sam Halabi",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1jnyKMt9WKH5NPohie0Zmdf1z_b2dtprd&export=download",
      "cover_art_url": "https://bit.ly/3tvKTA4"
    },
    {
    "name": "Slow Down",
    "artist": "Aérotique",
    "album": "Mix 1",
    "url": "https://drive.google.com/u/2/uc?id=1NBl6Fw-jDoBtRPrFxMtZMm9CezhYR-Vp&export=download",
    "cover_art_url": "https://bit.ly/3xWTjnB"
    },
    {
      "name": "Back To Life",
      "artist": "Aérotique & Glaceo",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1SlA9Uq5F_STNGLgjUvPlADsXsDTvrSjK&export=download",
      "cover_art_url": "https://bit.ly/3bcQwNq"
    },
    {
      "name": "Not Coming Home",
      "artist": "Aérotique & Glaceo",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1u_Qeuy9xw5d246nejY2zgHzN8EU4acAY&export=download",
      "cover_art_url": "https://bit.ly/3evABvs"
    },
    {
      "name": "Ain't You",
      "artist": "Aexcit",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1nsatC2szoX0QnHTOA-NKYk3Qmddku1w4&export=download",
      "cover_art_url": "https://bit.ly/3tyAOm1"
    },
    {
      "name": "Just A Bit",
      "artist": "Aexcit",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1cijEt-3LDFk26cd4iDo0kXiQopK-2BZV&export=download",
      "cover_art_url": "https://bit.ly/3xZQ1jg"
    },
    {
      "name": "Without You",
      "artist": "Aexcit",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1_5pU9QhswKa3aCfVtcnUUeCxoIImvuUT&export=download",
      "cover_art_url": "https://bit.ly/2RAGDSD"
    },
    {
      "name": "Sweet Dreams",
      "artist": "Aexcit & INFINITY",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=14L0kaY-hqPV00uAGA63SwnabbhnBgsGE&export=download",
      "cover_art_url": "https://bit.ly/3evAHmO"
    },
    {
      "name": "18+ (Spanish Version)",
      "artist": "Afro Bros ft. Ghetto Flow",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1BjmWU8YFROLe4q5O5VtIBaD-7z3hzKQ5&export=download",
      "cover_art_url": "https://bit.ly/3xV035n"
    },
    {
      "name": "Cloud 9 ft. Jeremih",
      "artist": "Afrojack & Chico Rose",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1EFcUduKdFw1B71B0D7bY_IQeMSRe92_k&export=download",
      "cover_art_url": "https://bit.ly/3o2gfNv"
    },
    {
      "name": "Sober (feat. Dilan Muhammad)",
      "artist": "Akki & Not So Good",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1u2y_E4AVWqC6kjzaw7Cd4YXBsLiM-mbx&export=download",
      "cover_art_url": "https://bit.ly/3h8XRRX"
    },
    {
      "name": "Alone (Lost Frequencies Remix)",
      "artist": "Alan Walker",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1C-NzwEK3sBrwOg6abwWJrADbeAB3k7fG&export=download",
      "cover_art_url": "https://bit.ly/3nYOu8C"
    },
    {
      "name": "Alone",
      "artist": "Alan Walker",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1Cm3qHcHkHP6nexryu8M-gqm9U5r0FzdY&export=download",
      "cover_art_url": "https://bit.ly/3f4Gpez"
    },
    {
      "name": "Sing Me To Sleep",
      "artist": "Alan Walker",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1DqtQV0chpWa_Hp7sdxtRvKTKP4JbU-HJ&export=download",
      "cover_art_url": "https://bit.ly/33oMvkG"
    },
    {
      "name": "The Spectre",
      "artist": "Alan Walker",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=16HVuztfUWL5sZLkaCVcbx8dibT3Vk0WF&export=download",
      "cover_art_url": "https://bit.ly/33oMw8e"
    },
    {
      "name": "Heading Home",
      "artist": "Alan Walker & Ruben",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1L6ICDQNPZnTT2mqXfcWXqkqRNX14dQOK&export=download",
      "cover_art_url": "https://bit.ly/3beqoS7"
    },
    {
      "name": "Fake A Smile",
      "artist": "Alan Walker & salem ilese",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=11wpvzH82g1NL8UiT4ayAlyg-VQv0zQgD&export=download",
      "cover_art_url": "https://bit.ly/2Q7e0fC"
    },
    {
      "name": "Choir (Remix)",
      "artist": "Alan Walker, Guy Sebastian",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1UZ-jk_n7LDi525NnzVovoOWiIfNso0p1&export=download",
      "cover_art_url": "https://bit.ly/33yWsfb"
    },
    {
      "name": "Play",
      "artist": "Alan Walker, K 391, Martin Tungevaag",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1VA9uqFiT-3F-dOf8AyEVIdk6oe9xW9Zh&export=download",
      "cover_art_url": "https://bit.ly/2SGbzSd"
    },
    {
      "name": "On My Way",
      "artist": "Alan Walker, Sabrina Carpenter & Farruko",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1dAP5SwNuU40VUJoh5Gcvbs3QE2LrK-26&export=download",
      "cover_art_url": "https://bit.ly/2QXm4QA"
    },
    {
      "name": "Remind Me ft. Daramola & Karen Inder",
      "artist": "Ale Mora",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1Pthv4hLzOETua2u8Wb7qVfuOwntARbR4&export=download",
      "cover_art_url": "https://bit.ly/3tvUJ55"
    },
    {
      "name": "Strangers Like Us",
      "artist": "Ale Q",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1jF18pHYfx5fuMCoqXkYAadwtX_lgllfz&export=download",
      "cover_art_url": "https://bit.ly/3vUucQG"
    },
    {
      "name": "Falling",
      "artist": "Alesso",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1FoHwtp2wYvsYYlsICC7eCLlOEEFwrpes&export=download",
      "cover_art_url": "https://bit.ly/2QWxQL1"
    },
    {
      "name": "I Wanna Know ft. Nico & Vinz",
      "artist": "Alesso",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1JwsUAaQuAX1YIXTyR5-ZLcGe42guI3lc&export=download",
      "cover_art_url": "https://bit.ly/3vX4Stf"
    },
    {
      "name": "Is That For Me",
      "artist": "Alesso & Anitta",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=11hjzvMhYVzGg_eEeA-pGJZEvT2YTyeTS&export=download",
      "cover_art_url": "https://bit.ly/3uwbLkZ"
    },
    {
      "name": "Cool (Autograf Remix)",
      "artist": "Alesso ft. Roy English",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1M5qedM41sJ5959F1ZE5U3p4Ksi2feg12&export=download",
      "cover_art_url": "https://bit.ly/3nZPAB6"
    },
    {
      "name": "Heaven (Official Video)",
      "artist": "Alex Adair",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1LI5XwmkG88FycyHwf79dFzF2P8ZKPerE&export=download",
      "cover_art_url": "https://bit.ly/33oNkKi"
    },
    {
      "name": "Make Me Feel Better",
      "artist": "Alex Adair",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1MSWDIARqawyDl4QQZkPHzM4lgVWJE1e6&export=download",
      "cover_art_url": "https://bit.ly/3xVjN95"
    },
    {
      "name": "If You Wanna (feat. Ayelle)",
      "artist": "Alex Lustig",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1nBMcdB7sG7lubnXczHjbgPxtvqUuMmM1&export=download",
      "cover_art_url": "https://bit.ly/3eshgLQ"
    },
    {
      "name": "Don't You Worry Child",
      "artist": "Alex Parker",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=147Rp9-zuPCTAHvHnqw145re3IADB2Ez3&export=download",
      "cover_art_url": "https://bit.ly/3bb58g6"
    },
    {
      "name": "Love Games (feat. Olivia Addams)",
      "artist": "Alex Parker",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1WoFDGBTR3GikDt3TkVH9FYpGgLrLTY9J&export=download",
      "cover_art_url": "https://bit.ly/2Ry0XUK"
    },
    {
      "name": "I Need You",
      "artist": "Alex Parker & Bastien",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=16YwvxbGtgKWY8gsJgJm3KkdalMC4G4NE&export=download",
      "cover_art_url": "https://bit.ly/3hdaECI"
    },
    {
      "name": "Are You Mine (feat. Rakan)",
      "artist": "Alex Shulz",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1ZTV5OtaX_oP36RLsQ5oAKejd9UwqOlDG&export=download",
      "cover_art_url": "https://bit.ly/2Q2TmNF"
    },
    {
      "name": "In the Morning Light (Radio Mix)",
      "artist": "Alex Shulz",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1MGeqj6c1LOhWnCym9PtoORQxQBhGeRvc&export=download",
      "cover_art_url": "https://bit.ly/3f8cqCs"
    },
    {
      "name": "Save A Life",
      "artist": "Alex Shulz",
      "album": "Mix 1",
      "url": "https://drive.google.com/u/2/uc?id=1Gi4k9DW13w6sYE5oVRn2xpNqPsSmp2UE&export=download",
      "cover_art_url": "https://bit.ly/3evKTvF"
    },
  ]
});