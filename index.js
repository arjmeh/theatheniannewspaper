const link = 'https://csanewsbackend.herokuapp.com/'

//cookies
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }



fetch(link + 'getnews', {mode: 'cors'})
.then(response => response.text())
    .then(data => {
    const responsedata = JSON.parse(data);
    console.log(data);
    // main article
    var mainarticletitle = document.getElementById('main-article-title');
    var mainarticleleft = document.getElementById('main-article-left-text');
    var mainarticleimage = document.getElementById('main-article-image');
    var mainarticleright = document.getElementById('main-article-right-text');
    
    for (const key in responsedata) {
        if (key == 'mainarticle') {
            const fullarticle = responsedata[key].article;
            const half = fullarticle.length / 2;  // Get the index of the middle character

            const firstHalf = fullarticle.substring(0, half);  // Get the first half of the string
            const secondHalf = fullarticle.substr(half);
            mainarticletitle.innerHTML = responsedata[key].title;
            mainarticleleft.innerHTML = firstHalf + '-';
            mainarticleimage.src = responsedata[key].imagelink;
            mainarticleright.innerHTML = '-' + secondHalf;

        }
    //article 1 left
    var article1lefttitle = document.getElementById('article-1-left-title');
    var article1lefttext = document.getElementById('article-1-left-text');
    var article1leftimage = document.getElementById('article-1-left-image-file');
    if (key == 'articleleft1') {
        article1lefttitle.innerHTML = responsedata[key].title;
        article1lefttext.innerHTML = responsedata[key].article;
        article1leftimage.src = responsedata[key].imagelink;
    }
    // article 2 left
    var article2lefttitle = document.getElementById('article-2-left-title');
    var article2lefttext = document.getElementById('article-2-left-text');
    var article2leftimage = document.getElementById('article-2-left-image-file');
    if (key == 'articleleft2') {
        article2lefttitle.innerHTML = responsedata[key].title;
        article2lefttext.innerHTML = responsedata[key].article;
        article2leftimage.src = responsedata[key].imagelink;

    }
    // article 3 left
    var article3lefttitle = document.getElementById('article-3-left-title');
    var article3lefttext = document.getElementById('article-3-left-text');
    var article3leftimage = document.getElementById('article-3-left-image-file');
    if (key == 'articleleft3') {
        article3lefttitle.innerHTML = responsedata[key].title;
        article3lefttext.innerHTML = responsedata[key].article;
        article3leftimage.src = responsedata[key].imagelink;

    }
    // article 1 right
    var article1righttitle = document.getElementById('article-1-right-title');
    var article1righttext = document.getElementById('article-1-right-text');
    var article1rightimage = document.getElementById('article-1-right-image-file');
    if (key == 'articleright1') {
        article1righttitle.innerHTML = responsedata[key].title;
        article1righttext.innerHTML = responsedata[key].article;
        article1rightimage.src = responsedata[key].imagelink;
    }
    // article 2 right
    var article2righttitle = document.getElementById('article-2-right-title');
    var article2righttext = document.getElementById('article-2-right-text');
    var article2rightimage = document.getElementById('article-2-right-image-file');
    if (key == 'articleright2') {
        article2righttitle.innerHTML = responsedata[key].title;
        article2righttext.innerHTML = responsedata[key].article;
        article2rightimage.src = responsedata[key].imagelink;
    }
    // article 3 right
    var article3righttitle = document.getElementById('article-3-right-title');
    var article3righttext = document.getElementById('article-3-right-text');
    var article3rightimage = document.getElementById('article-3-right-image-file');
    if (key == 'articleright3') {
        article3righttitle.innerHTML = responsedata[key].title;
        article3righttext.innerHTML = responsedata[key].article;
        article3rightimage.src = responsedata[key].imagelink;
    }
}
    })
var darkmode = false;
var darkmodebtn = document.getElementById('darkmode');
darkmodebtn.addEventListener('click', function () {
    if (!darkmode) {
    document.body.style.backgroundColor = 'rgb(49,52,62)';
    document.body.style.color = 'white';
    darkmode = true;
    }
    else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        darkmode = false;
    }
});


fetch(link + '/viewercount', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})
.then(response => response.text())
.then(data => {
    var viewerbox = document.getElementById('viewerbox');
    const responseData = JSON.parse(data);
    viewerbox.style.textAlign = 'center';
    viewerbox.innerHTML = responseData + ' people have visited this website.';
})

Notification.requestPermission().then(function(permission) {
    if (permission === "granted") {
      console.log("User granted permission to receive notifications.");

    } else {
      console.log("User denied permission to receive notifications.");
    }
  });
