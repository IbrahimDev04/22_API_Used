fetch('https://api.tvmaze.com/shows')
    .then( res => res.json())
    .then( a => {
        getMovie(a);
    })


var area = document.getElementById("movie-area")


var pagerSize = 2;
var pageLast = 0;       

load(emp.employees, pageLast, pagerSize);

$('#loader').click(function(){
   load(emp.employees, pageLast, pagerSize);
});

function load(data,start,limit){  
  var employees = []; 
  for(var i = start; i < start+limit; i++) {
      var object = data[i];
      var newElement = $('<p/>').attr("id", "emp"+i).text(object.firstName+' '+object.lastName)
      employees.push(newElement);
  }
  $('.js-load').append(employees);
  $('.js-load').append("<hr>");
  pageLast+=limit;
}


function getMovie(movies,){

    movies.forEach(moviess => {
        
        area.innerHTML += 
        `
                 <div class="col-md-3 mg-bottom">
                    <div class="card">
                        <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                        <img src="${moviess.image.medium}" class="img-fluid img-size width: 320px; height: 450px;"/>
                        <a href="${moviess.url}">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                        </a>
                        </div>
                        <div class="card-body max-lenght width" style="background-color: rgb(207, 121, 29);">
                        <h5 class="card-title"><b>${moviess.name}</b></h5>
                        <p class="card-text max-lenght">${moviess.summary} IMDB : ${moviess.externals.imdb}</p>
                        <a href="${moviess.url}" class="btn btn-primary" data-mdb-ripple-init>About</a>
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