var previousBtn = document.querySelector('#previous');
var nextBtn = document.querySelector('#next');
var campaign = document.querySelector('#campaign');
var multiplayer = document.querySelector('#multiplayer');
var arcade = document.querySelector('#arcade');
var cursor = document.querySelector('#campaign');
var scamp = document.querySelector('#scamp');
var smulti = document.querySelector('#smulti');
var sarc = document.querySelector('#sarc');
var page = 'Play';

window.onload = function(){
	cursor.style.borderColor = 'orange';
	scamp.style.color = 'orange';
}

window.addEventListener('keyup', function(e){
	if(e.keyCode === 13){
		if(cursor.nodeName != 'BUTTON')
			return;
		var id = cursor.getAttribute('id');
		if(id === 'Play'){
			var link = document.querySelector('.link1');
			link.click();
		}
		if(id === 'Save'){
			var link = document.querySelector('.link3');
			link.click();
		}
		if(id === 'Load'){
			var link = document.querySelector('.link4');
			link.click();
		}
		if(id === 'Quit'){
			var link = document.querySelector('.link5');
			link.click();
		}
	}
	
	if(e.keyCode === 39){ //right
		if(canMoveRt()){
			moveCursorRt();
		}
	}
	
	if(e.keyCode === 37){ //left
		if(canMoveLt()){
			moveCursorLt();
		}
	}
	if(e.keyCode === 38){ //up
		if(canMoveUp()){
			moveCursorUp();
		}
	}
	if(e.keyCode === 40){ //down
		if(canMoveDown()){
			moveCursorDown();
		}
	}
})

function canMoveUp(){
	if(cursor.getAttribute('nodeName') == 'NAV')
		return 0;
	campaign.style.color = 'rgb(39, 177, 154)';
	campaign.style.borderColor = 'rgb(174, 214, 27)';
	multiplayer.style.color = 'rgba(168, 194, 73, 0.54)';
	multiplayer.style.borderColor = 'rgb(117, 61, 122)';
	arcade.style.color = 'rgb(132, 165, 207)';
	arcade.style.borderColor = 'rgb(108, 139, 98)';
	scamp.style.color = 'rgb(67, 119, 187)';
	smulti.style.color = 'rgb(29, 55, 88)';
	sarc.style.color = 'rgb(93, 142, 206)';
	  return 1;
}

function canMoveRt(){
	var id = cursor.getAttribute('id');
	if(id === 'arcade' || id === 'options')
		return 0;
	campaign.style.color = 'rgb(96, 133, 182)';
	campaign.style.borderColor = 'rgb(37, 185, 94)';
	multiplayer.style.color = 'rgb(59, 129, 32)';
	multiplayer.style.borderColor = 'rgb(92, 51, 156)';
	arcade.style.color = 'rgb(101, 16, 134)';
	arcade.style.borderColor = 'rgb(119, 9, 9)';
	scamp.style.color = 'rgb(2, 23, 49)';
	smulti.style.color = 'rgb(12, 112, 62)';
	sarc.style.color = 'rgba(43, 172, 53, 0.52)';
	cursor.style.color = 'rgb(9, 155, 40)';
	cursor.style.borderColor = 'rgb(33, 5, 78)';
	return 1;
}

function canMoveDown(){
	if(cursor.nodeName != 'BUTTON')
		return 0;
	return 1;
}

function canMoveLt(){
	var id = cursor.getAttribute('id');
	if(id === 'campaign' || id === 'home')
		return 0;
	campaign.style.color = 'rgb(20, 95, 194)';
	campaign.style.borderColor = 'rgb(186, 214, 60)';
	multiplayer.style.color = 'rgb(236, 59, 27)';
	multiplayer.style.borderColor = 'rgb(52, 143, 49)';
	arcade.style.color = 'rgb(117, 9, 108)';
	arcade.style.borderColor = 'rgb(104, 32, 72)';
	scamp.style.color = 'rgb(23, 129, 97)';
	smulti.style.color = 'rgb(181, 216, 28)';
	sarc.style.color = 'rgb(73, 143, 94)';
	cursor.style.color = 'rgb(149, 190, 243)';
	cursor.style.borderColor = 'rgb(98, 107, 119)';
	for(i = 1; i <= 5; i++){
		var thisCursor = document.querySelector('.c' + i);
		thisCursor.style.color = 'rgb(77, 148, 206)';
		thisCursor.style.borderColor = 'rgb(131, 99, 206)';
	}
	return 1;
}