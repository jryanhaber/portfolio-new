$(document).ready(function() {

  // Place JavaScript code here...


$(".filter").on('click',function(){
	var classToShow = "."+ $(this).text()
	$(".items").hide();
	$( classToShow ).show();
})

$(".show_all").on('click',function(){
	$(".items").show();

})

});