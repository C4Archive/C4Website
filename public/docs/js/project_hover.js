$(document).ready(function(){
	$("#featured_projects a").hover(function(){
		$(this).find('span.over').fadeIn(250);
		
	}, function(){	
		$(this).find('span.over').fadeOut(250);
		
	});
	$("#projects a").hover(function(){
		$(this).find('span.over').fadeIn(250);
		
	}, function(){	
		$(this).find('span.over').fadeOut(250);
	});
});