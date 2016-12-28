$(document).ready(function() {

    $('.discharge-summary-wrapper').click(function() {
	$('.discharge-summary-text').show();
    });
    
    $('.labs-wrapper').click(function() {
	$('.labs-graph').show();
    });

});

function myfunction() {
    var obj = document.getElementById("doctoradd");
    console.log(obj.value);
    if (obj.selectedIndex > 0) buttonadd(obj.value);
}

console.log('loaded');

function buttonadd(namedoctor) {
    var btn = document.createElement("BUTTON");
    btn.className += "btn btn-info";
    btn.innerHTML = namedoctor;
    document.getElementById('doctors').appendChild(btn);
}
