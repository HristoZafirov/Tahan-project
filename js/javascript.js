var products = [4];
products[0] = document.getElementById('product0');
products[1] = document.getElementById('product1');
products[2] = document.getElementById('product2');
products[3] = document.getElementById('product3');
var limit = products.length;
products[0].style.display = "block";
products[0].classList.add("active");
function incrementProduct(){
	var n = 0;
	for (var i = 0; i <= products.length-1; i++) {
		if (products[i].classList.contains("active")) {
			n = i;
		}
	}
	products[n].style.display = "none";
	products[n].classList.remove("active");
	if (n == products.length-1) {
		n = -1;
	} 
	products[n+1].style.display = "block";
	products[n+1].classList.add("active");
}
function decrementProduct(){
	var n = 0;
	for (var i = 0; i < products.length; i++) {
		if (products[i].classList.contains("active")) {
			n = i;
		}
	}products[n].style.display = "none";
	products[n].classList.remove("active");
	if (n == 0) {
		n = products.length;
	}
	products[n-1].style.display = "block";
	products[n-1].classList.add("active");
}


function emptyArea(){
	document.getElementById('txtarea').innerHTML = "";
}
/*
function productSwap(param){
	for (var i = 0; i < products.length; i++) {
		if (products[i].classList.contains("active")) {
			temp = i;
		}
	}
	tempPlus = temp + 1;
	tempMinus = temp - 1;
	switch(param){
		case "Left":
			products[temp].style.animation = "goToRight 0.2s ease-in 0s 1 normal";
			products[tempMinus].style.display = "block";
			products[tempMinus].style.animation = "comeFromLeft 0.2 ease-out 0s 1 normal";
			window.setTimeout(function(){
				products[temp].style.animation = "";
				products[temp].style.display = "none";
				products[tempMinus].style.animation = "";
			},250);
			products[temp].classList.remove("active");
			products[tempMinus].classList.add("active");
			document.getElementById('try').innerHTML = temp;
			document.getElementById('try2').innerHTML = tempMinus;
			document.getElementById('try3').innerHTML = tempPlus;
			break;
		case "Right":
			products[temp].style.animation = "goToLeft 0.2s ease-in 0s 1 normal";
			products[tempPlus].style.display = "block";
			products[tempPlus].style.animation = "comeFromRight 0.2s ease-out 0s 1 normal";
			window.setTimeout(function(){
				products[temp].style.animation = "";
				products[temp].style.display = "none";
				products[tempPlus].style.animation = "";
			},250);
			products[temp].classList.remove("active");
			products[tempPlus].classList.add("active");
			document.getElementById('try').innerHTML = temp;
			document.getElementById('try2').innerHTML = tempMinus;
			document.getElementById('try3').innerHTML = tempPlus;
			break;
	}
}

*/
function addArrowAnimation(par) {
	var arr1 = document.getElementById('leftButtonProductSlider');
	var arr2 = document.getElementById('rightButtonProductSlider');
	switch(par){
	case 1:
		arr1.style.animation = "animateLeftArrow 0.25s ease-out 0s 1 normal";
		window.setTimeout(function(){
			arr1.style.animation = "";
		}, 300);
		decrementProduct();
		break;
	case 2:
		arr2.style.animation = "animateRightArrow 0.25s ease-out 0s 1 normal";
		window.setTimeout(function(){
			arr2.style.animation = "";
		}, 300);
		incrementProduct();
		break;
	default:
		break;
	}
}
function minus(par){
	switch(par){
		case 1:
			var kol = document.getElementById('kafqv').innerText;
			var x = Number(kol);
			x--;
			document.getElementById('kafqv').innerHTML = x;
			break;
		case 2:
			var kol = document.getElementById('bql').innerText;
			var y = Number(kol);
			y--;
			document.getElementById('bql').innerHTML = y;
			break;
	}
}
function plus(par){
	switch(par){
		case 1:
			var kol = document.getElementById('kafqv').innerText;
			var x = Number(kol);
			x++;
			document.getElementById('kafqv').innerHTML = x;
			break;
		case 2:
			var kol = document.getElementById('bql').innerText;
			var y = Number(kol);
			y++;
			document.getElementById('bql').innerHTML = y;
			break;
	}
}
function callInfo(par){
	var h2 = document.getElementById('tahan-info-heading');
	var p1 = document.getElementById('tahan-info-p1');
	var p2 = document.getElementById('tahan-info-p2');
	var p3 = document.getElementById('tahan-info-p3');
	var img1 = document.getElementById('tahan-info-img1');
	var img2 = document.getElementById('tahan-info-img2');
	switch(par){
		case 'bql':
			h2.innerHTML = "Информация за белия <i>тахан</i>";
			p1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
			p2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
			p3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
			img1.style.display = "block";
			img2.style.display = "block";
			break;
		case 'kafqv':
			h2.innerHTML = "Информация за кафевия <i>тахан</i>";
			p1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
			p2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
			p3.innerHTML = "";
			img1.style.display = "block";
			img2.style.display = "none";
			break;
	}
}
function changeAlert(par) {
	var x = document.getElementById('modal-alert');
	switch(par){
		case 'success':
			x.style.backgroundColor = "#669233";
			x.innerHTML = "<span class='close' onclick='closeModal(4);'>X</span>Вашата поръчка беше успешна!";
			break;
		case 'failure':
			x.style.backgroundColor = "#f74e3b";
			x.innerHTML = "<span class='close' onclick='closeModal(4);'>X</span>Поръчката беше неуспешна.";
			break;
		case 'question':
			x.style.backgroundColor = "#669233";
			x.innerHTML = "<span class='close' onclick='closeModal(4);'>X</span>Въпросът ви е изпратен!";
			break;
		case 'question2':
			x.style.backgroundColor = "#f74e3b";
			x.innerHTML = "<span class='close' onclick='closeModal(4);'>X</span>Грешка! Съжаляваме за неудобството!";
			break;
	}
}

