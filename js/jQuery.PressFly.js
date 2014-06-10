/*=========================================
	Press Fly created by Andy Santana

	Follow Me on Twitter : @AndyFrontend
=========================================*/

$(function(){

	$.fn.pressFly = function(){

		var control = 0;

		$(".showPass").on("click",ShowControl);

		function ShowControl()
		{
			if(control == 0)
			{
				$("input.fly").attr("type","text");

				control++;
			}
			else
			{
				$("input.fly").attr("type","password");

				control--;
			}
		};

	};

});