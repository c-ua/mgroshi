$(document).ready(function(){

    // iLinks
    //    $(document).one("click",".iLinks", function(){
    //        if($(this).data('url')){
    //            window.location.href = $(this).data('url');
    //       }
    //    });

    //

	$('#terms').change(function() {
	    state = $(this).prop('checked');
	    if(state) {
	        $('#submitOffline').prop('disabled', false);

	    }else {
	        $('#submitOffline').prop('disabled', true);
	    }
	});




        $('select').on('change', function () {
           $(this).trigger('blur');
       });
$("#contactPhone").mask("+38(099)-999-99-99",{autoclear:false,placeholder:"_"});

$("#contactPhone, #contactPhone2").mask("+38(099)-999-99-99",{autoclear:false,placeholder:"_"});
$("#phoneHome, #reg_phoneHome").mask("+38(099)-999-99-99",{autoclear:false});
$("#smsPassword").mask("9999",{autoclear:false,placeholder:"_"});
//$("#date, #b_borrower_data14-js, #b_borrower_data15-js, #workStart").mask("99/99/9999");
//$.mask.definitions['b']='[а-яА-Яa-zA-Z]';
//$("#b_borrower_data12-js").mask("bb");
///$("#card").mask("?9999 9999 9999 9999",{autoclear:false,placeholder:""});

//$("#b_borrower_data7-js").mask("+38 (999) 999-99-99");
    //Фиксированное меню
    if($(window).width()>=1100) {
        $(window).scroll(function () {
            var top = jQuery(document).scrollTop();
            if (top <= 0){
               jQuery("#bg_header").removeClass('fixed');
             //  jQuery("body").css('padding-top', '0px');
           }
            else {
               jQuery("#bg_header").addClass('fixed');
               //jQuery("body").css('padding-top', '87px');
            }
        });
    }



    //плавный скролл
//    $(".b_text_title .rekviz").click(function () {
//        var destination = $("#rekvizit").offset().top - 90;
//        $('html,body').animate( { scrollTop: destination }, 1100 );
//        return false;
//    });


//    var hash = window.location.hash;
//    if (hash) {
//        var destination = $(hash).offset().top - 90;
//        $('html,body').animate( { scrollTop: destination }, 1100 );
//    }




//$(".b_get_a_credit-img_block a").click(function () {
//$("html,body").scrollTop("-90");
//var hash = window.location.hash;
//var destination = $("#cart").offset().top - 90;
//hash &&  $("a.anchor[href='"+hash+"']").click();
//});

  //АНИМАЦИЯ ПРИ СКРОЛЛЕ
  var $animation_elements = $('.animation-element');
  var $window = $(window);

  function check_if_in_view() {
  	var window_height = $window.height();
  	var window_top_position = $window.scrollTop();
  	var window_bottom_position = (window_top_position + window_height);

  	$.each($animation_elements, function() {
  		var $element = $(this);
  		var element_height = $element.outerHeight();
  		var element_top_position = $element.offset().top;
  		var element_bottom_position = (element_top_position + element_height);

  		//check to see if this current container is within viewport
  		if ((element_top_position <= window_bottom_position)) {
  			$element.addClass('in-view');
  		} else {
  			$element.removeClass('in-view');
  		}
  	});
  }
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');



});
$(document).on('af_complete', function(event, response) {
            var form = response.form;

            if (form.attr('id') == 'b_call_data-form') {
                form.hide();
                $('.modalCall_success').removeClass('hide');
		        setTimeout(function(){
		            location.reload();
	            },6000);
            }
            else {
                console.log(response)
            }
        });
