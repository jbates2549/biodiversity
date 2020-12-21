// Sort the data array using the greekSearchResults value
data.sort(function(a, b) {
  return parseFloat(b.bioSearchResults) - parseFloat(a.bioSearchResults);
});

// Slice the first 10 objects for plotting
data = data.slice(0, 10);

// Reverse the array due to Plotly's defaults
data = data.reverse();

// Trace1 for the Greek Data
var trace1 = {
  x: data.map(row => row.bioSearchResults),
  y: data.map(row => row.bioName),
  text: data.map(row => row.bioName),
  name: "Samples",
  type: "bar",
  orientation: "h"
};

// data
var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  title: "Biodiversity search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
