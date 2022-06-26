export default async function technologie() {
    


const button1 = document.getElementById("button1_techno");
const button2 = document.getElementById("button2_techno");
const button3 = document.getElementById("button3_techno");
const h4 = document.getElementById("h4_techno");
const h1 = document.getElementById("h1_techno");
const p = document.getElementById("p_techno");
const img = document.querySelector(".right_techno img");


// console.log();



async function getdataForTechno() {

    const res = await fetch("../../data.json");
    const data = await res.json();
    const data1 = await data.technology;

    return data1;

}


// Evenement pour le boutton1 
 
button1.addEventListener("click", async () => {
    const data_vue = await getdataForTechno();


    if (screen.width>=769) {
        
        img.setAttribute("src",data_vue[0].images.portrait);
    }

    if (screen.width<=768) {
        
        img.setAttribute("src",data_vue[0].images.landscape);
    }
    // console.log(data_vue[0].images.landscape);

    
h4.textContent ="The terminology...";
h1.innerHTML = data_vue[0].name;
p.innerHTML = data_vue[0].description;



    button2.classList.remove("checked");
    button3.classList.remove("checked");
    button1.classList.add("checked");


    
});




// Evenement pour le boutton2 
 
button2.addEventListener("click", async () => {
    const data_vue = await getdataForTechno();

    if (screen.width>=769) {
        
        img.setAttribute("src",data_vue[1].images.portrait);
    }

    if (screen.width<=768) {
        
        img.setAttribute("src",data_vue[1].images.landscape);
    }

    // console.log(data_vue[0].images.landscape);

    
h4.textContent ="The terminology...";
h1.innerHTML = data_vue[1].name;
    p.innerHTML = data_vue[1].description;
    

    button2.classList.add("checked");
    button3.classList.remove("checked");
    button1.classList.remove("checked");

});


// Evenement pour le boutton3 
 
button3.addEventListener("click", async () => {
    const data_vue = await getdataForTechno();

    
    if (screen.width>=769) {
        
        img.setAttribute("src",data_vue[2].images.portrait);
    }

    if (screen.width<=768) {
        
        img.setAttribute("src",data_vue[2].images.landscape);
    }
    // console.log(data_vue[0].images.landscape);

    
h4.textContent ="The terminology...";
h1.innerHTML = data_vue[2].name;
    p.innerHTML = data_vue[2].description;
    
    button2.classList.remove("checked");
    button3.classList.add("checked");
    button1.classList.remove("checked");
});





}

