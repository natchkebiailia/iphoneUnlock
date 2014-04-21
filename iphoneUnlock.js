function iphoneUnlock(){
	var overLay=document.createElement("div");
	overLay.id="androidLockOverlay";
	overLay.style.position="fixed";
	overLay.style.width=overLay.style.height="100%";
	overLay.style.top=overLay.style.left="0px";
	overLay.style.backgroundColor="rgba(0, 0, 0, 0.70)";
	overLay.style.zIndex=999999998;
	document.body.appendChild(overLay);
	overLay=document.getElementById("androidLockOverlay");
	
	var iphoneUnlockDiv=document.createElement("div");
	iphoneUnlockDiv.id="iphoneUnlockDiv";
	iphoneUnlockDiv.style.height="100%";
	iphoneUnlockDiv.style.minHeight="350px";
	iphoneUnlockDiv.style.position="relative";
	iphoneUnlockDiv.style.width="700px";
	iphoneUnlockDiv.style.minWidth="700px";
	iphoneUnlockDiv.style.margin="0 auto";
	iphoneUnlockDiv.style.overflow="hidden";
	iphoneUnlockDiv.style.zIndex=999999999;
	
	
	
	var dateTime=document.createElement("div");
	dateTime.id="dateTime";
	dateTime.style.position="fixed";
	dateTime.style.width="700px";
	dateTime.style.height="200px";
	dateTime.style.top="0px";
	dateTime.style.fontFamily="Helvetica , sans-serif";
	dateTime.style.backgroundImage="-webkit-gradient(linear, left top, left bottom, color-stop(0%,#7d7e7d), color-stop(100%,#0e0e0e))";
	dateTime.style.webkitUserSelect="none";
	dateTime.style.color="#f2efef";
	dateTime.style.textAlign="center";
	
	var time=document.createElement("h1");
	time.id="time";
	time.style.padding="0px";
	time.style.marginTop="18px";
	time.style.marginBottom="0px";
	time.style.fontSize="120px";
	
	var date=document.createElement("h3");
	date.id="date";
	date.style.marginTop="0px";
	date.style.marginBottom="0px";
	date.style.fontSize="24px";

	
	dateTime.appendChild(time);
	dateTime.appendChild(date);
	
	var pad=document.createElement("div");
	pad.id="pad";
	pad.style.margin="0 auto";
	pad.style.border=" 2px solid #8D8080";
	pad.style.borderRadius="30px";
	pad.style.paddingTop="20px";
	pad.style.paddingBottom="20px";
	pad.style.paddingLeft="220px";
	pad.style.paddingRight="20px";
	pad.style.backgroundImage="-webkit-gradient(linear,left top,left bottom,color-stop(0, #3b3b3b),color-stop(1, #000000))";
	pad.style.backgroundRepeat="no-repeat";
	pad.style.display="inline-block";
	pad.style.position="fixed";
	pad.style.bottom="0px";
	
	var arrow=document.createElement("div");
	arrow.id="arrow";
	arrow.style.position="absolute";
	arrow.style.zIndex="999";
	arrow.style.left="10px";
	arrow.style.top="11px";
	arrow.style.backgroundColor="grey";
	arrow.style.width="150px";
	arrow.style.height="100px";
	arrow.style.borderRadius="22px";
	arrow.style.backgroundImage="-webkit-gradient(linear, left top, left bottom, color-stop(0%,#F1F1F1), color-stop(50%,#d3d3d3), color-stop(52%,#c6c6c6), color-stop(100%,#919499))";
	arrow.style.cursor="hand";
	
	var rectangle=document.createElement("div");
	rectangle.style.width="40px";
	rectangle.style.height="30px";
	rectangle.style.float="left";
	rectangle.style.backgroundColor="black";
	rectangle.style.top="36px";
	rectangle.style.left="50px";
	rectangle.style.position="absolute";
	rectangle.style.opacity="0.4";
	
	var right=document.createElement("div");
	right.style.width="0px";
	right.style.height="0px";
	right.style.borderTop="22px solid transparent";
	right.style.borderBottom="22px solid transparent";
	right.style.borderLeft="30px solid black";
	right.style.float="left";
	right.style.position="absolute";
	right.style.left="90px";
	right.style.top="29px";
	right.style.opacity="0.4";
	
	arrow.appendChild(rectangle);
	arrow.appendChild(right);
	
	var h1=document.createElement("h1");
	h1.id="label";
	h1.style.zIndex="1";
	h1.style.fontSize="70px";
	h1.style.backgroundImage="-webkit-gradient(linear,left top,right top,color-stop(0, #696969),color-stop(0.4, #696969),color-stop(0.5, white),color-stop(0.6, #696969),color-stop(1, #696969))";
	h1.style.webkitBackgroundClip="text";
	h1.style.webkitTextFillColor="transparent";
	h1.style.webkitUserSelect="none";
	h1.style.transparent="none";
	h1.style.fontFamily="Helvetica , sans-serif";
	h1.style.fontWeight="300";
	h1.style.padding="0px";
	h1.style.margin="0px";
	h1.style.cursor="default";
	
	var span=document.createElement("span");
	span.innerText="Slide to unlock";
	h1.appendChild(span);
	
	pad.appendChild(arrow);
	pad.appendChild(h1);
	iphoneUnlockDiv.appendChild(dateTime);
	iphoneUnlockDiv.appendChild(pad);
	document.body.appendChild(iphoneUnlockDiv);

	var el=document.getElementById("arrow");
	var label=document.getElementById("label");
	var offsetMouse;
	var isDown=false;
	addListeners();
	var glowPos=0;
	var glowAnimation=window.setInterval(function(){
		label.style.backgroundPosition=glowPos+"px";
		glowPos+=3;
	},10);
	function addListeners(){
		el.addEventListener('mousedown', mouseDown, false);
		document.body.addEventListener('mouseup', mouseUp, false);
		el.addEventListener('mouseleave', mouseUp, false);
		el.addEventListener('mousemove', divMove, false); 
	}

	function mouseUp(){
		if(isDown)
			checkState();
		isDown=false;
	}

	function mouseDown(e){
		e.preventDefault();
		offsetMouse=(e.clientX-el.parentNode.offsetLeft-el.offsetLeft);
		isDown=true;
	}

	function divMove(e){
		e.preventDefault();
		var newX=e.clientX-el.parentNode.offsetLeft-offsetMouse;
		if(isDown){
			label.style.opacity=1-newX/535;
			if(newX<=10)
				el.style.left = 10 + 'px';
			else if(newX>=535)
					el.style.left = 535 + 'px';
				else
					el.style.left = newX + 'px';
		}
	}
	function checkState(){
		if(parseInt(el.style.left)==535){
			anlockAnimation();
		}else if(parseInt(el.style.left)>10){
			animateBack(el.offsetLeft);
		}
	}
	function animateBack(offset){
		label.style.opacity=1;
		var step=offset/20;
		var counter=0;
		var timer=window.setInterval(function(){
			el.style.left=(parseInt(el.style.left)-step)+"px";
			counter++;
			if(counter>20 || parseFloat(el.style.left)<10){
				window.clearInterval(timer);
				el.style.left="10px";
			}
		},10);
	}
	function anlockAnimation(){
		var pad=document.getElementById("pad");
		var dateTime=document.getElementById("dateTime");
		var counter=0;
		var timerfinal=window.setInterval(function(){
			pad.style.bottom=(parseInt(pad.style.bottom)-5)+"px";
			dateTime.style.top=(parseInt(dateTime.style.top)-8)+"px";
			counter++;
			if(counter>25){
				window.clearInterval(timerfinal);
				el.removeEventListener('mousedown', mouseDown, false);
				document.body.removeEventListener('mouseup', mouseUp, false);
				el.removeEventListener('mouseleave', mouseUp, false);
				el.removeEventListener('mousemove', divMove, false);
				document.body.removeChild(document.getElementById("iphoneUnlockDiv"));
				document.body.removeChild(document.getElementById("androidLockOverlay"));
			}
		},10);
	}
	function updateDateString(){
		var d=new Date();
		var weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var monthNames = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
		var weekName = weekday[d.getDay()];
		var monthName = weekday[d.getMonth()];
		var monthDate=d.getDate();
		document.getElementById("date").innerText=weekName+", "+monthDate+" "+monthName;
	}
	function updateTimeString(){
		var nowDate=new Date();
		var hours=nowDate.getHours();
		var minutes=nowDate.getMinutes();
		minutes=minutes>9 ? minutes : "0"+minutes;
		hours=hours>9 ? hours : "0"+hours;
		document.getElementById("time").innerText=hours+":"+minutes;
	}
	updateTimeString();
	updateDateString();
}
