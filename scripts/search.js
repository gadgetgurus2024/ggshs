
let allGrad=localStorage.getItem('allStudents');
let arrayAllGrad=allGrad.split(',');
let allGradCase=arrayAllGrad.map((lCase)=>lCase.toLowerCase());

let comPhotos=localStorage.getItem('commercial');
let arrayComPhotos=comPhotos.split(',');

let sciGrad=localStorage.getItem('gradStudents');
let arraySciGrad=sciGrad.split(',').sort();


let ext=localStorage.getItem('File_Extension');

let searchBtn=document.getElementById('search-btn')
searchBtn.addEventListener('click',searchFunc)
searchBtn.addEventListener('click',displayResult)
searchBtn.addEventListener('click', removeNodes)
searchBtn.addEventListener('click', searchGrad)

//------------------------------------
let result=[];

console.log(result.length)

function searchFunc(){
    let searchBox=document.getElementById('search-txt').value.toLowerCase();
    result=allGradCase.filter(student=>student.includes(searchBox));
}

function displayResult() {
    console.log(result);
}

photos="images/SS_3_ALL/";

//------------------------------------

function removeNodes() {
  
for (let i=0; i<arraySciGrad.length; i++){
let pix=document.getElementById('grad');
pix.remove()
}

}

function removeFilterGrad() {
    
    searchBtn.disabled=false;
    for (i=0; i<result.length;i++){
    let filterPix=document.getElementById('gradFilter')
    filterPix.remove()
    }
filterInput.value=''
}

let filterInput=document.getElementById('search-txt')
filterInput.addEventListener('click',removeFilterGrad)
//----------------------------------
function searchGrad() { 
    
let comPhotosCase=arrayComPhotos.map((lCase)=>lCase.toLowerCase());
searchBtn.disabled=true;
let mainContent=document.createElement("main");

for (let i=0; i<result.length; i++){

    if(comPhotosCase.includes(result[i])){
        ext='.png'  
    }

    let divContent=document.createElement("div");
    divContent.setAttribute('id','gradFilter')
    let passport=document.createElement("img");
    passport.setAttribute("src", photos + result[i]+ext);
    let studName=document.createElement("p");
    studName.textContent=result[i]//toUpperCase();
    
    divContent.appendChild(passport);       
    divContent.appendChild(studName);
    mainContent.appendChild(divContent);

    divContent.classList.add("passports");
    document.body.appendChild(mainContent); 
    mainContent.classList.add("searchPage");
   ext='.jpg'
            }
            
        } 

 
window.addEventListener('load',grads);
//---------------------------------    
    function grads() {
  
    let mainContent=document.createElement("main");
   mainContent.classList.add("mainPage");
                  
     for (let i=0; i<arraySciGrad.length; i++){
  
        if(arrayComPhotos.includes(arraySciGrad[i])){
            ext='.png'
           }

         let divContent=document.createElement("div");
         divContent.setAttribute('id','grad')
         let passport=document.createElement("img");
         
         
         passport.setAttribute("src", photos + arraySciGrad[i]+ext);
     
         let studName=document.createElement("p");
         studName.textContent=arraySciGrad[i];
         divContent.appendChild(passport);
                    
         divContent.appendChild(studName);
         mainContent.appendChild(divContent);
             
         divContent.classList.add("passports");
         document.body.appendChild(mainContent); 
        ext='.jpg'
                 }
                 
             } 

//-------------------------------------
//document.addEventListener('click',()=>window.close('search.html'))