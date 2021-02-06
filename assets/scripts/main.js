const simage = document.getElementById("sound-image");
const vimage = document.getElementById("volume-image");
const vnum = document.getElementById("volume-number");
const vslide = document.getElementById("volume-slider");
const hsound = document.getElementById("horn-sound");
const hbutton = document.getElementById("honk-btn");
const aselect = document.getElementById("audio-selection");

vnum.addEventListener("input",numchange);
vslide.addEventListener("input",slidechange);
aselect.addEventListener("input", aselectchange);
hbutton.addEventListener("click", bclick);

function numchange(){
    vslide.value = vnum.value;
    hbutton.disabled = false;
    hsound.volume = vnum.value;
    console.log(vnum.value);
    if(vnum.value>66){
        vimage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(vnum.value>33){
        vimage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(vnum.value>0){
        vimage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if(vnum.value == 0){
        vimage.src = "./assets/media/icons/volume-level-0.svg";
        hbutton.disabled = true;
    }
}


function slidechange(){
    vnum.value = vslide.value;
    hbutton.disabled = false;
    hsound.volume = vnum.value;
    console.log(vnum.value);
    if(vnum.value>66){
        vimage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(vnum.value>33){
        vimage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(vnum.value>0){
        vimage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if(vnum.value == 0){
        vimage.src = "./assets/media/icons/volume-level-0.svg";
        hbutton.disabled = true;
    }
}

function aselectchange(event){
    let schoice = event.target.id;
    if(schoice == "radio-air-horn"){
        hsound.src =  "./assets/media/audio/air-horn.mp3";
        simage.src = "./assets/media/images/air-horn.svg";
    }
    else if(schoice == "radio-car-horn"){
        hsound.src =  "./assets/media/audio/car-horn.mp3";
        simage.src = "./assets/media/images/car.svg";
    }
    else{
        hsound.src =  "./assets/media/audio/party-horn.mp3";
        simage.src = "./assets/media/images/party-horn.svg";
    }
}

function bclick(event){
    event.preventDefault();
    hsound.play();
}
