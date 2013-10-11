$(function() 
{
	 $("#infoBox")
	.css( 
	{
	   "background":"rgba(255,255,255,0.9)"
	})
	.dialog({ autoOpen: false, 
			width: 'auto',	
		show: { effect: 'fade', duration: 300 },
		hide: { effect: 'fade', duration: 300 } 
	});
	
	 $("#infoButton")
       .text("") // sets text to empty
	.css(
	{ "z-index":"9999",
	  "background":"rgba(0,0,0,0)", "opacity":"0.9", 
	  "position":"absolute", "top":"0.6em", "left":"0.8em"
	}) // adds CSS
    .append("<img width='32' height='32' src='img/icon-info.png'/>")
    .button()
	.click( 
		function() 
		{ 
			$("#infoBox").dialog("open");
		});
});