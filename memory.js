
var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

//console.log(cards);

var c0=document.getElementById('c0');
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');

var c4=document.getElementById('c4');
var c5=document.getElementById('c5');
var c6=document.getElementById('c6');
var c7=document.getElementById('c7');

var c8=document.getElementById('c8');
var c9=document.getElementById('c9');
var c10=document.getElementById('c10');
var c11=document.getElementById('c11');

c0.addEventListener("click",function() {revealCards(0); });
c1.addEventListener("click",function() {revealCards(1); });
c2.addEventListener("click",function() {revealCards(2); });
c3.addEventListener("click",function() {revealCards(3); });

c4.addEventListener("click",function() {revealCards(4); });
c5.addEventListener("click",function() {revealCards(5); });
c6.addEventListener("click",function() {revealCards(6); });
c7.addEventListener("click",function() {revealCards(7) });

c8.addEventListener("click",function() {revealCards(8); });
c9.addEventListener("click",function() {revealCards(9); });
c10.addEventListener("click",function() {revealCards(10); });
c11.addEventListener("click",function() {revealCards(11); });

var onevisible=false;

var turncounter=0;

var visiblenumber;
 
 var lock=false;
 
 var licznik=0;

function revealCards(nr){
	
	var opacityValue=$('#c'+nr).css('opacity');
	
	if(opacityValue!=0 && lock==false){
	lock=true;
	var obraz="url(img/"+cards[nr]+")";
	$('#c'+nr).css('background-image',obraz);
	$('#c'+nr).removeClass('card');
	$('#c'+nr).addClass('cardA');

	if(onevisible==false)
	{
		 lock=false;
		onevisible=true;
		visiblenumber=nr;
	}else{
		
		if(cards[nr]==cards[visiblenumber])
		{//alert("udało sie");
			setTimeout(function(){hide2cards(nr,visiblenumber) }, 750);
		
		}
	else{
		
			setTimeout(function (){recover2cards(nr,visiblenumber)}, 750);		
		//alert("pudło");
		}
		
		turncounter++;
		$('.score').html('Turn cunter: '+turncounter);
		onevisible=false;
		
		
	}
	}
}

function hide2cards(nr1, nr2)
{
	$('#c'+nr1).css('opacity',0);
	$('#c'+nr2).css('opacity',0);
	licznik=licznik+1;
		if(licznik==6)
		{
			
		$('.board').html('<h1>You win! </br> Done in '+turncounter+' turns </h1>');
		}
	lock=false;
}

function recover2cards(nr1,nr2)
{
	var obraz="url(img/karta.png)";
	
	$('#c'+nr1).removeClass('cardA');
	$('#c'+nr1).addClass('card');
	$('#c'+nr1).css('background-image',obraz);
	
	$('#c'+nr2).removeClass('cardA');
	$('#c'+nr2).addClass('card');
	$('#c'+nr2).css('background-image',obraz);
	
	lock=false;
	
	
}








