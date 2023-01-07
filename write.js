const link = 'https://atnewsbackend.herokuapp.com/'

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


function submit() {
    var articletype = document.getElementById('selector').value;
    var imagelink  = document.getElementById('imagelink').value;
    var article = document.getElementById('article').value;
    var title = document.getElementById('title').value;
    var likes = 0;
    console.log(articletype);
    console.log(imagelink);
    console.log(article);

    fetch(link + 'post', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': 'https://theatheniannewspaper.netlify.app',
        },
        body: JSON.stringify({[articletype]: {
            title: title,
            articletype: articletype,
            imagelink: imagelink,
            article: article,
            likes: likes
        }})

    })
    if (Notification.permission == 'granted') {
        var firstFiveWords = article.substr(0, article.indexOf(" ", 40));
        var notification = new Notification(title, {
            body: firstFiveWords + "... Read More",
            icon: imagelink
          });
            
    }

      

}