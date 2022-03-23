$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 25){
			$('nav').addClass("sticky");
		}else{
			$('nav').removeClass("sticky");
		}
	})
});