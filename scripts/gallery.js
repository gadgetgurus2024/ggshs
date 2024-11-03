
let folder='images/gallery/'

for(let i=1; i<10;i++){
    
    let flexContainer=document.createElement('div')
    let imageContainer=document.createElement('div')
    let photo=document.createElement('img')
    photo.setAttribute('src',folder+i+'.jpg')

    imageContainer.appendChild(photo)
    flexContainer.appendChild(imageContainer)
    flexContainer.classList.add('photos')
    //document.body.appendChild(flexContainer)
}





