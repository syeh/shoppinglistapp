$(document).ready(function () {
	$("input[type='button']").on("click", function() {
		var item = $("input[type='text']").val();
		   if ($('.entertext').val() == '') {
     alert('Field is empty');
     return false;
     
    }
		$("ol").append("<li style='display:none;'>"+ item+"<input type='checkbox'></li><br />");
        $("li:last").show("clip");
	});
	$("input[type='text']").keyup(function(event) {


	   if(event.keyCode == 13) {

		  $("input[type='button']").click(); 
		 
	   }
   });
   $("ol").on("click", "input[type='checkbox']", function() {
	   $(this).parent().remove();   
   });
    
});