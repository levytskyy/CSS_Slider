function slider(p){
	var that = this,
		pageNumber = 1,
		animationTime = 600,
		lastAnimation = 400;
	this.id = 'bg__color';
	this.numberSlide = $('#' + that.id + ' li').length;
	
	this.init = function() {
		$(document).bind('mousewheel onwheel DOMMouseScroll MozMousePixelScroll', function(event) {
			var timeNow = new Date().getTime();
			if(timeNow - lastAnimation < 100 + animationTime) {
				event.preventDefault();
				return;
			}
			var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
			that.nextSlide(delta);
			lastAnimation = timeNow;
		});	
		document.onmousemove = that.moveCursor;
	},
	this.nextSlide = function(delta) {
		if(delta < 1){
			if((pageNumber <= 1) || (pageNumber < this.numberSlide))
				pageNumber++;
			else
				pageNumber = 1;			
		}else{
			if(pageNumber > 1)
				pageNumber--;
			else
				pageNumber = this.numberSlide;
		}
		document.getElementById(this.id).setAttribute("data-active-page", pageNumber);	
	}
};

var mainSlider = new slider();
	mainSlider.init();
