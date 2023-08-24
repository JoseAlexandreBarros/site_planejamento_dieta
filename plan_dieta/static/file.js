
let count1=0;

const updateValue1=()=>{
    count1+=1;
    value1.innerHTML=count1;
}





function bigImg(x) {
    x.style.height = "250px";
    x.style.width = "250px";
    }

function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
    }

function funpao(){
    document.getElementById("carb").innerHTML = "Nem só de pão viverá o homem. É o alimento mais marcante da sociedade ocidental.Cada sociedade tem seu próprio pão caracteristico. Contém considerável quantidade de calorias";
}

function funmilho(){
    document.getElementById("carb").innerHTML ="O milho é oriundo do novo mundo.Pode ser preparado de várias maneiras.Indispensável como pipoca para ver um filme. Por alguma razão, meu pai não gosta. Contém calorias em quantidade mediana";
}

function funarroz(){
    document.getElementById("carb").innerHTML ="Arroz é um prato típco da Ásia. Aqui no Brasil é comum estar na mesa. Eu pessoalmente gosto de curry e sushi. De fato um alimento muito saudável. Possui poucas calorias";
}