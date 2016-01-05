function Serach() {
	$('.go').click(function() {
		$(".go2").keyup(function () {
		 var value = $(this).val();
	//	 console.log(value);
		 var str = value
		 var i =0;
		 var res=new Array();
		  res[0] = str.match("isskin");
		  res[1] = str.match("innisfree");
		  res[2] = str.match("thefaceshop");
		  res[3] = str.match("미샤");
		  res[4] = str.match("에뛰드하우스");
/*
		 console.log(res[0]);
		 console.log(res[1]);
		 console.log(res[2]);
		 console.log(res[3]);
		 console.log(res[4]);
*/
		 for(i;i<5;i++){
			 if(res[i] !== null){
			document.getElementById("demo").innerHTML = res[i];
			console.log(i);
				console.log(res[i]);
				console.log('들어오니?');
			 }
		 }
	 }).keyup();

		});
}
