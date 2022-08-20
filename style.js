function Covid() {
    var searchText = document.getElementById("search").value;

    fetch(`https://api.covid19api.com/country/${searchText}`)
    .then (res => res.json() )
    .then (data => display(data) );


    document.getElementById("flex-container").textContent ='';
    var vanish = document.getElementById("image");
    if( vanish.style.display === "none") {
      vanish.style.display = 'block';
    } else {
      vanish.style.display = 'none';
    }
    
}

function display(data) {
    var content = document.getElementById("flex-container")
    for (var i=0; i<data.length; i++){
        var newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="col row-cols-1 row-cols-m-3 g-4">
        <div class="col" id="col">
          <div class="card h-100">
          <div class="card-body">
              <h3 class="card-title">${data[i].Country}</h3>
              <p class="card-text"><h4>Information:</h4><b>ID: </b>${data[i].ID}<br/><b>Countrycode: </b>"<b>${data[i].CountryCode}</b>"<br/><b>Lat: </b>${data[i].Lat}<br/><b>Lon: </b>${data[i].Lon}<br/><b>Affected: </b>${data[i].Confirmed}<br/><b>Death: </b>${data[i].Deaths}<br/><b>Recovered: </b>${data[i].Recovered}<br/><b>Active: </b>${data[i].Active}<br/><b>Date: </b>${data[i].Date}
             </p>
             <center><button><a class="more" href="https://www.wikipedia.org">More Details</a></button></center>
            </div>
          </div>
        </div>
      </div> ` ;


      

      content.appendChild(newDiv);
    }
}