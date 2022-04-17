const body = document.getElementById("body");
const HOME = document.getElementById("HOME");
const DESTINATION = document.getElementById("DESTINATION");
const CREW = document.getElementById("CREW");
const TECHNOLOGY = document.getElementById("TECHNOLOGY");

//  les url de bg a change
const urlHOME = "url('./assets/home/background-home-desktop.jpg')";
const urlDESTINATION = "url('./assets/destination/background-destination-desktop.jpg')";
const urlCREW = "url('./assets/crew/background-crew-desktop.jpg')";
const urlTECHNOLOGY = "url('./assets/technology/background-technology-desktop.jpg')";

//  les url de bg a change for tablet
const urlHOME_Tablet = "url('./assets/home/background-home-tablet.jpg')";
const urlDESTINATION_Tablet = "url('./assets/destination/background-destination-tablet.jpg')";
const urlCREW_Tablet = "url('./assets/crew/background-crew-tablet.jpg')";
const urlTECHNOLOGY_Tablet = "url('./assets/technology/background-technology-tablet.jpg')"

// l'objet qui enregistre la verification de la class active
const classActive = {
    HOMEactive: HOME.classList.contains("active"),
    DESTINATIONactive: DESTINATION.classList.contains("active"),
    CREWactive: CREW.classList.contains("active"),
    TECHNOLOGYactive: TECHNOLOGY.classList.contains("active")

}

// la fuction qui change le bg et qui deplace la classActive
const addBgAndActive = (list, urlbg_pc,urlbg_Tablet, active, un, deux, trois, addelement) => {
    list.addEventListener("click", () => {
          
        // for the pc
        if (screen.width>=769) {
            body.style.backgroundImage = urlbg_pc;
            body.style.backgroundSize = "cover";
            body.style.backgroundRepeat = "no-repeat";
        }
        //  for the tablet
        if (screen.width<=769 && screen.width>375) {
            body.style.backgroundImage = urlbg_Tablet;
            body.style.backgroundSize = "cover";
            body.style.backgroundRepeat = "no-repeat";
        }

        if (active == false) {
            un.classList.remove("active");
            deux.classList.remove("active");
            trois.classList.remove("active");

            addelement.classList.add("active");

        }

    });
}

// for pc
//  jeux de la function pour HOME
addBgAndActive(HOME, urlHOME,0, classActive.HOMEactive, DESTINATION, CREW, TECHNOLOGY, HOME);

// jeux de la function pour DESTINATION
addBgAndActive(DESTINATION, urlDESTINATION,0, classActive.DESTINATIONactive, HOME, CREW, TECHNOLOGY, DESTINATION);

// jeux de la function pour CREW
addBgAndActive(CREW, urlCREW,0, classActive.CREWactive, HOME, DESTINATION, TECHNOLOGY, CREW);

// jeux de la function pour TECHNOLOGY
addBgAndActive(TECHNOLOGY, urlTECHNOLOGY,0, classActive.TECHNOLOGYactive, HOME, DESTINATION, CREW, TECHNOLOGY);






// for Tablet

//  jeux de la function pour HOME
addBgAndActive(HOME,0,urlHOME_Tablet, classActive.HOMEactive, DESTINATION, CREW, TECHNOLOGY, HOME);

// jeux de la function pour DESTINATION
addBgAndActive(DESTINATION,0,urlDESTINATION_Tablet, classActive.DESTINATIONactive, HOME, CREW, TECHNOLOGY, DESTINATION);

// jeux de la function pour CREW
addBgAndActive(CREW,0,urlCREW_Tablet, classActive.CREWactive, HOME, DESTINATION, TECHNOLOGY, CREW);

// jeux de la function pour TECHNOLOGY
addBgAndActive(TECHNOLOGY,0,urlTECHNOLOGY_Tablet, classActive.TECHNOLOGYactive, HOME, DESTINATION, CREW, TECHNOLOGY);




















 async function getResolution() {
    alert("Votre résolution d'écran est: " + screen.width + "x" + screen.height);
 }
      
 