//Controls Hello World logic + styling
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
}