//console.log("this is meenu");

function reqListener() {
    const countryArr = JSON.parse(this.responseText);
    console.log(countryArr);
    //for(let country of countryArr){
        //console.table(country.name.common);
        for(let i=0;i<=countryArr.length-1;i++)
            {
                //console.table(countryArr[i].flags.svg);
                console.log(countryArr[i].name.common);
                console.log(countryArr[i].region);
                console.log(countryArr[i].subregion);
                console.log(countryArr[i].population);
                //console.log(countryArr[i].timezones);
            }
        

    //}

    
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();