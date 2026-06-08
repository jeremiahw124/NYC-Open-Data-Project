//Data Source: https://data.cityofnewyork.us/Transportation/Open-Restaurants-Inspections/4dx7-axux
//global variables
let data, info, output;

async function init(){
  let link = "restaurants.json"; //https://data.cityofnewyork.us/resource/4dx7-axux.json?$limit=200";
  info = await fetch(link);
  data = await info.json();
  console.log(data); 
}

function restaurantsByBorough(){
  //Variables to keep count of restaurants by borough
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;

  //Tallying the count of restaurants by borough
  for(let i = 0; i < data.length; i++){
    let restaurant = data[i];
    if(restaurant.borough == "Queens"){
      q++;
    }else if(restaurant.borough == "Manhattan"){
      m++;
    }else if(restaurant.borough == "Brooklyn"){
      bk++;
    }else if(restaurant.borough == "Bronx"){
      bx++;
    }else if(restaurant.borough == "Staten Island"){
      s++;
    }
  }

  //Creating data for chart (as array of arrays) with 1st position of array being label
  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ];

  //Retrieving chart type from user's selection of drop-down
  let chartType = get("chartType").value;  
  
  //Generate and display chart
  displayChart(chartData,"chart",chartType)
}

function restaurantsBySeating(){
  //Challenge: Create the same functionality as in the function restaurantsByVehicle() above, except you will be aggregating for the following vehicle types: 'Sedan', 'Station Wagon/Sport Utility Vehicle', 'Taxi', 'Bus', 'Motorcycle' and "Other".  "Other" isn't a vehicle type but simply meant to capture all other vehicles.

  //Variables to keep count of vehicles by type
  let s = 0, r = 0, b = 0, o = 0;

  //Tally the count of vehicles by type using decisions
  for( let i = 0; i < data.length; i++ ){
    if ( data[i].seatingchoice == "sidewalk" ) {
      s++;
    }else if ( data[i].seatingchoice == "roadway" ) {
      r++;
    }else if ( data[i].seatingchoice == "both" ) {
      b++;
    }else {
      o++;
    }
  }
  //Create data for chart (as array of arrays) with 1st position of array being label

  let chartData2 = [
    ["Sidewalk", s],
    ["Roadway", r],
    ["Both", b],
    ["Other", o]
  ];
  
  //Retrieve chart type from user's selection of drop-down
  let type = get("chartType").value;
  
  //Generate and display chart
  displayChart(chartData2, "chart", type);  
}