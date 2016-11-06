$(document).ready(function() {
  console.log("oman");
  $('.btn-outline-success').click(function() {
    console.log("button clicked");
    $.ajax({
      url: "https://localhost:3772/api",
      type: "POST",
      data: {id: 1},
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
