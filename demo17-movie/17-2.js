const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)
// 异步请求

async function getMovies(url) {
    const res = await fetch(url)
    
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies){
    // showMovies利用插值语法将获取到的数据按规则展示
    movies.forEach(movie => {
        // for(var i=0;i<movies.length;i++){
            
        // }
        var title = movie.title;
        var poster_path = movie.poster_path;
        var overview = movie.overview;
        var showmovie = document.createElement("div");
        showmovie.classList.add("movie");
        showmovie.innerHTML = `
        <img src="${IMG_PATH+poster_path}" alt="${title}">
        <div class="info">
            <h3>${title}</h3>
        </div>
        <div class="overview">
            <h3></h3>
            ${overview}
        </div>
        `
        // console.log(movie[1])
        main.appendChild(showmovie)
    });
}