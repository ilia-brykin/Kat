// function loadAlbum(path) {
//   var iframe = document.getElementById('target');
//   iframe.setAttribute('src', path);
//   sessionStorage["album"] = path;
// }

function addtoPL(name, path) {
  localStorage[name] = path;
  /*добавляем в localStorage путь к аудио файлу*/
  window.parent.location.href = window.parent.location.href;
}

function testListen(path) {
  var audio = document.createElement('audio');
  var div = document.getElementById('tracks');
  audio.src = path;
  audio.controls = false;
  div.appendChild(audio);
  audio.addEventListener('timeupdate', function () {
    if (audio.currentTime > 10) {
      audio.pause();
    }
  }, false);
  /*так переносить можно?*/
  audio.play();
}

function playtrack(track) {
  var b = false;
  for (var i in localStorage) {
    if (b) {
      localStorage['next'] = localStorage[i];
      break;
    }
    if (i === track) {
      b = true;
    }
  }
  var audio = document.getElementById('audio');
  audio.src = localStorage[track];
  audio.controls = true;
  audio.play();
}

function load() {
  //if (sessionStorage["album"] != undefined) {
  //  loadAlbum(sessionStorage["album"]);
  //}
  // var audio = document.getElementById('audio');
  // audio.addEventListener('ended', function () {
  //   playtrack('next');
  // }, false);
  var list = document.getElementById('playlist');
  for (var i in localStorage) {
    var element = document.createElement('li');
    element.setAttribute('class', 'PL');
    element.setAttribute('onclick', "playtrack('" + i + "')");
    element.innerText = i;
    if (i != 'next') {
      list.appendChild(element);
    }
  }
}