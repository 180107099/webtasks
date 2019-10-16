var S11 = document.getElementById("s11");
var S12 = document.getElementById("s21");
var S13 = document.getElementById("s31");
var S21 = document.getElementById("s12");
var S22 = document.getElementById("s22");
var S23 = document.getElementById("s32");
var S31 = document.getElementById("s13");
var S32 = document.getElementById("s23");
var S33 = document.getElementById("s33");
var Dt = document.getElementById("determinent");
var Result = document.getElementById('result');

S11.addEventListener('click', add);
S12.addEventListener('click', add);
S13.addEventListener('click', add);
S21.addEventListener('click', add);
S22.addEventListener('click', add);
S23.addEventListener('click', add);
S31.addEventListener('click', add);
S32.addEventListener('click', add);
S33.addEventListener('click', add);
Dt.addEventListener('click', function(){


});

function add(){
	var one = parseFloat(S11.value);
	var two = parseFloat(S12.value);
	var three =parseFloat(S13.value);
	var four =parseFloat(S21.value);
	var five =parseFloat(S22.value);
	var six =parseFloat(S23.value);
	var seven =parseFloat(S31.value);
	var eight =parseFloat(S32.value);
	var nain =parseFloat(S33.value);

	var sum = ((one*five*nain) + (four*eight*three) + (two*six*seven))
	 - ((three*five*seven) + (two*four*nain) + (one*six*eight));


	Result.innerHTML = sum;
}