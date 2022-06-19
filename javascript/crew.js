const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const radio4 = document.getElementById("radio4");

const h2_crew = document.getElementById("h2_crew");
const h1_crew = document.getElementById("h1_crew");
const paragraphe_crew = document.getElementById("paragraphe_crew");
const img_crew = document.getElementById("img_crew");

async function getdataForCrew() {

    const res = await fetch("../../data.json");
    const data = await res.json();
    const data1 = await data.crew;
    // console.log(data1);

    return data1;



}


async function change_crew(index) {

     const dataCrew = await getdataForCrew();

    img_crew.setAttribute("src", dataCrew[index].images.png);
    

    // console.log(david);

    h2_crew.textContent= dataCrew[index].role;

    h1_crew.textContent = dataCrew[index].name;

    paragraphe_crew.textContent = dataCrew[index].bio;
    
}


radio1.addEventListener("change",async () => {
    change_crew(0);
})




radio2.addEventListener("change",async () => {
    change_crew(1);
})


radio3.addEventListener("change",async () => {
    change_crew(2);
})


radio4.addEventListener("change",async () => {
    change_crew(3);
})
