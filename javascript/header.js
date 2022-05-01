const body = document.getElementById("body");
const HOME = document.getElementById("HOME");
const DESTINATION = document.getElementById("DESTINATION");
const CREW = document.getElementById("CREW");
const TECHNOLOGY = document.getElementById("TECHNOLOGY");

//  les url de bg a change for desktop
const urlHOME = "url('./assets/home/background-home-desktop.jpg')";
const urlDESTINATION = "url('./assets/destination/background-destination-desktop.jpg')";
const urlCREW = "url('./assets/crew/background-crew-desktop.jpg')";
const urlTECHNOLOGY = "url('./assets/technology/background-technology-desktop.jpg')";

//  les url de bg a change for tablet
const urlHOME_Tablet = "url('./assets/home/background-home-tablet.jpg')";
const urlDESTINATION_Tablet = "url('./assets/destination/background-destination-tablet.jpg')";
const urlCREW_Tablet = "url('./assets/crew/background-crew-tablet.jpg')";
const urlTECHNOLOGY_Tablet = "url('./assets/technology/background-technology-tablet.jpg')"


//  les url de bg a change for mobile
const urlHOME_Mobile = "url('./assets/home/background-home-mobile.jpg')";
const urlDESTINATION_Mobile = "url('./assets/destination/background-destination-mobile.jpg')";
const urlCREW_Mobile = "url('./assets/crew/background-crew-mobile.jpg')";
const urlTECHNOLOGY_Mobile = "url('./assets/technology/background-technology-mobile.jpg')"




// l'objet qui enregistre la verification de la class active
const classActive = {
    HOMEactive: HOME.classList.contains("active"),
    DESTINATIONactive: DESTINATION.classList.contains("active"),
    CREWactive: CREW.classList.contains("active"),
    TECHNOLOGYactive: TECHNOLOGY.classList.contains("active")

}

// la fuction qui change le bg et qui deplace la classActive
const addBgAndActive = (list, urlbg_pc, urlbg_Tablet, urlbg_Mobile, active, un, deux, trois, addelement) => {
    list.addEventListener("click", () => {

        // change the background for the pc
        if (screen.width >= 769) {
            body.style.backgroundImage = urlbg_pc;
            body.style.backgroundSize = "cover";
            body.style.backgroundRepeat = "no-repeat";
        }
        //  for the the background for the tablet
        if (screen.width <= 769 && screen.width > 375) {
            body.style.backgroundImage = urlbg_Tablet;
            body.style.backgroundSize = "cover";
            body.style.backgroundRepeat = "no-repeat";
        }

        //  for the the background for the mobile
        if (screen.width <= 375) {
            body.style.backgroundImage = urlbg_Mobile;
            body.style.backgroundSize = "cover";
            body.style.backgroundRepeat = "no-repeat";
        }

        // for ajoute la class active et l enleve dans le cas d'un p 
        if (active == false && screen.width > 375) {
            un.classList.remove("active");
            deux.classList.remove("active");
            trois.classList.remove("active");

            addelement.classList.add("active");

        } else if (screen.width <= 375) {
            un.classList.remove("active");
            deux.classList.remove("active");
            trois.classList.remove("active");

            addelement.classList.remove("active");

        }



    });
}





// for pc
//  jeux de la function pour HOME
addBgAndActive(HOME, urlHOME, 0, 0, classActive.HOMEactive, DESTINATION, CREW, TECHNOLOGY, HOME);

// jeux de la function pour DESTINATION
addBgAndActive(DESTINATION, urlDESTINATION, 0, 0, classActive.DESTINATIONactive, HOME, CREW, TECHNOLOGY, DESTINATION);

// jeux de la function pour CREW
addBgAndActive(CREW, urlCREW, 0, 0, classActive.CREWactive, HOME, DESTINATION, TECHNOLOGY, CREW);

// jeux de la function pour TECHNOLOGY
addBgAndActive(TECHNOLOGY, urlTECHNOLOGY, 0, 0, classActive.TECHNOLOGYactive, HOME, DESTINATION, CREW, TECHNOLOGY);







// for Tablet

//  jeux de la function pour HOME
addBgAndActive(HOME, 0, urlHOME_Tablet, 0, classActive.HOMEactive, DESTINATION, CREW, TECHNOLOGY, HOME);

// jeux de la function pour DESTINATION
addBgAndActive(DESTINATION, 0, urlDESTINATION_Tablet, 0, classActive.DESTINATIONactive, HOME, CREW, TECHNOLOGY, DESTINATION);

// jeux de la function pour CREW
addBgAndActive(CREW, 0, urlCREW_Tablet, 0, classActive.CREWactive, HOME, DESTINATION, TECHNOLOGY, CREW);

// jeux de la function pour TECHNOLOGY
addBgAndActive(TECHNOLOGY, 0, urlTECHNOLOGY_Tablet, 0, classActive.TECHNOLOGYactive, HOME, DESTINATION, CREW, TECHNOLOGY);






// for mobile

//  jeux de la function pour HOME
addBgAndActive(HOME, 0, 0, urlHOME_Mobile, classActive.HOMEactive, DESTINATION, CREW, TECHNOLOGY, HOME);

// jeux de la function pour DESTINATION
addBgAndActive(DESTINATION, 0, 0, urlDESTINATION_Mobile, classActive.DESTINATIONactive, HOME, CREW, TECHNOLOGY, DESTINATION);

// jeux de la function pour CREW
addBgAndActive(CREW, 0, 0, urlCREW_Mobile, classActive.CREWactive, HOME, DESTINATION, TECHNOLOGY, CREW);

// jeux de la function pour TECHNOLOGY
addBgAndActive(TECHNOLOGY, 0, 0, urlTECHNOLOGY_Mobile, classActive.TECHNOLOGYactive, HOME, DESTINATION, CREW, TECHNOLOGY);










////////////////////////////////
// the js pour la l apparition et la disparition de la modale du format mobile
/////////////////////
const hamburger = document.getElementById("hamburger");
const barreGenerale = document.getElementById("barreGenerale");
const close_icone = document.getElementById("close_icone");


// the js pour la l apparition de la modale
hamburger.addEventListener("click", () => {

    barreGenerale.classList.remove("none");
    hamburger.classList.remove("block");

    barreGenerale.classList.add("block");
    hamburger.classList.add("none");

    barreGenerale.style.marginTop = "-16px";




})


// the js pour l'apparition menu hamburger
close_icone.addEventListener("click", () => {

    barreGenerale.classList.remove("block");
    hamburger.classList.remove("none");

    barreGenerale.classList.add("none");
    hamburger.classList.add("block");

      

})






























async function getResolution() {
    alert("Votre résolution d'écran est: " + screen.width + "x" + screen.height);
}