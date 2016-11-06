$(document).ready(function() {
  console.log("oman");
  $('.submit-button').click(function() {
    console.log("button clicked");
    $.ajax({
      url: "http://localhost:3772/api",
      type: "POST",
      data: JSON.stringify({"id": 1}),
      //dataType: "json",
      headers: {
        'Content-Type': 'application/json',
      },
      crossDomain: true
    }).done(function() {
      console.log("AJAX POST request is finished.");
    }).fail(function() {
      console.log("AJAX POST request failed :(");
    });
  });
});
