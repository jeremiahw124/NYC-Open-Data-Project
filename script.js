//Data Source: https://data.cityofnewyork.us/Transportation/Open-Restaurants-Inspections/4dx7-axux

let data, info, leftPanel, mapObj; //global variables

async function init(){
  let link = "restaurants.json"; //https://data.cityofnewyork.us/resource/4dx7-axux.json?$limit=100";
  //Challenge 5: Get the data using the API link and analyze it
  info = await fetch(link);
  data = await info.json();
  
  let leftPanel = get("leftPanel");
  let build = "";

  //Challenge 6: Build info cards with button to show map
  for(let i = 0; i < data.length; i+=1) {
    let restaurant = data[i];
    build += card(restaurant);
  }

  //Challenge 7: Display cards in the div with id "leftPanel"
  leftPanel.innerHTML = build;
}

//Challenge 8: Create a function filterByBoro() that retrieves the borough from the user via text input, filters the data and generates cards for this subset of the data.
function filterByBoro(){
  let boro = get("borough").value;
  leftPanel = get("leftPanel");
  let build = "";
  
  for(let i = 0; i < data.length; i++){
    let restaurant = data[i];
    if(restaurant.borough == boro){
        build += card(restaurant);
      }
  }
  leftPanel.innerHTML = build; 
}