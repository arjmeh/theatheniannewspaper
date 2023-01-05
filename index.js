const link = 'https://arjmeh.pythonanywhere.com'

fetch(link + '/get', {mode: 'cors'})
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


    // const link = 'http://127.0.0.1:5000'

    // fetch(link + '/get', {method: 'GET', mode: 'cors'})
    // .then(response => response.text())
    //     .then(data => {
    //     const responsedata = JSON.parse(data);
    //     console.log(responsedata);
    //     // main article
    //     var mainarticletitle = document.getElementById('main-article-title');
    //     var mainarticleleft = document.getElementById('main-article-left-text');
    //     var mainarticleimage = document.getElementById('main-article-image');
    //     var mainarticleright = document.getElementById('main-article-right-text');
        
    //     for (const key in responsedata) {
    //         if (key == 'mainarticle') {
    //             const fullarticle = responsedata[key].article;
    //             const half = fullarticle.length / 2;  // Get the index of the middle character
    
    //             const firstHalf = fullarticle.substring(0, half);  // Get the first half of the string
    //             const secondHalf = fullarticle.substr(half);
    //             mainarticletitle.innerHTML = responsedata[key].title;
    //             mainarticleleft.innerHTML = firstHalf + '-';
    //             mainarticleimage.src = responsedata[key].imagelink;
    //             mainarticleright.innerHTML = '-' + secondHalf;
    
    //         }
    //     //article 1 left
    //     var article1lefttitle = document.getElementById('article-1-left-title');
    //     var article1lefttext = document.getElementById('article-1-left-text');
    //     var article1leftimage = document.getElementById('article-1-left-image-file');
    //     if (key == 'articleleft1') {
    //         article1lefttitle.innerHTML = responsedata[key].title;
    //         article1lefttext.innerHTML = responsedata[key].article;
    //         article1leftimage.src = responsedata[key].imagelink;
    //     }
    //     // article 2 left
    //     var article2lefttitle = document.getElementById('article-2-left-title');
    //     var article2lefttext = document.getElementById('article-2-left-text');
    //     var article2leftimage = document.getElementById('article-2-left-image-file');
    //     if (key == 'articleleft2') {
    //         article2lefttitle.innerHTML = responsedata[key].title;
    //         article2lefttext.innerHTML = responsedata[key].article;
    //         article2leftimage.src = responsedata[key].imagelink;
    
    //     }
    //     // article 3 left
    //     var article3lefttitle = document.getElementById('article-3-left-title');
    //     var article3lefttext = document.getElementById('article-3-left-text');
    //     var article3leftimage = document.getElementById('article-3-left-image-file');
    //     if (key == 'articleleft3') {
    //         article3lefttitle.innerHTML = responsedata[key].title;
    //         article3lefttext.innerHTML = responsedata[key].article;
    //         article3leftimage.src = responsedata[key].imagelink;
    
    //     }
    //     // article 1 right
    //     var article1righttitle = document.getElementById('article-1-right-title');
    //     var article1righttext = document.getElementById('article-1-right-text');
    //     var article1rightimage = document.getElementById('article-1-right-image-file');
    //     if (key == 'articleright1') {
    //         article1righttitle.innerHTML = responsedata[key].title;
    //         article1righttext.innerHTML = responsedata[key].article;
    //         article1rightimage.src = responsedata[key].imagelink;
    //     }
    //     // article 2 right
    //     var article2righttitle = document.getElementById('article-2-right-title');
    //     var article2righttext = document.getElementById('article-2-right-text');
    //     var article2rightimage = document.getElementById('article-2-right-image-file');
    //     if (key == 'articleright2') {
    //         article2righttitle.innerHTML = responsedata[key].title;
    //         article2righttext.innerHTML = responsedata[key].article;
    //         article2rightimage.src = responsedata[key].imagelink;
    //     }
    //     // article 3 right
    //     var article3righttitle = document.getElementById('article-3-right-title');
    //     var article3righttext = document.getElementById('article-3-right-text');
    //     var article3rightimage = document.getElementById('article-3-right-image-file');
    //     if (key == 'articleright3') {
    //         article3righttitle.innerHTML = responsedata[key].title;
    //         article3righttext.innerHTML = responsedata[key].article;
    //         article3rightimage.src = responsedata[key].imagelink;
    //     }
    // }
    //     })