// JavaScript // jQuery

document.querySelector('.foo .bar'); // $('.foo .bar')
document.querySelectorAll('.foo .bar');
element.querySelector('.bar'); // $(element).find('.bar')
element.addEventListener('click', fn);
element.setAttribute(key, value); // $(element).attr(key, value)
element.style[name] = value; // $(element).css(name, value)
div = document.createElement('div'); // div = $('<div>')
a.appendChild(b); // $(a).append(b)
a.insertBefore(b, a.childNodes[0]); // $(a).prepend(b)
element.innerHTML = string; // $(element).html(string)
element.textContent = string; // $(element).text(string)
element.parentNode.removeChild(element); // $(element).remove()

// fetch an image
var xhr = new XMLHttpRequest();
xhr.open('GET', 'path/to/image.png', true);
xhr.responseType = 'blob';

xhr.onload = function(e) {
  if (this.status == 200) {
    var blob = new Blob([this.response], {type: 'image/png'});
    // ...
  }
};
xhr.send();

// upload an image
// <input type="file" name="afile" id="afile" accept="image/*"/>

document.querySelector('#afile').addEventListener('change', function(e) {
  var file = this.files[0];

  var fd = new FormData();
  fd.append("afile", file);
  // These extra params aren't necessary but show that you can include other data.
  fd.append("username", "Groucho");
  fd.append("accountnum", 123456);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'handle_file_upload.php', true);

  xhr.upload.onprogress = function(e) {
    if (e.lengthComputable) {
      var percentComplete = (e.loaded / e.total) * 100;
      console.log(percentComplete + '% uploaded');
    }
  };

  xhr.onload = function() {
    if (this.status == 200) {
      var resp = JSON.parse(this.response);

      console.log('Server got:', resp);

      var image = document.createElement('img');
      image.src = resp.dataUrl;
      document.body.appendChild(image);
    }
  };

  xhr.send(fd);
}, false);


// simple json request
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.example2.com/hello.json');
xhr.onload = function(e) {
  var data = JSON.parse(this.response);
  // ...
};
xhr.send();

