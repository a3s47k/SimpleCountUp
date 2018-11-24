$(window).scroll(function(){
	countNumber();
})

$(window).resize(function(){
	countNumber();
})

$(document).ready(function(){
	countNumber();
})
/** - First thing get height form top to data-count element is dataHeight, get height when scroll is scrool Height, get the window Height, WHEN THE SCROLL HEIGHT + WINDOWS HEIGHT BIGGER THAN dataHEIGHT BEGIN TO COUNT
 * - Second get the variable of number need to count by attribure data-count by IF condition is right countTo is datacount attribute of each item so it will be different , The line $this = $(this) is create same object avoid create 2 object (WARNING : stack over flow  say that im not sure ). countTo something like count function, durationTo = how long it will take to count to end.other part is mostly form the same concept
  */

function countNumber(){
	$('.item').each(function(){
		let dataHeight= $(this).offset().top;
		let scrollHeight =$(window).scrollTop();
		let windowHeight = $(window).height();
		let num = $(this).attr('data-count');
		let f = $(this).attr('data-form');
		let run =false;
		if( dataHeight < ((windowHeight +scrollHeight) ) && !run){
			var $this = $(this),
			countTo = num,
			durationTo = 4000;
			$({ countNum: $this.text() }).animate({
			countNum: countTo
			}, {
			duration: durationTo,
			easing: 'linear',
			step: function () {
			$this.text(Math.floor(this.countNum));
			},
			complete: function () {
			$this.text(this.countNum);
			run = true
			}
			});
		}else{
			$(this).text(f);
		}
	})
}
