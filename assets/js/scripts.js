//ele takes JQEURY object, appends it to target, then fills element with content. Then takes call back that acts on target
let userName = 'Dave';

let slowLoadElement = function(target, ele, content, speed){
	$(target).append(ele);
	let indx = 0;
	let eggTimer = setInterval(function(){	
		if(indx < content.length)
		{
			$(target).children().append(content[indx]);
			indx++;
		}
		else
		{
			window.clearInterval(eggTimer);
		}
	},speed)
}

let delayElement = function(target, ele, speed, func){
	let delayTimer = window.setTimeout(function(){
		$(target).append(ele);
		if (typeof func === "function") {
			func();
		}
		else{
			console.log("Failed");
		}
	},speed)
}

let outputWorld = function(nm){
	if(nm != ''){
		$("#hello-world-output").html("Welcome to your exercism " + nm + "! Hope you enjoy your stay! ;)");
	}
	else{
		$("#hello-world-output").html("Hello Cruel World...");
	}
}

let helloWorld = function(){
	let str = "Hello welcome to this page, might I ask, what is your name?";
	let inp = "<input style='width: 10%; padding: 2px;' id='hello-input'></input>";
	let bt = "<button class='btn btn-success btn-sm' id='hello-button'> _ </button>";


	slowLoadElement("#hello-world-prompt", $("<p>"), str, 175);
	delayElement("#hello-world-prompt", inp, (175 * str.length));
	delayElement("#hello-world-prompt", bt, (175 * str.length) + 175, function(){
		document.getElementById("hello-input").focus()
		$("#hello-button").click(function(){
			userName = $("#hello-input").val();
			outputWorld($("#hello-input").val());
		});
		$('#hello-input').keypress(function (e) {
  			if (e.which == 13) {
  				userName = $("#hello-input").val();
    			outputWorld($("#hello-input").val());
    			return false;    //<---- Add this line
  			}
		});
	});

	//$("#hello-world-prompt").append("<p>Hello welcome to this page, might I ask, what is your name?</p>")
	//							.append("<input style='width: 5%'></input>")
	//$("#hello-world-output").html("Hello World");
}

$(document).ready(function(){
	$("#hello-world-button").one('click', function(){
		helloWorld();
	});	
});
