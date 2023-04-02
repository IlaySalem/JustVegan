$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
    $(window).resize();
    
}); 
$(document).ready(function(){
	document.getElementById("submitButton").disabled = false;
	document.getElementById("submitButton2").disabled = false;
	document.getElementById("submitButton3").disabled = false;
	document.getElementById("submitButton4").disabled = false;
	var validName1 = false;
	var validName2 = false;
	var validAdress1 = false;
	var validAdress1 = false;
	var validIndex = false;
	var validEmail = false;
	var validPhone = false;
	var appendPrevent = false;
	var payChecked = false;
	var mini = 790;
	var middle = 1390;
	var big = 1990;
	var screenResize;
	if(screen.width>980){
		$('.grandDad').css('display','none');
	} else {
		$('.grandDad').css('display','block');
	}
	if(device.ipad() == true){
		$('#notificationPlatform').css('display','flex');
		console.log ('iPad');
	}
	if(device.iphone() == true){
		$('#notificationPlatform').css('display','flex');

		console.log ('iphone');
	}
	if(device.windows() == true){
		// $("#notification").css('opacity','1');
		$("#notificationPlatform").css('display','flex');
		console.log ('windows');
	}
	// else if(device.mobile() == true){
	// 	$('#notification').css('display','none');
	// 	console.log ('mobile');
	// }
	$(window).resize(function(){
		if(screen.width>980){
			$('.grandDad').css('display','none');
		} else if(screen.width<=980){
			$('.grandDad').css('display','block');
		} 
		if(screen.width<260){
			//$('.viewport').css('display','none');
			
			$('#notificationSize').css('display','flex');

		} else if(screen.width>=260){
			//$('.viewport').css('display','flex');
			
			$('#notificationSize').css('display','none');
		}


		// $(window).resize(function(){
		// if((screen.width+20)>=screen.height){
		// 	screenResize =(false, "Палундра!!!");
		// 	$("#product").val(screenResize);
		// 	console.log(screenResize, 'ширина:', screen.width, 'высота:', screen.height);
		// } else {
		// 	screenResize =(true, "Всё ок :)");
		// 	$("#product").val(screenResize);
		// 	console.log(screenResize, 'ширина:', screen.width , 'высота:', screen.height);
		// }

	});
	$('#order1').css('left','-(screen.width)*10');
    $('#order2').css('left','-(screen.width)*10');
    $('#order3').css('left','-(screen.width)*10');
	setTimeout(function(){
		$('#order1').animate({ left : 0 }, 600);
	}, 1500);
	setTimeout(function(){
		$('#order2').animate({ left : 0 }, 600);
	}, 1800);
	setTimeout(function(){
		$('#order3').animate({ left : 0 }, 600);
	}, 2100);

	$(window).scroll(function(){
		setTimeout(function(){
			$('.me').addClass("rotate");
		}, 400);
	});

//CustomSpinbox from Ilay Salem
	var y1 =0;
	var y2 =0;
	var y3 =0;
	function resultCount(){
		var z = y1+y2+y3;
		$('#ResultOrder').val("К оплате: "+ z + " руб.");
		$('#productResult').val(z + " руб.");
	};
	var x1=Number($("#prod1Order").val());
	$('#prodAdd1').click(function(){
		console.log(Number($("#prod1Order").val())+1);
		$("#prod1Order").val('  '+(x1+1));
		y1 =1;
		y1 = (x1+1)*mini;
		console.log(y1);
		$('.lalala').animate({ opacity : 1 }, 400);
		resultCount();
		
		return x1=x1+1,  y1;

	});
	$('#prodMin1').click(function(){
		if (x1<=0){
			$("#prod1Order").val('  '+(0));
			return x1 = 0;
		} else {
			console.log(Number($("#prod1Order").val())-1);
			$("#prod1Order").val('  '+(x1-1));
			y1 = (y1-mini);
			resultCount();
			console.log(y1);
			return x1=x1-1, y1;
			$('#OrderBtn').disabled = false;

		}
	}); 
		var x2=Number($("#prod2Order").val());
	$('#prodAdd2').click(function(){
		console.log(Number($("#prod2Order").val())+1);
		$("#prod2Order").val('  '+(x2+1));
		y2 =1;
		y2 = (x2+1)*middle;
		console.log(y2);
		$('.lalala').animate({ opacity : 1 }, 400);
		resultCount();
		return x2=x2+1, y2;
	});
	$('#prodMin2').click(function(){
		if (x2<=0){
			$("#prod2Order").val('  '+(0));
			return x2 = 0;
		} else {
			console.log(Number($("#prod2Order").val())-1);
			$("#prod2Order").val('  '+(x2-1));
			y2 = (y2-middle);
			resultCount();
			console.log(y2);
			return x2=x2-1, y2;
			$('#OrderBtn').disabled = false;
		}
	}); 
		var x3=Number($("#prod3Order").val());
	$('#prodAdd3').click(function(){
		console.log(Number($("#prod3Order").val())+1);
		$("#prod3Order").val('  '+(x3+1));
		y3 =1;
		y3 = (x3+1)*big;
		console.log(y3);
		$('.lalala').animate({ opacity : 1 }, 400);
		resultCount();
		return x3=x3+1, y3;
	});
	$('#prodMin3').click(function(){
		if (x3<=0){
			$("#prod3Order").val('  '+(0));
			return x3 = 0;
		} else {
			console.log(Number($("#prod3Order").val())-1);
			$("#prod3Order").val('  '+(x3-1));
			y3 = (y3-big);
			resultCount();
			console.log(y3);
			return x3=x3-1, y3;
			$('#OrderBtn').disabled = false;
		}
	}); 

$('#OrderBtn').click(function(){
	var xMajor = (x1+x2+x3);
	if (xMajor == 0 || xMajor==""){
		$('.lalala').animate({ opacity : 1 }, 400);
		$('#ResultOrder').val("Тебе ничего не понравилось? :(");
		$('#OrderBtn').disabled = true;
	} else{
		$("#product1").val($("#prod1Order").val());
		$("#product2").val($("#prod2Order").val());
		$("#product3").val($("#prod3Order").val());
		$('#OrderBtn').disabled = false;
		$('.OrderPage').animate({ opacity : 0 }, 400);
		setTimeout(function(){
			$('.OrderPage').hide();
			$('.step1').css('display','flex');
			$('.step1').animate({ opacity : 1 }, 400);
		}, 400);
	}
});
	var ff=false;
	function zy(){
			console.log('nice');
	};
	if (ff==true){
		zy();
		return ff=false
	};
	$("#fio2").onkeyup = function zy1(){
		console.log('sdf');
		return ff=true
	};
	$("#myForm").submit(function(event){
		event.preventDefault();
	

		var name1 = $("#fio1").val();
		var name2 = $("#fio2").val();
		var adress1 = $("#adress1").val();
		var adress2 = $("#adress2").val();
		var index = $("#index").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var sber = $("#sber").val();
		var tink = $("#tink").val();
		var yan = $("#yan").val();
		var qiwi = $("#qiwi").val();
		var regFIO1 =/^([а-яё]+)|([a-z']+)$/ig ; //var regFIO =/^([а-яё]+ [а-яё]+ [а-яё]+)|([a-z']+ [a-z']+ [a-z']+)$/ig ; 
		var regFIO2 =/^([а-яё]+)|([a-z']+)$/ig ;
		var regEmail = /^([а-яА-ЯёЁa-zA-Z0-9_-]+\.)*[а-яА-ЯёЁa-zA-Z0-9_-]+@[а-яА-ЯёЁa-zA-Z0-9_-]+(\.[а-яА-ЯёЁa-zA-Z0-9_-]+)*\.[a-zа-я]{2,6}$/ig; ///^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/ig;
		var regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g;
		
		// $(".#fio2").keyup(){

		// }
		// if(name1 == ""|| name1==" " ||(regFIO1.test(name1))==false) {  
		// 	$(".nameBlock1").removeClass("has-success").addClass("has-error");	
		// 	$(".nameBlock1").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
		// 	$(".nameBlock1 .glyphicon-ok").remove();
		// 	validName1 = false;
			
		// } else  {
		// 	$(".nameBlock1").removeClass("has-error").addClass("has-success");	
		// 	$(".nameBlock1").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
		// 	$(".nameBlock1 .glyphicon-remove").remove();
		// 	if (appendPrevent == false){
		// 		$("#fioOutput").append($("#fio1").val());
		// 		appendPrevent = true;
		// 	}
		// 	validName1 = true;
		// }
		//******************************STEP_1**********************************
		if(name1 == ""|| name1==" " ||(regFIO1.test(name1))==false) {  
			$(".nameBlock1").removeClass("has-success").addClass("has-error");
			$(".checkCorrection1").removeClass("correct").addClass("incorrect");
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validName1 = false;
		} else  {
			$(".nameBlock1").removeClass("has-error").addClass("has-success");
			$(".checkCorrection1").removeClass("incorrect").addClass("correct");
			$(".incorrect").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".correct").animate({ opacity : 1 }, 200);
			}, 200);
			if (appendPrevent == false){
				$("#fioOutput").append($("#fio1").val());
				appendPrevent = true;
			}
			validName1 = true;
		}
		if(name2 == ""|| name2==" " ||(regFIO2.test(name2))==false) {  
			$(".nameBlock2").removeClass("has-success").addClass("has-error");
			$(".checkCorrection2").removeClass("correct").addClass("incorrect");
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validName1 = false;
			
		} else  {
			$(".nameBlock2").removeClass("has-error").addClass("has-success");
			$(".checkCorrection2").removeClass("incorrect").addClass("correct");
			$(".incorrect").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".correct").animate({ opacity : 1 }, 200);
			}, 200);
			validName2 = true;
		}
		if ((validName2 == false) || (validName1 == false)){
			$(".errorEmpty").animate({ opacity : 1 }, 200);
			$(".errorEmpty").css('display','block');

		} else	{
			$(".errorEmpty").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".errorEmpty").css('display','none');
			}, 200);
		}
		//******************************STEP_2**********************************
		if(adress1 == ""|| adress1==" ") {  
			$(".adressBlock1").removeClass("has-success").addClass("has-error");
			$(".checkCorrection3").removeClass("correct").addClass("incorrect");	
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validAdress1 = false;
			
		} else  {
			$(".adressBlock1").removeClass("has-error").addClass("has-success");
			$(".checkCorrection3").removeClass("incorrect").addClass("correct");
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validAdress1 = true;
		}
		if(adress2 == ""|| adress2==" ") {  
			$(".adressBlock2").removeClass("has-success").addClass("has-error");
			$(".checkCorrection4").removeClass("correct").addClass("incorrect");	
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validAdress2 = false;
			
		} else  {
			$(".adressBlock2").removeClass("has-error").addClass("has-success");
			$(".checkCorrection4").removeClass("incorrect").addClass("correct");
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validAdress2 = true;
		}
		if(index == ""|| index==" ") {  
			$(".indexBlock").removeClass("has-success").addClass("has-error");	
			$(".checkCorrection5").removeClass("correct").addClass("incorrect");
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validIndex = false;
			
		} else  {
			$(".indexBlock").removeClass("has-error").addClass("has-success");
			$(".checkCorrection5").removeClass("incorrect").addClass("correct");	
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validIndex = true;
		}

		if ((validAdress1 == false) || (validAdress2 == false) || (validIndex == false)){
			$(".errorEmpty2").animate({ opacity : 1 }, 200);
			$(".errorEmpty2").css('display','block');

		} else{
			$(".errorEmpty2").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".errorEmpty2").css('display','none');
			}, 200);
		}
		//******************************STEP_3**********************************
		if(email =="" || email==" " ||(regEmail.test(email))==false ) {
			$(".emailBlock").removeClass("has-success").addClass("has-error");	
			$(".checkCorrection7").removeClass("correct").addClass("incorrect");
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validEmail = false;	
		} else {
			$(".emailBlock").removeClass("has-error").addClass("has-success");
			$(".checkCorrection7").removeClass("incorrect").addClass("correct");	
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validEmail = true;	
		}
		if(phone == ""|| phone==" "||(regPhone.test(phone))==false) {
			$(".phoneBlock").removeClass("has-success").addClass("has-error");	
			$(".checkCorrection6").removeClass("correct").addClass("incorrect");
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validPhone = false;	
		} else {
			$(".phoneBlock").removeClass("has-error").addClass("has-success");	
			$(".checkCorrection6").removeClass("incorrect").addClass("correct");	
			$(".correct").animate({ opacity : 0 }, 200);
			setTimeout(function(){
				$(".incorrect").animate({ opacity : 1 }, 200);
			}, 200);
			validPhone = true;	
		}
		
		if(email =="" || email==" " || phone == ""|| phone==" "){
			$(".errorEmpty3").animate({ opacity : 1 }, 200);
			$(".errorEmpty3").css('display','block');
			$(".errorEmpty4").css('opacity','0');
			$(".errorEmpty4").css('display','none');
			$(".errorEmpty5").css('opacity','0');
			$(".errorEmpty5").css('display','none');
			$(".errorEmpty6").css('opacity','0');
			$(".errorEmpty6").css('display','none');
		} else	if ((validPhone == false) && (validEmail == false)){
			$(".errorEmpty6").animate({ opacity : 1 }, 200);
			$(".errorEmpty6").css('display','block');
			$(".errorEmpty4").css('opacity','0');
			$(".errorEmpty4").css('display','none');
			$(".errorEmpty5").css('opacity','0');
			$(".errorEmpty5").css('display','none');
			$(".errorEmpty3").css('opacity','0');
			$(".errorEmpty3").css('display','none');
		} else	if (validPhone == false){
			$(".errorEmpty4").animate({ opacity : 1 }, 200);
			$(".errorEmpty4").css('display','block');
			$(".errorEmpty6").css('opacity','0');
			$(".errorEmpty6").css('display','none');
			$(".errorEmpty5").css('opacity','0');
			$(".errorEmpty5").css('display','none');
			$(".errorEmpty3").css('opacity','0');
			$(".errorEmpty3").css('display','none');
		} else	if (validEmail == false){
			$(".errorEmpty5").animate({ opacity : 1 }, 200);
			$(".errorEmpty5").css('display','block');
			$(".errorEmpty6").css('opacity','0');
			$(".errorEmpty6").css('display','none');
			$(".errorEmpty4").css('opacity','0');
			$(".errorEmpty4").css('display','none');
			$(".errorEmpty3").css('opacity','0');
			$(".errorEmpty3").css('display','none');
		}

		

		//******************************STEP_4**********************************
		// console.log(document.getElementById("sber").value, "Сбер");
		// console.log(document.getElementById("tink").value, "Tink");
		// console.log(document.getElementById("yan").value, "Yan");
		// console.log(document.getElementById("qiwi").value, "Qiwi");
		if(document.getElementById("sber").checked|| document.getElementById("tink").checked || document.getElementById("yan").checked || document.getElementById("qiwi").checked) {  
			if(document.getElementById("sber").checked){
				$("#paysend").val("Sberbank");
			}
			if(document.getElementById("tink").checked){
				$("#paysend").val("Tinkoff");
			}
			if(document.getElementById("yan").checked){
				$("#paysend").val("Yandex");
			}
			if(document.getElementById("qiwi").checked){
				$("#paysend").val("Qiwi");
			}
			
			payChecked = true;
			console.log("payChecked = true");
		}
		// console.log(regPhone.test(phone), "regPhone-test");
		// console.log(validPhone, "validPhone");
		// console.log(phone.search(regPhone));
		// console.log(phone.match(regPhone));

		if(validName1 == true && validName2 == true ) { //&& validEmail == true && validPhone == true
			$('.step1').animate({ opacity : 0 }, 400);

			setTimeout(function(){
				$('.step1').hide();
				$('.step2').css('display','flex');
				$('.step2').animate({ opacity : 1 }, 400);
			}, 400);

			if(validAdress1== true && validAdress2== true &&validIndex == true ) { //&& validEmail == true && validPhone == true
				$('.step2').animate({ opacity : 0 }, 400);
				setTimeout(function(){
					$('.step2').hide();
					$('.step3').css('display','flex');
					$('.step3').animate({ opacity : 1 }, 400);
				}, 400);
				if(validEmail == true && validPhone == true ) { //&& validEmail == true && validPhone == true
					$('.step3').animate({ opacity : 0 }, 400);
					setTimeout(function(){
						$('.step3').hide();
						$('.step4').css('display','flex');
						$('.step4').animate({ opacity : 1 }, 400);
					}, 400);
					if(payChecked == true){
						$("form").unbind('submit').submit();
						function delayClick() {
							$('#submitButton4').click();
						}
						function delayDisabledButton(){
							document.getElementById("submitButton4").disabled = true;
							console.log("bang!");
						}
						setTimeout(delayClick, 5);
						setTimeout(delayDisabledButton, 10);
					} else {
						console.log("no bang :(");
					}
				}
			}
		} else { 
			// alert("не отправил");
		}
			
			
			//$("form").unbind('submit').submit();
			// function delayClick() {
			// 	$('#submitButton').click();
			// }
			// function delayDisabledButton(){
			// 	document.getElementById("submitButton").disabled = true;
			// }
			// setTimeout(delayClick, 5);
			// setTimeout(delayDisabledButton, 10);


	});

});




