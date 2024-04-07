async function restapi(){
    try{
    data = fetch('https://restcountries.com/v3.1/all')
      out = await data;
       prom = out.json();
       final = await prom;
       parent  = document.querySelector('.container')
      parent1 = document.querySelector('.row')
       final.forEach(element => {
  
     
       parent1.innerHTML+=`
            <div id="cardDetails" class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div class="card h-100">
             <div class="card-header">
             <h5 class="card-title">${element.name.common}</h5>
            </div><br>
            <div class="card-body">  
            <img src="${element.flags.png}" class="card-img-top">
           <div class="card-text">
           <ul class="list-group">
           <li class="list-group-item card-text"><b>Capital:${element.capital}</li>
           <li class="list-group-item card-text"><b>Region:${element.region}</li>
           <li class="list-group-item card-text"><b>Country Code:${element.cca3}</li>
           
         </div>       
  
           <button class="btn btn-primary" target="_blank" value="${element.name.common}" id="demo">Click for Weather</button>
           
        
            </div>
          </div>
        
        `
        parent.append(parent1)
        
        let btn = document.querySelectorAll(".btn");
        btn.forEach((ele)=>{
          ele.addEventListener("click",()=>{
            let value = ele.value
            console.log(value)
            async function weather(){
              let rest1 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ele.value}&APPID=ae6e6a13a47c0114c86e27f6fb10594b`)
              let rest2 = await rest1
              let rest3 = rest2.json()
              let rest4 = await rest3
  
              console.log(res1)
              ele.innerHTML= `<h5>weather: ${rest4.weather[0].description}<br>Temp: ${rest4.main.temp}<br>Pressure: ${res1.main.pressure}<br>
              lon:${rest4.coord.lon}<br>lat${rest4.coord.lat}</h5>`
              console.log(rest4.weather[0].description)
              console.log(rest4.main.temp)
              console.log(rest4.main.pressure)   
              console.log(rest4.coord.lon)
              console.log(rest4.coord.lat)
            }
            weather();
          })
        })
       });
       
      }
       catch(error){
        console.log(error)
       }

  }
  restapi()