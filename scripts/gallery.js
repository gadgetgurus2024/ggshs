
let folder='images/gallery/'

for(let i=1; i<27;i++){
    
    //let flexContainer=document.createElement('div')
    //let imageContainer=document.createElement('div')
    let photo=document.createElement('img')
    photo.setAttribute('src',folder+i+'.jpg')
    photo.style.margin='10px'

    //imageContainer.appendChild(photo)
    //flexContainer.appendChild(imageContainer)
   
    document.body.appendChild(photo)
    //flexContainer.classList.add('memories')
    
    //console.log(folder+i);
    
}

let loading=document.createElement('h2')
loading.innerHTML='This is just the tip of the iceberg. <br>More to come soon.'
document.body.appendChild(loading)





