// from data.js
var tableData = data;

// YOUR CODE HERE!
var filter_btn = d3.select("#filter-btn");
var form = d3.select("#form");

filter_btn.on("click", click_filter);
form.on("submit", click_filter);


function click_filter() {

    if (d3.event) {
        d3.event.preventDefault();
    }


    var inputValue = d3.select("#datetime").node().value;

    filtered_table = [];
    var i = 0;
    for (i = 0; i < tableData.length; i++) {
        let site = tableData[i];
        if (Date.parse(site.datetime) === Date.parse(inputValue)) {
            filtered_table.push(site);
        }
    }


    if (filtered_table.length === 0) {
        filtered_table = tableData;
        alert('No sightings on that day. Try dates between 01/01/2010 and 01/13/2010.');
    }
    console.log(filtered_table.length);
    createHTML(filtered_table);
}

function createHTML(filtered_table) {
    //remove child elements
    //$('#data').empty();
    console.log('hi');

    console.log(filtered_table.length);
    var tbody = d3.select("tbody");
    tbody.selectAll('tr').remove();

    var row = [];
    var cell = [];
    filtered_table.forEach((filtered_table) => {
        var row = tbody.append("tr");
        Object.entries(filtered_table).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}

function init() {
    createHTML(tableData);
}


init();