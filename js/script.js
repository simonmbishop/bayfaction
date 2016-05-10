$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

$(".logo img").mouseenter(function() {
	$(".logo").hide();
	$(".new-logo").fadeIn();
})

$(".new-logo img").mouseleave(function(){
	$(".logo").fadeIn();
	$(".new-logo").fadeOut();
});