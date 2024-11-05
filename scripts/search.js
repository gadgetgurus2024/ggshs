
/*let allGrad=localStorage.getItem('allStudents');
let arrayAllGrad=allGrad.split(',');
let allGradCase=arrayAllGrad.map((lCase)=>lCase.toLowerCase());

let comPhotos=localStorage.getItem('commercial');
let arrayComPhotos=comPhotos.split(',');
console.log(arrayComPhotos);
*/

let gradDept=localStorage.getItem('gradStudents');
let arrayGradDept=gradDept.split(',').sort();
let arrayGradDeptCase=arrayGradDept.map((lCase)=>lCase.toLowerCase());
console.log(arrayGradDeptCase)


let ext=localStorage.getItem('File_Extension');

let searchBtn=document.getElementById('search-btn')
searchBtn.addEventListener('click',searchFunc)
searchBtn.addEventListener('click',displayResult)
searchBtn.addEventListener('click', removeNodes)
searchBtn.addEventListener('click', searchGrad)

//------------------------------------
let result=[];

function searchFunc(){
    let searchBox=document.getElementById('search-txt').value.toLowerCase();
    result=arrayGradDeptCase.filter(student=>student.includes(searchBox));
}

function displayResult() {
    console.log(result);
}

photos="images/SS_3_ALL/";

//------------------------------------

function removeNodes() {
  
for (let i=0; i<arrayGradDept.length; i++){
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
    
//let comPhotosCase=arrayComPhotos.map((lCase)=>lCase.toLowerCase());
searchBtn.disabled=true;
let mainContent=document.createElement("main");

for (let i=0; i<result.length; i++){

   /* if(comPhotosCase.includes(result[i])){
        ext='.png'  
    }
*/
    let divContent=document.createElement("div");
    divContent.setAttribute('id','gradFilter')
    let passport=document.createElement("img");
    
    /*
    passport.setAttribute("src", photos + result[i]+ext);
    console.log((photos+result[i]+ext));
*/
    passport.setAttribute('src',"../images/SS_3_ALL/"+result[i]+ext)
    let studName=document.createElement("p");
    studName.textContent=result[i].toUpperCase();
    studName.style.fontSize='16px'
    studName.style.fontFamily='monospace'
    
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
  /*
    let comPhotos=localStorage.getItem('commercial');
    let arrayComPhotos=comPhotos.split(',');
*/
    let mainContent=document.createElement("main");
   mainContent.classList.add("mainPage");
                  
     for (let i=0; i<arrayGradDept.length; i++){
  
    /*
        if(arrayComPhotos.includes(arrayGradDept[i])){
            ext='.png'
           }
*/
         let divContent=document.createElement("div");
         divContent.setAttribute('id','grad')
         let passport=document.createElement("img");
         
         
         passport.setAttribute("src", photos + arrayGradDept[i]+ext);
     
         let studName=document.createElement("p");
         studName.textContent=arrayGradDept[i];
         divContent.appendChild(passport);
                    
         divContent.appendChild(studName);
         mainContent.appendChild(divContent);
             
         divContent.classList.add("passports");
         document.body.appendChild(mainContent); 
        ext='.jpg'
                 }
                 
             } 

//-------------------------------------
