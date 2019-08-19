$( document ).ready(function() {
  $("#colorChanger").on("click", function(e) {
    if(e.target.tagName == "BUTTON") {
      // Get the target button's current btn-* class name using a regex
      const className = $(e.target).attr("class").match(/btn-(\w*)/)[1];
      $(".table-x .row > div")
        .removeClass(function() {
          // Remove all Bootstrap background and text color classes from all columns using a regex 
          return $(this).attr("class").match(/bg-\w*/) + " " + $(this).attr("class").match(/text-\w*/);
        })
        .addClass(() => className == "warning" ? `bg-${className} text-dark` : `bg-${className} text-white`);
      $(".table-x .row p.x")
        .removeClass(function() {
          // Remove the text class from the X column
          return $(this).attr("class").match(/text-\w*/);
        })
        // Add the same text color to the X column as the selected button's bg-color
        .addClass(`text-${className}`);
    }
  });
});