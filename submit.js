$(document).ready(function() {
    $('.submit-button').click(function() {
	if (ids.size < 4) {
	    alert("To proceed, please sign off on all four pieces of information");
	    return;
	};
    console.log("button clicked");
    $.ajax({
      url: "/api",
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
