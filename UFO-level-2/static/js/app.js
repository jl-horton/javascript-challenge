// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");
console.log(data);

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = tbody.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");


button.on("click", function(event) {
    tbody.html("");

    // Select the input date, state, shape and get the raw HTML nodes
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    var cityInput = d3.select("#city").property("value");
    var stateInput = d3.select("#state").property("value");
    var countryInput = d3.select("#country").property("value");
    var shapeInput = d3.select("#shape").property("value"); 
    console.log(cityInput)
    
    // Filter Data with datetime equal to input value
    var filteredData = tableData;
    if (inputValue){
        filteredData = filteredData.filter(row => row.datetime === inputValue);
    }
    if (cityInput){
        filteredData = filteredData.filter(row => row.city === cityInput);
    }
    if (stateInput){
        filteredData = filteredData.filter(row => row.state === stateInput);
    }
    if (countryInput){
        filteredData = filteredData.filter(row => row.country === countryInput);
    }
    if (shapeInput){
        filteredData = filteredData.filter(row => row.shape === shapeInput);
    }

    filteredData.forEach(function(dateData){
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(dateData).forEach(function([key, value]) {
        // console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});
