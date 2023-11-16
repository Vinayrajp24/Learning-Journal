const viewMoreBtn = document.getElementById('view-more')
const recentPostsBtn = document.getElementById('recent-posts-title')
const articleDetails = document.getElementById('main-article-details')
const moreContent = document.getElementById('more-content')
const mainArticle = document.getElementById('main-article')

viewMoreBtn.addEventListener("click", function(){
    articleDetails.style.position = 'static'
    mainArticle.style.padding = '1em'
    articleDetails.style.color = 'black'
    moreContent.classList.remove('disappear')
    recentPostsBtn.classList.remove('disappear')
    viewMoreBtn.classList.add('disappear')
})