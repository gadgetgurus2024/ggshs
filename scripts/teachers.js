
let teachersId=['OYEFESO','SOBIYE','SANGOESAN','OLUWADAIRO','OLAGBUJI','OGUNTOYE','DOSUMU','GIWA','TIJANI','ADEYEMO','JAMIU','ADESOYE','SAFIRIYU','JINADU','IDOWU','ISITUA','BANKOLE','ABDULWAHAB','UBA','OGBATA','AJOSE','THANNI','AJAO','PHILLIPS','SHONAIKE'
]

let teacherName=[
'OYEFESO ADENIKE OLUWASEUN',
'SOBIYE JULIUS TUNMISE',
'SANGOESAN DEBORAH OLATOYOSI',
'OLAGBUJI  EMMANUEL  OLU',
'DADA OLUWAKEMI OLUWAFUNMILAYO',
'OGUNTOYE OLUTOPE JANET',
'DOSUMU MUSILIMOT ABIMBOLA',
'GIWA MOSHOOD OLANREWAJU', 
'TIJANI MOSES SUNDAY',
'ADEYEMO MUTIU SANJO',
'JAMIU TAOFIK AYINLA',
'ADESOYE ADENIKE ESTHER', 
'SAFIRIYU  KAOSARA OLAMIDE', 
'JINADU BABATUNDE KAZEEM',
'IDOWU  OLUWAKEMI ADEBIMPE',
'ISITUA ANGELA KACHIE', 'BANKOLE OLUSOLA SUNDAY',
'ABDULWAHAB IBRAHIM OLASUNKANMI',
'UBA UZOMA JULIANA','OGBATA VICTORIA',
'AJOSE SODIQ OLASUNKANMI',
'THANNI SHARAFAT ANIKE', 
'AJAO SAHEEDAT  KEHINDE', 
'OLANIYI MOYOSORE FRANCIS',
'PHILLIPS  TOSIN BLESSING', 
'SHONAIKE  ANUOLUWAPO  TOPE'
]

let pixFolder='images/teachers_Pics/'

function clearPage() {
for (let i=0;i<teachersId.length;i++){
    let teachers=document.getElementById(teachersId[i]).remove()
    }   
}
//-------Teachers Review Page----------

let oyefeso=document.getElementById('OYEFESO')
oyefeso.addEventListener('click',()=>{
clearPage()
let teacherImage=document.createElement('img')
teacherImage.setAttribute('src',pixFolder+teacherName[0]+'.jpg')
console.log(teacherName);

let heading=document.createElement('h1')
heading.innerText='OYEFESO ADENIKE'; 

let review=document.createElement('p')
review.innerText='Computers work in term of 0s and 1s known as binary digit (i.e. Base 2). It is also called bits (short form of binary digits). This is the only language that the computer understands. Any data or information supplied to the Computer such as letters, figures and symbols must be converted to the language before computer can process such data or information. This is the smallest unit of information that can be stored in a computer is called bit.'
document.body.appendChild(teacherImage);
document.body.appendChild(heading);
document.body.appendChild(review) 
})

// ------------------------------------

let sobiye=document.getElementById('SOBIYE')
sobiye.addEventListener('click',()=>{
clearPage()
let teacherImage=document.createElement('img')
teacherImage.setAttribute('src',pixFolder+teacherName[1]+'.jpg')
console.log(teacherName);

let heading=document.createElement('h1')
heading.innerText='SOBIYE JULIUS'; 

let review=document.createElement('p')
review.innerText='Computers work in term of 0s and 1s known as binary digit (i.e. Base 2). It is also called bits (short form of binary digits). This is the only language that the computer understands. Any data or information supplied to the Computer such as letters, figures and symbols must be converted to the language before computer can process such data or information. This is the smallest unit of information that can be stored in a computer is called bit.'
document.body.appendChild(teacherImage);
document.body.appendChild(heading);
document.body.appendChild(review) 
})
//-------------------------------------



