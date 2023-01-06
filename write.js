const link = 'https://atnewsbackend.herokuapp.com/'
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

}