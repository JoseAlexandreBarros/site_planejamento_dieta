
var count1=0;
var count2=0;
var count3=0;
var count4=0;
var count5=0;
var count6=0;
var count7=0;
var count8=0;
var count9=0;
var tipos=0;
// var tipos1="nulo"

const updateValue1=()=>{
    count1+=1;
    value1.innerHTML=count1;
    
}

const updateValue2=()=>{
    count1-=1;
    if (count1 < 0){
        count1=0;
    }
    value1.innerHTML=count1;
}

const updateValue3=()=>{
    count2+=1;
    value2.innerHTML=count2;
}

const updateValue4=()=>{
    count2-=1;
    if (count2 < 0){
        count2=0;
    }
    value2.innerHTML=count2;
}

const updateValue5=()=>{
    count3+=1;
    value3.innerHTML=count3;
}

const updateValue6=()=>{
    count3-=1;
    if (count3 < 0){
        count3=0;
    }
    value3.innerHTML=count3;
}

const updateValue7=()=>{
    count4+=1;
    value4.innerHTML=count4;
}

const updateValue8=()=>{
    count4-=1;
    if (count4 < 0){
        count4=0;
    }
    value4.innerHTML=count4;
}

const updateValue9=()=>{
    count5+=1;
    value5.innerHTML=count5;
}

const updateValue10=()=>{
    count5-=1;
    if (count5 < 0){
        count5=0;
    }
    value5.innerHTML=count5;
}

const updateValue11=()=>{
    count6+=1;
    value6.innerHTML=count6;
}

const updateValue12=()=>{
    count6-=1;
    if (count6 < 0){
        count6=0;
    }
    value6.innerHTML=count6;
}

const updateValue13=()=>{
    count7+=1;
    value7.innerHTML=count7;
}

const updateValue14=()=>{
    count7-=1;
    if (count7 < 0){
        count7=0;
    }
    value7.innerHTML=count7;
}

const updateValue15=()=>{
    count8+=1;
    value8.innerHTML=count8;
}

const updateValue16=()=>{
    count8-=1;
    if (count8 < 0){
        count8=0;
    }
    value8.innerHTML=count8;
}


const updateValue17=()=>{
    count9+=1;
    value9.innerHTML=count9;
}

