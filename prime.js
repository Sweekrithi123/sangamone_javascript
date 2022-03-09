function submit() {
	var a=document.getElementById('prime').value;
	var j=2;
	if (a=="") {
		alert("please enter the number:")
	}
	else{
		for (var i = 0;i<=100;i++) {
			if (a%j==0) {
				a=a/j;
				document.write(j);
			}
			else if (a%j==1) {
				j++;
			}
			else if(a%j==2){
				j++;

			}
		}
	}
}