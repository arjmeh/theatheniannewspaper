const link = 'https://arjmeh.pythonanywhere.com/'
function submit() {
    var articletype = document.getElementById('selector').value;
    var imagelink  = document.getElementById('imagelink').value;
    var article = document.getElementById('article').value;
    var title = document.getElementById('title').value;
    console.log(articletype);
    console.log(imagelink);
    console.log(article);

    fetch(link + 'post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        },
        body: JSON.stringify({[articletype]: {
            title: title,
            articletype: articletype,
            imagelink: imagelink,
            article: article
        }})

    })

}