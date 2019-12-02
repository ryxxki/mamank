$(document).ready(function(){
	//tambah class
	$(".open").click(function(){
		$(".nav-list").addClass("active");
	});

	$(".close").click(function(){
		$(".nav-list").removeClass("active");
	});
});