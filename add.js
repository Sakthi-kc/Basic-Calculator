function add(){
	var x=+document.getElementById('one').value;
	var y=+document.getElementById('two').value;
	var z=x+y;
	if(isNaN(z)){
		alert('Error:Enter Integer')
		x=null;
		y=null;
		z=null;
	}
	if((document.getElementById('one').value=="") || (document.getElementById('two').value=="")){
		alert('Enter number')
		x=null;
		y=null;
		z=null;
	}
	document.getElementById('one').value = x;
	document.getElementById('two').value = y;
	document.getElementById('three').value = z;
	console.log(z);
}
function sub(){
	var x=+document.getElementById('one').value;
	var y=+document.getElementById('two').value;
	var z=x-y;
	if(isNaN(z)){
		alert('Error:Enter Integer')
		x=null;
		y=null;
		z=null;
	}
	if((document.getElementById('one').value=="") || (document.getElementById('two').value=="")){
		alert('Enter number')
		x=null;
		y=null;
		z=null;
	}
	document.getElementById('one').value = x;
	document.getElementById('two').value = y;
	document.getElementById('three').value = z;
	console.log(z);
}
function mul(){
	var x=+document.getElementById('one').value;
	var y=+document.getElementById('two').value;
	var z=x*y;
	if(isNaN(z)){
		alert('Error:Enter Integer')
		x=null;
		y=null;
		z=null;
	}
	if((document.getElementById('one').value=="") || (document.getElementById('two').value=="")){
		alert('Enter number')
		x=null;
		y=null;
		z=null;
	}
	document.getElementById('one').value = x;
	document.getElementById('two').value = y;
	document.getElementById('three').value = z;
	console.log(z);
}
function div(){
	var x=+document.getElementById('one').value;
	var y=+document.getElementById('two').value;
	var z=x/y;
	if(isNaN(z)){
		alert('Error:Enter Integer')
		x=null;
		y=null;
		z=null;
	}
	if((document.getElementById('one').value=="") || (document.getElementById('two').value=="")){
		alert('Enter number')
		x=null;
		y=null;
		z=null;
	}
	document.getElementById('one').value = x;
	document.getElementById('two').value = y;	
	document.getElementById('three').value = z;
	console.log(z);
}
function clr()
{
	document.getElementById('one').value="";
	document.getElementById('two').value="";
	document.getElementById('three').value="";
}