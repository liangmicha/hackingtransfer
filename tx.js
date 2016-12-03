var ids = new Set();
var imported = false;

$(document).ready(function() {
    var count = 0;
    $('.color-change').click(function() {
	if (imported) {
	    $(this).css('background-color', '#006600');
	    $(this).css('color', '#FFFFFF');      
	    $(this).find('.checkbox-icon').show();
	    ids.add($(this).attr('id'));
	} else {
	    alert("Please import data!");
	}
	

    if (ids.size >= 4) {
      $('.submit-button').css('background-color', '#006600')
    }
  })

    $('.import-button').click(function(){
	imported = true;
  	$('.output-dc').show();
    $('.dc_check_image').show();
    $('.output-med').show();
    $('.output-lab').show();
  });

  $('.radio-inline').click(function(event) {
    event.stopPropagation();
  });
  // $('.labs-wrapper').click(function() {
  //   $('.labs-graph').show();
  // });

});

//   	function dc_summary_check() {
//     document.getElementById("dc_summary_box").checked = true;
// 	}

// 	function dc_summary_uncheck() {
// 	    document.getElementById("dc_summary_box").checked = false;
// 		}

// 	function labs_check() {
//     document.getElementById("labs_box").checked = true;
// 	}

// 	function labs_uncheck() {
// 	    document.getElementById("labs_box").checked = false;
// 		}

// 	function images_check() {
//     document.getElementById("images_box").checked = true;
// 	}

// 	function images_uncheck() {
// 	    document.getElementById("images_box").checked = false;
// 		}

// 	function medication_check() {
//     document.getElementById("medication_box").checked = true;
// 	}

// 	function medication_uncheck() {
// 	    document.getElementById("medication").checked = false;
// 	}


// });
