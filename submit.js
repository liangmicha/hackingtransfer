$(document).ready(function() {
  $('.submit-button').click(function() {
    console.log("button clicked");
    $.ajax({
      url: "https://ready2receive.herokuapp.com/api",
      type: "POST",
      data: JSON.stringify({"id": document.getElementById("myText").value}),
      //dataType: "json",
      headers: {
        'Content-Type': 'application/json',
      },
      crossDomain: true
    }).done(function() {
      window.location = "confirm.html";
      console.log("AJAX POST request is finished.");
    }).fail(function() {
      window.location = "confirm.html";
      console.log("AJAX POST request failed :(");
    });
  });
});
