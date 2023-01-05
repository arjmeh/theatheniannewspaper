const link = 'https://arjmeh.pythonanywhere.com/'
function submit() {
    var articletype = document.getElementById('selector').value;
    var imagelink  = document.getElementById('imagelink').value;
    var article = document.getElementById('article').value;
    var title = document.getElementById('title').value;
    console.log(articletype);
    console.log(imagelink);
    console.log(article);

    fetch(link + 'post/', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': 'ht',
        },
        body: JSON.stringify({[articletype]: {
            title: title,
            articletype: articletype,
            imagelink: imagelink,
            article: article
        }})

    })

}