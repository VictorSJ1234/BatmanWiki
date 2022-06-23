const planes = document.querySelector('#planes_modal');
const planesPhoto = document.querySelector('#planes');
const planesButton = document.querySelector('#planes_button');
const closeBtn = document.querySelector('#close_planes');

planesButton.addEventListener('click', openPlanes);
function openPlanes(){
  planes.style.display = 'block';
}
planesPhoto.addEventListener('click', openPlanes);
function openPlanes(){
  planes.style.display = 'block';
}
closeBtn.addEventListener('click', closePlanes);
function closePlanes(){
  planes.style.display = 'none';
}

//hover to change the border of a picture
planesButton.addEventListener('mouseover', ()=>{
  planesPhoto.style.borderColor = 'cyan';
});
planesButton.addEventListener('mouseout', ()=>{
  planesPhoto.style.borderColor = 'black';
});
planesPhoto.addEventListener('mouseover', ()=>{
  planesPhoto.style.borderColor = 'cyan';
});
planesPhoto.addEventListener('mouseout', ()=>{
  planesPhoto.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick);
function outsideClick(e){
  if (e.target == planes){
    planes.style.display = 'none';
  }
}

/*batmobiles */
const batmobiles = document.querySelector('#batmobiles_modal');
const batmobilesPhoto = document.querySelector('#batmobiles');
const batmobileButton = document.querySelector('#batmobile_button');
const closeBtn1 = document.querySelector('#close_batmobiles');

batmobileButton.addEventListener('click', openCars);
function openCars(){
  batmobiles.style.display = 'block';
}
batmobilesPhoto.addEventListener('click', openCars);
function openCars(){
  batmobiles.style.display = 'block';
}
closeBtn1.addEventListener('click', closeCars);
function closeCars(){
  batmobiles.style.display = 'none';
}

//hover to change the border of a picture
batmobileButton.addEventListener('mouseover', ()=>{
  batmobilesPhoto.style.borderColor = 'cyan';
});
batmobileButton.addEventListener('mouseout', ()=>{
  batmobilesPhoto.style.borderColor = 'black';
});
batmobilesPhoto.addEventListener('mouseover', ()=>{
  batmobilesPhoto.style.borderColor = 'cyan';
});
batmobilesPhoto.addEventListener('mouseout', ()=>{
  batmobilesPhoto.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick1);
function outsideClick1(e){
  if (e.target == batmobiles){
    batmobiles.style.display = 'none';
  }
}

/*batcycles */
const cycles = document.querySelector('#cycles_modal');
const cyclesPhotos = document.querySelector('#cycles');
const cyclesButton = document.querySelector('#cycle_button');
const closeBtn2 = document.querySelector('#close_cycles');

cyclesButton.addEventListener('click', openCycles);
function openCycles(){
  cycles.style.display = 'block';
}
cyclesPhotos.addEventListener('click', openCycles);
function openCycles(){
  cycles.style.display = 'block';
}
closeBtn2.addEventListener('click', closeCycles);
function closeCycles(){
  cycles.style.display = 'none';
}

//hover to change the border of a picture
cyclesButton.addEventListener('mouseover', ()=>{
  cyclesPhotos.style.borderColor = 'cyan';
});
cyclesButton.addEventListener('mouseout', ()=>{
  cyclesPhotos.style.borderColor = 'black';
});
cyclesPhotos.addEventListener('mouseover', ()=>{
  cyclesPhotos.style.borderColor = 'cyan';
});
cyclesPhotos.addEventListener('mouseout', ()=>{
  cyclesPhotos.style.borderColor = 'black';
});

window.addEventListener('click', outsideClick2);
function outsideClick2(e){
  if (e.target == cycles){
    cycles.style.display = 'none';
  }
}