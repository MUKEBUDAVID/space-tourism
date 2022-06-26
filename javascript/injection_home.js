

export default async function injection() {
    

// MENU
const HOME_sroll = document.getElementById("HOME");
const DESTINATION_sroll = document.getElementById("DESTINATION");
const CREW_sroll = document.getElementById("CREW");
const TECHNOLOGY_sroll = document.getElementById("TECHNOLOGY");

// section injecte
const home_sroll = document.getElementById("home_sroll");
const destination_sroll = document.getElementById("destination_sroll");
const crew_sroll = document.getElementById("crew_sroll");
const techno_sroll = document.getElementById("techno_sroll");


    console.log("david est la pret a jouer2000");
    




// les evenements pour le 4 li

// UN
HOME_sroll.addEventListener("click", () => {

    home_sroll.style.transition = "transform 500ms";
    home_sroll.style.transform = "translate(0%)";
    
    destination_sroll.style.transform = "translate(100%)";
    crew_sroll.style.transform = "translate(200%)";
    techno_sroll.style.transform = "translate(300%)";
    
    

    
    
})
// deux
DESTINATION_sroll.addEventListener("click", () => {

    destination_sroll.style.transition = "transform 500ms";
    destination_sroll.style.transform = "translate(0%)";
    
    home_sroll.style.transform = "translate(-100%)";
    crew_sroll.style.transform = "translate(100%)";
    techno_sroll.style.transform = "translate(200%)";
    
    



    
    
})
// trois
CREW_sroll.addEventListener("click", () => {

    crew_sroll.style.transition = "transform 500ms";
    crew_sroll.style.transform = "translate(0%)";
    
    home_sroll.style.transform = "translate(-200%)";
    destination_sroll.style.transform = "translate(-100%)";
    techno_sroll.style.transform = "translate(100%)";
    
    
})
// quatre
TECHNOLOGY_sroll.addEventListener("click", () => {


    techno_sroll.style.transition = "transform 500ms";
    techno_sroll.style.transform = "translate(0%)";
    
    home_sroll.style.transform = "translate(-300%)";
    destination_sroll.style.transform = "translate(-200%)";
    crew_sroll.style.transform = "translate(-100%)";


    
    
})


}


