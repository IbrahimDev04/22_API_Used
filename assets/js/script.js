
fetch('https://api.tvmaze.com/shows')
    .then( res => res.json())
    .then( a => {
        getMovie(a);
    })

function SortingElement(data){

    let sortOrder = document.getElementById("sort-choise").value;
    console.log(sortOrder)
    fetch('https://api.tvmaze.com/shows')
    .then( res => {return res.json()})
    .then( data => {
        if (sortOrder === "to-low"){
            data.sort((a,b) => b.rating.average - a.rating.average)
            getMovie(data)
        }
        else if(sortOrder === "to-high"){
            data.sort((a,b) => a.rating.average - b.rating.average)
            getMovie(data)
        }
        else if(sortOrder === "rating"){
            getMovie()
        }
    })



}

window.onkeyup = keyup;
var inputTextValue;
var queryUrl
function keyup(e) {
    inputTextValue = e.target.value;
  
    if (e.keyCode == 13) {
        queryUrl = `https://api.tvmaze.com/search/shows?q=` + inputTextValue;
        fetch(queryUrl)
            .then(res => res.json())
            .then(data => getMovieSearching(data))

            var area = document.getElementById("movie-area")

            function getMovieSearching(movies){
                area.innerHTML = ""
                movies.forEach(moviess => {

                    
                    if(moviess.show.image == null){
                        return;
                    }

                    if(moviess.show.rating.average == null){
                        return;
                   }
                    
                    area.innerHTML += 
                    `
                             <div class="col-md-3 mg-bottom">
                                <div class="card position-relative">
                                <span style="z-index:4; left: 30px; top: 30px; border: none !important; border-radius: 10px; color: white;" class="position-absolute translate-middle p-2 bg-primary border ">
                                <span>${moviess.show.rating.average}</span>
                            </span>
                                    <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                    <img src="${moviess.show.image.medium}" class="img-fluid img-size width: 320px; height: 450px;"/>
                                    <a href="detail.html?${moviess.show.id}">
                                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                    </a>
                                    </div>
                                    <div class="card-body max-lenght width" style="background-color: rgb(207, 121, 29);">
                                    <h5 class="card-title"><b>${moviess.show.name}</b></h5>
                                    <p class="card-text max-lenght">${moviess.show.summary}</p>
                                    <a href="detail.html?${moviess.show.id}" class="btn btn-primary" data-mdb-ripple-init>Button</a>
                                    </div>
                                </div>
                            </div>
                    `
                });
            }
        
    }
  }
    


var area = document.getElementById("movie-area")





function getMovie(movies){
    area.innerHTML = ""
    movies.forEach(moviess => {

       if(moviess.rating.average == null){
            return;
       }
        
        area.innerHTML += 
        `
                 <div class="col-md-3 mg-bottom">
                    <div class="card position-relative">
                    <span style="z-index:4; left: 30px; top: 30px; border: none !important; border-radius: 10px; color: white;" class="position-absolute translate-middle p-2 bg-primary border ">
                        <span>${moviess.rating.average}</span>
                    </span>
                        <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                        <img src="${moviess.image.medium}" class="img-fluid img-size width: 320px; height: 450px;"/>
                        <a href="detail.html?${moviess.id}">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                        </a>
                        </div>
                        <div class="card-body max-lenght width" style="background-color: rgb(207, 121, 29);">
                        <h5 class="card-title"><b>${moviess.name}</b></h5>
                        <p class="card-text max-lenght">${moviess.rating.average}</p>
                        <a href="detail.html?${moviess.id}" class="btn btn-primary" data-mdb-ripple-init>Button</a>
                        </div>
                    </div>
                </div>
        `
    });
}






// fetch('https://api.tvmaze.com/shows')
//     .then( res => res.json())
//     .then( a => {
//         getMovie(a);
//     })


// window.onkeyup = keyup;
// var inputTextValue;
// var queryUrl
// function keyup(e) {
//     inputTextValue = e.target.value;
  
//     if (e.keyCode == 13) {
//         queryUrl = `https://api.tvmaze.com/search/shows?q=` + inputTextValue;
//         fetch(queryUrl)
//             .then(res => res.json())
//             .then(data => getMovieSearching(data))

//             var area = document.getElementById("movie-area")

//             function getMovieSearching(movies){
//                 area.innerHTML = ""
//                 movies.forEach(moviess => {

                    
//                     if(moviess.show.image == null){
//                         return;
//                     }
                    
//                     area.innerHTML += 
//                     `
//                              <div class="col-md-3 mg-bottom">
//                                 <div class="card">
//                                     <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
//                                     <img src="${moviess.show.image.medium}" class="img-fluid img-size width: 320px; height: 450px;"/>
//                                     <a href="">
//                                         <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
//                                     </a>
//                                     </div>
//                                     <div class="card-body max-lenght width" style="background-color: rgb(207, 121, 29);">
//                                     <h5 class="card-title"><b>${moviess.show.name}</b></h5>
//                                     <p class="card-text max-lenght">${moviess.show.summary}</p>
//                                     <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
//                                     </div>
//                                 </div>
//                             </div>
//                     `
//                 });
//             }
        
//     }
//   }
    


// var area = document.getElementById("movie-area")





// function getMovie(movies){

//     movies.forEach(moviess => {
        
//         area.innerHTML += 
//         `
//                  <div class="col-md-3 mg-bottom">
//                     <div class="card">
//                         <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
//                         <img src="${moviess.image.medium}" class="img-fluid img-size width: 320px; height: 450px;"/>
//                         <a href="${moviess.url}">
//                             <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
//                         </a>
//                         </div>
//                         <div class="card-body max-lenght width" style="background-color: rgb(207, 121, 29);">
//                         <h5 class="card-title"><b>${moviess.name}</b></h5>
//                         <p class="card-text max-lenght">${moviess.summary}</p>
//                         <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
//                         </div>
//                     </div>
//                 </div>
//         `
//     });
// }



