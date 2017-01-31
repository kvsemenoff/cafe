<script>
	$(document).ready(function(){
		$('a[name=modal]').click(function(e) {
			e.preventDefault();
			var id = $(this).attr('href');
			var maskHeight = $(document).height();
			var maskWidth = $(window).width();
			$('#mask').css({'width':maskWidth,'height':maskHeight});
			$('#mask').fadeTo("slow",0.8); 
			var winH = $(window).height();
			var winW = $(window).width();
			posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement ||document.body.parentNode || document.body).scrollTop;
			$(id).css('top',  posTop+50);
			$(id).css('left', winW/2-$(id).width()/2);
			$(id).fadeIn(500); 
		});
		$('.window .dd-close').click(function (e) {
			e.preventDefault();
			$('#mask, .window').hide();
			$('.window').hide();
		}); 

		$('#mask, .an-exit__krest').click(function () {
			$('#mask').hide();
			$('.window').hide();
		}); 
		$(".phone").mask("+ 7 (999) 999 - 99 - 99?"); 
		$(".form1").submit(function() { 
			var tel = $(this).find('input[name="phone"]');
			var empty = false;
			if (tel.val() == ""){
				empty = true;
			}
			if (empty == true){
				tel.addClass("error-input");
				tel.focus();
			}else{
				var form_data = $(this).serialize(); 
				$.ajax({
					type: "POST", 
					url: "/sendmessage.php", 
					data: form_data,
					success: function() {
						cleanTnanks(this);
					}
				});
			}
			return false;
		});

		function cleanTnanks(form){
			$('input[type="text"]').removeClass("error-input");
			$("input[type=text], textarea").val("");
			$('.window').hide();
			// $('a[href=#thanks]').trigger('click');
			location = "spasibo.php";
		};
	});
	$(function() {

		$("#started").click(function(event){
			event.preventDefault();
			var plansoffset = $("#plans").offset().top;
		// console.log(plansoffset);
		$("html, body").animate({
			scrollTop: plansoffset 
		}, 500);
	});

	});
</script>

<a href="#log-in" name="modal">55555555555</a>

<div id="mask"></div>
<div id="log-in" class="window">
	<div class="dd-form-wrap">
		<form class="form1" action="#" method="post">
			<div class="form-wrap-main">
				<div class="dd-close">Х</div>
				<div class="dd-input-wrap">
					<input class="" type="text" name="uname" placeholder="Ваше имя">
					<input class="phone" type="text" placeholder="Введите телефон" name="phone">
				</div>
				<input type="submit" class="form-button" name="submit" value="Заказать звонок">
			</div>
		</form>
	</div>
</div>
</body>
</html>

