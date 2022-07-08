export default async function destination() {
    

const moon_picture = document.getElementById("moon");
const satelite1 = document.getElementById("satelite1");
const satelite2 = document.getElementById("satelite2");
const satelite3 = document.getElementById("satelite3");
const satelite4 = document.getElementById("satelite4");
const h1 = document.getElementById("h1");
const firstP = document.getElementById("firstP");
const distance1 = document.getElementById("distance1");
const distance2 = document.getElementById("distance2");


async function getdataForDestination() {

    const res = await fetch("../../data.json");
    const data = await res.json();
    const data1 = await data.destinations

    return data1;



}


// l'objet qui enregistre la verification de la class active
const classActiveDestination = {
    satelite1ctive: satelite1.classList.contains("active"),
    satelite2active: satelite2.classList.contains("active"),
    satelite3ctive: satelite3.classList.contains("active"),
    satelite4active: satelite4.classList.contains("active")

}

// la fuction  qui deplace la classActive
const addBgAndActive2 = (list, un, deux, trois) => {
    list.addEventListener("click", () => {
        // for ajoute la class active et l enleve dans le cas d'un phone

        if (list.classList.contains("active2") == false && screen.width >= 375) {
            un.classList.remove("active2");
            deux.classList.remove("active2");
            trois.classList.remove("active2");

            list.classList.add("active2");

        } 
        // else if (screen.width <= 375) {
        //     un.classList.remove("active2");
        //     deux.classList.remove("active2");
        //     trois.classList.remove("active2");

        //     list.classList.remove("active2");

        // }



    });
}



// the even for 1er satelite
addBgAndActive2(satelite1, satelite2, satelite3, satelite4);

satelite1.addEventListener("click", async () => {
    const david = await getdataForDestination();

    moon_picture.setAttribute("src", david[0].images.png);

    // console.log(david);

    h1.innerHTML = david[0].name;

    firstP.innerHTML = david[0].description;


    distance1.textContent = david[0].distance;


    distance2.textContent = david[0].travel;



    




})




// the even for 2er satelite

addBgAndActive2(satelite2, satelite1, satelite3, satelite4);

satelite2.addEventListener("click", async () => {

    const david = await getdataForDestination();

    moon_picture.setAttribute("src", david[1].images.png);

    // console.log(david[1]);

    h1.innerHTML = david[1].name;

    firstP.innerHTML = david[1].description;

    distance1.textContent = david[1].distance;
    distance2.textContent = david[1].travel;


})




// the even for 3er satelite
addBgAndActive2(satelite3, satelite2, satelite1, satelite4);

satelite3.addEventListener("click", async () => {

    const david = await getdataForDestination();

    moon_picture.setAttribute("src", david[2].images.png);

    // console.log(david[2]);

    h1.innerHTML = david[2].name;

    firstP.innerHTML = david[2].description;

    distance1.textContent = david[2].distance;
    distance2.textContent = david[2].travel;

})





// the even for 4er satelite
addBgAndActive2(satelite4, satelite2, satelite3, satelite1);
satelite4.addEventListener("click", async () => {

    const david = await getdataForDestination();

    moon_picture.setAttribute("src", david[3].images.png);

    // console.log(david[3]);

    h1.innerHTML = david[3].name;

    firstP.innerHTML = david[3].description;

    distance1.textContent = david[3].distance;
    distance2.textContent = david[3].travel;
})





}