const updateValue18=()=>{
    count9-=1;
    if (count9 < 0){
        count9=0;
    }
    value9.innerHTML=count9;
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

 function escondida1() {
    document.getElementById("pan").value = count1;
    document.getElementById("mio").value = count2;
    document.getElementById("aro").value = count3;


 }
  
 function funbife(){
    document.getElementById("prot").innerHTML = "Nada como um bom churrasco! Proteínas são importatnes para crescer grande e forte. Entretanto, sinto pena dos bixinhos";
}

function funpeixe(){
    document.getElementById("prot").innerHTML = "O mar é essencial para muitas culturas , pois oferece alimento como peixes em grandes quantidades. Peixes são muito bons para a saúde. Entretanto,devemos tomar cuidado com a sobre pesca";
}

function funovo(){
    document.getElementById("prot").innerHTML = "Fonte de proteína rápida e fácil";
}

function escondida2() {
    document.getElementById("bif").value = count4;
    document.getElementById("pex").value = count5;
    document.getElementById("ovo").value = count6;


 }

 function funchocolate(){
    document.getElementById("doce").innerHTML = "Chocolate!Eu só quero chocolate! Muito apreciado pelos astecas antes dos europeus chegarem.Uma verdadeira bomba de calorias";
}

function funsorvete(){
    document.getElementById("doce").innerHTML = "Podem ser de vários gostos e tipos. Quando eu era criança, vinha presente com os picolés.";
}

function funbombom(){
    document.getElementById("doce").innerHTML = "Pode ser pequeno, mas vem com muita energia. Eu gosto da caixa que vem com bombons sortidos.";
}

function escondida3() {
    document.getElementById("cho").value = count7;
    document.getElementById("sor").value = count8;
    document.getElementById("bom").value = count9;


 }


 const tiposs=()=>{
    document.getElementById("titulo").innerHTML="";
    
    
    var select = document.getElementById("tipos");
    tipos = select.options[select.selectedIndex].value;
    tipos=parseInt(tipos);
    if(tipos==1){
        document.getElementById("titulo").innerHTML="Você está num plano iniciante!";
    }
    if(tipos==2){
        document.getElementById("titulo").innerHTML="Você está num plano avançado!";
    }
    if(tipos==3){
        document.getElementById("titulo").innerHTML="Você está num plano greve de fome!";
    }
    
    
    
}



const barra_carb=()=>{
    if(tipos==0){
        document.getElementById("titulo").innerHTML="É necessário iniciar  um plano.";
        return
    }
    
    if(tipos==1){
        total=300;
    }
    if(tipos==2){
        total=200;
    }
    if(tipos==3){
        total=150;
    }
    var calorias=count1*20+count2*10+count3*5;
    
    if(calorias==0){
        console.log("aqui");
        document.getElementById("barra1txt").innerHTML="Não há comida selecionada,você tem que comer algo!";
        const progresso=document.querySelector(".barra1 div")
        progresso.setAttribute("style","width:0%")
        return
    }
    if(calorias>total){
        // document.getElementById("carboss").innerHTML="O total de calorias ultrapassou o permitido!";
        barra1txt.innerHTML="O total de calorias ultrapassou o permitido!";
        const progresso=document.querySelector(".barra1 div")
        progresso.setAttribute("style","width:100%")
        return
    }
    
    
    barra1txt.innerHTML=`Consumindo ${calorias} de um total de ${total} calorias`;
    porcentagem=calorias/total;
    porcentagem=porcentagem*100
    const progresso=document.querySelector(".barra1 div")
    progresso.setAttribute("style",`width:${porcentagem}%`)

 }




const barra_prot=()=>{
    if(tipos==0){
        document.getElementById("titulo").innerHTML="É necessário iniciar um plano.";
        return
    }
    
    if(tipos==1){
        total=200;
    }
    if(tipos==2){
        total=150;
    }
    if(tipos==3){
        total=100;
    }
    calorias=count4*15+count5*10+count6*5;
    if(calorias==0){
        document.getElementById("barra2txt").innerHTML="Não há comida selecionada,você tem que comer algo!";
        const progresso=document.querySelector(".barra2 div")
        progresso.setAttribute("style","width:0%")
        return
    }
    
    if(calorias>total){
        document.getElementById("barra2txt").innerHTML="O total de calorias ultrapassou o permitido!";
        const progresso=document.querySelector(".barra2 div")
        progresso.setAttribute("style","width:100%")
        return
    }
    
    barra2txt.innerHTML=`Consumindo ${calorias} de um total de ${total} calorias`;
    porcentagem=calorias/total;
    porcentagem=porcentagem*100
    const progresso=document.querySelector(".barra2 div")
    progresso.setAttribute("style",`width:${porcentagem}%`)

 }

 const barra_doce=()=>{
    if(tipos==0){
        document.getElementById("titulo").innerHTML="É necessário iniciar um plano.";
        return
    }
    
    if(tipos==1){
        total=150;
    }
    if(tipos==2){
        total=100;
    }
    if(tipos==3){
        total=75;
    }
    calorias=count7*30+count8*20+count9*5;
    if(calorias==0){
        document.getElementById("barra3txt").innerHTML="Não há comida selecionada,você tem que comer algo!";
        const progresso=document.querySelector(".barra3 div")
        progresso.setAttribute("style","width:0%")
        return
    }
    
    if(calorias>total){
        document.getElementById("barra3txt").innerHTML="O total de calorias ultrapassou o permitido!";
        const progresso=document.querySelector(".barra3 div")
        progresso.setAttribute("style","width:100%")
        return
    }
    
    barra3txt.innerHTML=`Consumindo ${calorias} de um total de ${total} calorias`;
    porcentagem=calorias/total;
    porcentagem=porcentagem*100
    const progresso=document.querySelector(".barra3 div")
    progresso.setAttribute("style",`width:${porcentagem}%`)

 }

function escondida(){
    document.getElementById("pan").value = count1;
    document.getElementById("mio").value = count2;
    document.getElementById("aro").value = count3;
    document.getElementById("bif").value = count4;
    document.getElementById("pex").value = count5;
    document.getElementById("ovo").value = count6;
    document.getElementById("cho").value = count7;
    document.getElementById("sor").value = count8;
    document.getElementById("bom").value = count9;
    document.getElementById("tip").value = tipos;
}