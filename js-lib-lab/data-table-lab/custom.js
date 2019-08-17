/**
 * Instructions
 * 
 * Create an html page with a table filled with employee data
 * Add the necessary DataTable scripts to the html page
 * Create the basic statement in the jQuery block that turns the html page into a data table. 
 * Use the column headers to sort the records and notice the reordering.
 * 
 * Create a new html page with an empty table
 * Create a JavaScript array in the script block to represent some JSON employees data 
 * In the DataTable call, use the data option to load the data from the variable.
 * Add additional settings in each column to specify a title.
 * Finally, after the titles are in place, notice that they are centered.
 * Create your own class and apply that style to each column 
 * using the additional className setting of columns.
 */

$(document).ready(function() {

  /* ---- BASE TABLE ---- */

  const employees = [
    {
      "name": "Jerry Nixon",
      "position": "System Architect",
      "salary": "$95,000",
      "start_date": "2010/03/19",
      "office": "Scottsdale"
    },
    {
      "name": "George Parker", 
      "position": "Director",
      "salary": "$123,000",
      "start_date": "2002/01/19",
      "office": "Phoenix"
    },
    {
      "name": "Cindy Stackhouse",
      "position": "Development Manager",
      "salary": "$93,000",
      "start_date": "2016/04/25",
      "office": "Dallas"
    }
  ];

  $("#base_table").DataTable({
    data: employees,
    columnDefs: [
      { className: "la", "targets": "_all"},
    ],
    columns: [
      { title: "Name", data: "name"},
      { title: "Position", data: "position" },
      { title: "Salary", data: "salary" },
      { title: "Start date", data: "start_date" },
      { title: "Office", data: "office" }
    ]
  });

  /* ---- PERSON TABLE ---- */

  const table = $("#person_table").DataTable({
      columns: [
          { data: "ID" },
          { data: "firstName" },
          { data: "lastName" },
          { data: "cell" },
          { data: "zipCode" },
          { data: "state" }
      ]
  });
});