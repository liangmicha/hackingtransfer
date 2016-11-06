$(document).ready(function() {

  $('.import_ehr').click(function() {
    $('.dc_check_image').show();
    $('.import_ehr').addClass('button-press');
    
  });


  $('.btn-dc').click(function(){
  	$('.ouput-dc').show();
  })
  $('.btn-med').click(function(){
  	$('.ouput-med').show();
  })

  $('.btn-lab').click(function(){
  	$('.ouput-lab').show();
  })

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