function callModal(par, par2) {
	var modal = document.getElementById('modal-box');
	var modal2 = document.getElementById('modal-box2');
	var modal3 = document.getElementById('modal-box3');
	var modal4 = document.getElementById('modal-box4');
	var modalOrder = document.getElementById('modal-order');
	var modalInfo = document.getElementById('modal-info');
	var modalPartners = document.getElementById('modal-partners');
	var modalAlert = document.getElementById('modal-alert');
	switch(par){
		case 1:
			modal.style.display = "block";
			modalOrder.style.display = "block";
			break;
		case 2:
			modal2.style.display = "block";
			modalInfo.style.display = "block";
			callInfo(par2);
			break;
		case 3:
			modal3.style.display = "block";
			modalPartners.style.display = "block";
			break;
		case 4:
			modalAlert.style.display = "block";
			modal4.style.display = "block";
			changeAlert(par2);
			break;
	}
}
function closeModal(param) {
	var modal = document.getElementById('modal-box');
	var modal2 = document.getElementById('modal-box2');
	var modal3 = document.getElementById('modal-box3');
	var modal4 = document.getElementById('modal-box4');
	var modalOrder = document.getElementById('modal-order');
	var modalInfo = document.getElementById('modal-info');
	var modalPartners = document.getElementById('modal-partners');
	var modalAlert = document.getElementById('modal-alert');
	switch(param){
		case 1:
			modalOrder.style.display = "none";
			modal.style.display = "none";
			break;
		case 2:
			modalInfo.style.display = "none";
			modal2.style.display = "none";
			break;
		case 3:
			modalPartners.style.display = "none";
			modal3.style.display = "none";
			break;
		case 4:
			modalAlert.style.display = "none";
			modal4.style.display = "none";
			break;
	}
}
window.onclick = function(event){
	var modal = document.getElementById('modal-box');
	var modal2 = document.getElementById('modal-box2');
	var modal3 = document.getElementById('modal-box3');
	var modal4 = document.getElementById('modal-box4');
	var modalOrder = document.getElementById('modal-order');
	var modalInfo = document.getElementById('modal-info');
	var modalPartners = document.getElementById('modal-partners');
	var modalAlert = document.getElementById('modal-alert');
	if (event.target == modal) {
		modalOrder.style.display = "none";
		modal.style.display = "none";
	} else if (event.target == modal2) {
		modalInfo.style.display = "none";
		modal2.style.display = "none";
	} else if (event.target == modal3) {
		modalPartners.style.display = "none";
		modal3.style.display = "none";
	} else if (event.target == modal4) {
		modalAlert.style.display = "none";
		modal4.style.display = "none";
	} else {
		return;
	}
}
function navbar(){
	var nav = document.getElementById('navbar');
	var scrolledHeight = window.pageYOffset;
	if (scrolledHeight >= (window.innerHeight / 2) + 50) {
		nav.style.display = "block";
		nav.style.animation = "navbar 0.3s ease-out 0s 1 normal";
	} else if (scrolledHeight < (window.innerHeight / 2) + 50) {
		nav.style.display = "none";
	}
}
window.addEventListener("scroll", navbar, false);
