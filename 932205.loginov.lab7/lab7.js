var max_wid = screen.width - 250;
var max_hei = screen.height - 350;
var crc;
var squ;
var tri;
var z=0;

function crSquare(){
	numbFigures = document.querySelector('.number-of-figures');
	
	for(var i=0; i<numbFigures.value; i++) {
		z+=1;
		left_sm = Math.floor(Math.random() * (max_wid - 250)) + 250;
		top_sm = Math.floor(Math.random() * (max_hei - 0)) + 0;
		wid = Math.floor(Math.random() * (250 - 50)) + 50;
		document.body.insertAdjacentHTML("afterbegin", `<div class="square"></div>`);
		squ = document.querySelector('.square');
		squ.style.width=wid + 'px';
		squ.style.height=wid + 'px';
		squ.style.top =top_sm + 'px';
		squ.style.left =left_sm + 'px';
		squ.style.zIndex=z;
	}
}

function crTriangle(){
	numbFigures = document.querySelector('.number-of-figures');
	
	for(var i=0; i<numbFigures.value; i++) {
		z+=1;
		left_sm = Math.floor(Math.random() * (max_wid - 500)) + 250;
		top_sm = Math.floor(Math.random() * (max_hei - 0)) + 0;
		wid = Math.floor(Math.random() * (250 - 50)) + 50;
		document.body.insertAdjacentHTML("afterbegin", `<div class="triangle"></div>`);
		tri = document.querySelector('.triangle');
		tri.style.borderLeft=wid + 'px solid transparent';
		tri.style.borderRight=wid + 'px solid transparent';
		tri.style.borderBottom=wid + 'px solid rgba(0,0,255,0.75)';
		tri.style.top =top_sm + 'px';
		tri.style.left =left_sm + 'px';
		tri.style.zIndex=z;
	}
}

function crCircle(){
	numbFigures = document.querySelector('.number-of-figures');
	
	for(var i=0; i<numbFigures.value; i++) {
		z+=1;
		left_sm = Math.floor(Math.random() * (max_wid - 250)) + 250;
		top_sm = Math.floor(Math.random() * (max_hei - 0)) + 0;
		wid = Math.floor(Math.random() * (250 - 50)) + 50;
		document.body.insertAdjacentHTML("afterbegin", `<div class="circle"></div>`);
		crc = document.querySelector('.circle');
		crc.style.width=wid + 'px';
		crc.style.height=wid + 'px';
		crc.style.borderRadius=wid/2 + 'px';
		crc.style.top =top_sm + 'px';
		crc.style.left =left_sm + 'px';
		crc.style.zIndex=z;
	}
}


function del_ch(){
document.body.addEventListener("click", e => {	
						if (squ != null) squ.style.backgroundColor='rgba(255,0,0,0.85)';
						if (crc != null) crc.style.backgroundColor='rgba(0,100,0,0.85)';
						if (tri != null) tri.style.borderBottomColor='rgba(0,0,255,0.75)';
				if (e.target.classList.contains("circle")) {
					crc=e.target;
					crc.style.backgroundColor='rgba(255,255,0,0.85)';
				}
				if (e.target.classList.contains("square")) {
					squ=e.target;
					squ.style.backgroundColor='rgba(255,0,255,0.85)';
				}
				if (e.target.classList.contains("triangle")) {
					tri=e.target;
					tri.style.borderBottomColor='rgba(0,255,255,0.75)';
				}
		});
document.body.addEventListener("dblclick", e => {
                if (e.target.classList.contains("square") || e.target.classList.contains("triangle") || e.target.classList.contains("circle")) {
					document.body.removeChild(e.target);
            }
        });
}

document.addEventListener("DOMContentLoaded", () => del_ch());