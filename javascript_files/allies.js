const superman = document.querySelector('#superman_modal');
const supermanPhoto = document.querySelector('#photo2');
const superButton = document.querySelector('#superman_button');
const closeBtn = document.querySelector('#close_superman');

superButton.addEventListener('click', openSuperman);
function openSuperman(){
  superman.style.display = 'block';
}
supermanPhoto.addEventListener('click', openSuperman);
function openSuperman(){
  superman.style.display = 'block';
}
closeBtn.addEventListener('click', closeSuperman);
function closeSuperman(){
  superman.style.display = 'none';
}
//hover to change the border of a picture
superButton.addEventListener('mouseover', ()=>{
  supermanPhoto.style.borderColor = 'cyan';
});
superButton.addEventListener('mouseout', ()=>{
  supermanPhoto.style.borderColor = 'black';
});
supermanPhoto.addEventListener('mouseover', ()=>{
  supermanPhoto.style.borderColor = 'cyan';
});
supermanPhoto.addEventListener('mouseout', ()=>{
  supermanPhoto.style.borderColor = 'black';
});


window.addEventListener('click', outsideClick);
function outsideClick(e){
  if (e.target == superman){
    superman.style.display = 'none';
  }
}

/*wonderwoman*/
const wonderwoman = document.querySelector('#wonderwoman_modal');
const wonderPhoto = document.querySelector('#photo1');
const wonderButton = document.querySelector('#wonderwoman_button');
const closeBtn1 = document.querySelector('#close_wonderwoman');

wonderButton.addEventListener('click', openWonderwoman);
function openWonderwoman(){
  wonderwoman.style.display = 'block';
}
wonderPhoto.addEventListener('click', openWonderwoman);
function openWonderwoman(){
  wonderwoman.style.display = 'block';
}

closeBtn1.addEventListener('click', closeWonderwoman);
function closeWonderwoman(){
  wonderwoman.style.display = 'none';
}
//hover to change the border of a picture
wonderButton.addEventListener('mouseover', ()=>{
  wonderPhoto.style.borderColor = 'cyan';
});
wonderButton.addEventListener('mouseout', ()=>{
  wonderPhoto.style.borderColor = 'black';
});
wonderPhoto.addEventListener('mouseover', ()=>{
  wonderPhoto.style.borderColor = 'cyan';
});
wonderPhoto.addEventListener('mouseout', ()=>{
  wonderPhoto.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick1);
function outsideClick1(e){
  if (e.target == wonderwoman){
    wonderwoman.style.display = 'none';
  }
}

/*aquaman*/
const aquaman = document.querySelector('#aquaman_modal');
const aquaPhoto = document.querySelector('#photo3');
const aquamanButton = document.querySelector('#aquaman_button');
const closeBtn2 = document.querySelector('#close_aquaman');

aquamanButton.addEventListener('click', openAquaman);
function openAquaman(){
  aquaman.style.display = 'block';
}

aquaPhoto.addEventListener('click', openAquaman);
function openAquaman(){
  aquaman.style.display = 'block';
}

closeBtn2.addEventListener('click', closeAquaman);
function closeAquaman(){
  aquaman.style.display = 'none';
}
//hover to change the border of a picture
aquamanButton.addEventListener('mouseover', ()=>{
  aquaPhoto.style.borderColor = 'cyan';
});
aquamanButton.addEventListener('mouseout', ()=>{
  aquaPhoto.style.borderColor = 'black';
});
aquaPhoto.addEventListener('mouseover', ()=>{
  aquaPhoto.style.borderColor = 'cyan';
});
aquaPhoto.addEventListener('mouseout', ()=>{
  aquaPhoto.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick2);
function outsideClick2(e){
  if (e.target == aquaman){
    aquaman.style.display = 'none';
  }
}

/*lantern*/
const lantern = document.querySelector('#lantern_modal');
const lanternPhoto = document.querySelector('#photo4');
const lanternButton = document.querySelector('#lantern_button');
const closeBtn3 = document.querySelector('#close_lantern');

lanternButton.addEventListener('click', openLantern);
function openLantern(){
  lantern.style.display = 'block';
}
lanternPhoto.addEventListener('click', openLantern);
function openLantern(){
  lantern.style.display = 'block';
}
closeBtn3.addEventListener('click', closeLantern);
function closeLantern(){
  lantern.style.display = 'none';
}
//hover to change the border of a picture
lanternButton.addEventListener('mouseover', ()=>{
  lanternPhoto.style.borderColor = 'cyan';
});
lanternButton.addEventListener('mouseout', ()=>{
  lanternPhoto.style.borderColor = 'black';
});
lanternPhoto.addEventListener('mouseover', ()=>{
  lanternPhoto.style.borderColor = 'cyan';
});
lanternPhoto.addEventListener('mouseout', ()=>{
  lanternPhoto.style.borderColor = 'black';
});


window.addEventListener('click', outsideClick3);
function outsideClick3(e){
  if (e.target == lantern){
    lantern.style.display = 'none';
  }
}

/*FLASH*/
const flash = document.querySelector('#flash_modal');
const flashPhoto = document.querySelector('#photo5');
const flashButton = document.querySelector('#flash_button');
const closeBtn4 = document.querySelector('#close_flash');

flashButton.addEventListener('click', openFlash);
function openFlash(){
  flash.style.display = 'block';
}
flashPhoto.addEventListener('click', openFlash);
function openFlash(){
  flash.style.display = 'block';
}
closeBtn4.addEventListener('click', closeFlash);
function closeFlash(){
  flash.style.display = 'none';
}
//hover to change the border of a picture
flashButton.addEventListener('mouseover', ()=>{
  flashPhoto.style.borderColor = 'cyan';
});
flashButton.addEventListener('mouseout', ()=>{
  flashPhoto.style.borderColor = 'black';
});
flashPhoto.addEventListener('mouseover', ()=>{
  flashPhoto.style.borderColor = 'cyan';
});
flashPhoto.addEventListener('mouseout', ()=>{
  flashPhoto.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick4);
function outsideClick4(e){
  if (e.target == flash){
    flash.style.display = 'none';
  }
}

/*cyborg*/
const cyborg = document.querySelector('#cyborg_modal');
const cyborgPhoto = document.querySelector('#photo6');
const cyborgButton = document.querySelector('#cyborg_button');
const closeBtn5 = document.querySelector('#close_cyborg');

cyborgButton.addEventListener('click', openCyborg);
function openCyborg(){
  cyborg.style.display = 'block';
}
cyborgPhoto.addEventListener('click', openCyborg);
function openCyborg(){
  cyborg.style.display = 'block';
}
closeBtn5.addEventListener('click', closeCyborg);
function closeCyborg(){
  cyborg.style.display = 'none';
}
//hover to change the border of a picture
cyborgButton.addEventListener('mouseover', ()=>{
  cyborgPhoto.style.borderColor = 'cyan';
});
cyborgButton.addEventListener('mouseout', ()=>{
  cyborgPhoto.style.borderColor = 'black';
});
cyborgPhoto.addEventListener('mouseover', ()=>{
  cyborgPhoto.style.borderColor = 'cyan';
});
cyborgPhoto.addEventListener('mouseout', ()=>{
  cyborgPhoto.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick5);
function outsideClick5(e){
  if (e.target == cyborg){
    cyborg.style.display = 'none';
  }
}
