$(document).ready(function(){

	var images =[('barbot.png'), ('dakaar.png'),('exrup.png')];

	var headings =['Hic - The Barbot', 'Dakaar', 'Exrup'];
	
	var descriptions = ["THE WORLD'S FIRST AND EMOTIVE MIX O BOT",
						"A FOOD RECIPE APP HAVING MORE THAN 1 LAKH RECIPIES",
						"SUBSTITUTE FOR ELECTRONIC BUSINESS CARD"];
	
	var n = 0;

	var imagesLength = images.length;

	$('.currentimage').attr('src', images[n]);
	$('.currentimage').removeClass('myanimation'+(n-1));
	$('.currentimage').addClass('myanimation'+n);
	$('.project-name').text(headings[n]);
	$('.project-description').text(descriptions[n]);




	function myslides(){
		n++;
		console.log("before", n);
		if (n==images.length){
			n=0;
			$('.currentimage').removeClass('myanimation2');
		};

		$('.currentimage').attr('src', images[n]);
		$('.currentimage').removeClass('myanimation'+(n-1));
		$('.currentimage').addClass('myanimation'+n);


		$('.project-name').fadeOut( "slow", function() {
			$('.project-name').text(headings[n]).fadeIn();
		});

		$('.project-description').fadeOut( "slow", function() {
			$('.project-description').text(descriptions[n]).fadeIn();
		});


	};


	function leftSlide(){
		console.log("before", n);
		if (n==0){
			n=3; 
		};
		$('.currentimage').attr('src', images[n-1]);
		$('.currentimage').removeClass('myanimation'+(n));
		$('.currentimage').addClass('myanimation'+(n-1));
		

		$('.project-name').fadeOut( "slow", function() {
			$('.project-name').text(headings[n-1]).fadeIn();
		});

		$('.project-description').fadeOut( "slow", function() {
			$('.project-description').text(descriptions[n-1]).fadeIn();
			n--;
		});
		
	
	};



	function polygonRotate(){
		$('.polygon-background').addClass('rotate');
		setTimeout(function () {
			$('.polygon-background').removeClass('rotate');
		}, 1000);

	};
	


	$('.nextarrow').click(function(){
		myslides();
		polygonRotate();

	});


	$('.prevarrow').click(function(){
		leftSlide();
		polygonRotate();
	});


	if ($(window).width() <= 425 ) { 

    		setInterval(function(){
    			myslides();

    		}, 5000);
		}



});