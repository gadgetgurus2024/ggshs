
let teachersId=['OYEFESO','SOBIYE','SANGOESAN','OLUWADAIRO','OLAGBUJI','OGUNTOYE','DOSUMU','GIWA','TIJANI','ADEYEMO','JAMIU','ADESOYE','SAFIRIYU','JINADU','IDOWU','ISITUA','BANKOLE','ABDULWAHAB','UBA','OGBATA','AJOSE','THANNI','AJAO','PHILLIPS','SHONAIKE'
]

let teacherName=[
'OYEFESO ADENIKE OLUWASEUN',
'SOBIYE JULIUS TUNMISE',
'SANGOESAN DEBORAH OLATOYOSI',
'OLUWADAIRO BOLAJI',
'OLAGBUJI EMMANUEL OLU',
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

let heading=document.createElement('h2')
let heading2=document.createElement('h3')
heading.innerText='Mrs Oyefeso, A.O'; 
heading2.innerText='Principal'; 
 

let para1=document.createElement('p')
para1.innerHTML='<p><b>Mrs Oyefeso Adenike</b> is  not only a leader but also a true inspiration to everyone in our school.Our Principal not only a leader but also a true inspiration to everyone at our school.Her warmth and kindness resonate with students and staff alike, making us feel like we are part of her family. She treats everyone as if they were her own children, always looking out for our well-being, progress, and success.</p>'

let para2=document.createElement('p')
para2.innerHTML='<p><b>Mrs Oyefeso</b> is genuinely committed to creating a supportive and nurturing environment where everyone feels valued and heard. Her door is always open to students, teachers, and parents alike, whether it’s for guidance, support, or encouragement on academic and personal issues alike. This openness fosters trust and makes our school feel like a true family.</p>'

let para3=document.createElement('p')
para3.innerHTML='<p>One of <b>Mrs Oyefeso </b>outstanding qualities is her ability to take on challenges with enthusiasm. Rather than viewing obstacles as setbacks, she treats each one as an opportunity to grow and learn. This positive attitude sets a powerful example for us all, teaching us resilience, discipline, and the value of hard work. <b>Mrs Oyefeso</b> approach encourages us to face our own challenges with courage and determination.</p>'

let para4=document.createElement('p')
para4.innerHTML='<p>As a principal, she goes above and beyond the typical duties of her role.<b>Mrs Oyefeso</b> motivates us to aim higher, believe in ourselves, and pursue our goals wholeheartedly. Her dedication to each individual’s growth both academically and personally is remarkable, and it makes a real difference in our lives. She always says,"Good girls make good ladies, good ladies make good wives and good wives make good mothers. You cannot give what you do not have"</p>'

let para5=document.createElement('p')
para5.innerHTML='<p>In summary, our principal,<b>Mrs Oyefeso</b> is a role model who leads with compassion, strength, and vision, and we are incredibly fortunate to have her guiding us. We are eternally grateful for her presence and guidance.</p>'

let writer=document.createElement('p')
writer.innerHTML='<H4>Babalola Aishat<br>Head Girl<br>2023/2024</H4>'
document.body.appendChild(teacherImage);
document.body.appendChild(heading);
document.body.appendChild(para1) 
document.body.appendChild(para2)
document.body.appendChild(para3) 
document.body.appendChild(para4)
document.body.appendChild(para5) 
document.body.appendChild(writer)
})


//------------------------------------

let sobiye=document.getElementById('SOBIYE')
sobiye.addEventListener('click',()=>{
clearPage()
let teacherImage=document.createElement('img')
teacherImage.setAttribute('src',pixFolder+teacherName[1]+'.jpg')
console.log(teacherName);

let heading=document.createElement('h2')
let heading2=document.createElement('h3')
heading.innerText='Mr Sobiye, J.T'; 
heading2.innerText='Vice Principal(Admin)'; 
 

let para1=document.createElement('p')
para1.innerHTML='<p><b>Mrs Oyefeso Adenike</b> is  not only a leader but also a true inspiration to everyone in our school.Our Principal not only a leader but also a true inspiration to everyone at our school.Her warmth and kindness resonate with students and staff alike, making us feel like we are part of her family. She treats everyone as if they were her own children, always looking out for our well-being, progress, and success.</p>'

let para2=document.createElement('p')
para2.innerHTML='<p><b>Mrs Oyefeso</b> is genuinely committed to creating a supportive and nurturing environment where everyone feels valued and heard. Her door is always open to students, teachers, and parents alike, whether it’s for guidance, support, or encouragement on academic and personal issues alike. This openness fosters trust and makes our school feel like a true family.</p>'

let para3=document.createElement('p')
para3.innerHTML='<p>One of <b>Mrs Oyefeso </b>outstanding qualities is her ability to take on challenges with enthusiasm. Rather than viewing obstacles as setbacks, she treats each one as an opportunity to grow and learn. This positive attitude sets a powerful example for us all, teaching us resilience, discipline, and the value of hard work. <b>Mrs Oyefeso</b> approach encourages us to face our own challenges with courage and determination.</p>'

let para4=document.createElement('p')
para4.innerHTML='<p>As a principal, she goes above and beyond the typical duties of her role.<b>Mrs Oyefeso</b> motivates us to aim higher, believe in ourselves, and pursue our goals wholeheartedly. Her dedication to each individual’s growth both academically and personally is remarkable, and it makes a real difference in our lives. She always says,"Good girls make good ladies, good ladies make good wives and good wives make good mothers. You cannot give what you do not have"</p>'

let para5=document.createElement('p')
para5.innerHTML='<p>In summary, our principal,<b>Mrs Oyefeso</b> is a role model who leads with compassion, strength, and vision, and we are incredibly fortunate to have her guiding us. We are eternally grateful for her presence and guidance.</p>'

let writer=document.createElement('p')
writer.innerHTML='<H4>Babalola Aishat<br>Head Girl<br>2023/2024</H4>'
document.body.appendChild(teacherImage);
document.body.appendChild(heading);
document.body.appendChild(para1) 
document.body.appendChild(para2)
document.body.appendChild(para3) 
document.body.appendChild(para4)
document.body.appendChild(para5) 
document.body.appendChild(writer)
})


//------------------------------------

let dosumu=document.getElementById('DOSUMU')
dosumu.addEventListener('click',()=>{
clearPage()
let teacherImage=document.createElement('img')
teacherImage.setAttribute('src',pixFolder+teacherName[6]+'.jpg')
console.log(teacherName);

let heading=document.createElement('h2')
let heading2=document.createElement('h3')
heading.innerText='Mr Dosunmu, M.A'; 
heading2.innerText='HOD,(Science)'; 
 

let para1=document.createElement('p')
para1.innerHTML='<P>As I reflect on my academic journey one teacher stands out for her exceptional dedication, care and impact in my life: our very own school nurse <B>Mrs Musilimot Dosunmu.</B> With her unique blend of medical expertise and passion for agriculture, she has created a lasting impression on this great school.</P>'

let para2=document.createElement('p')
para2.innerHTML='<p>In the classroom, she brings enthusiasm and patience, making difficult topics easy to understand. I fondly remember how usually she gives us the opportunity to be "teachers for a day" just to ensure we understood what she has been teaching.Her passion is contagious, and her classes are always filled with excitement and curiousity. </p>'

let para3=document.createElement('p')
para3.innerHTML='<p>Meanwhile, as our school nurse <b>Mrs Dosunmu</b> provides passionate care and support as our mother would, always putting students health and wellbeing first.Whether tending to a bruised knee or offering words of comfort to a student qho is having her monthly flow, she has a gift for making each student feel seen and heard.</p>'

let para4=document.createElement('p')
para4.innerHTML='<p>What makes <b>Mrs Dosunmu</b> truly special is her ability to connect with each of us including thr teachers.She literally knows our names and faces, and she takes genuine interest in our lives.We are very lucky to have <b>Mrs Dosunmu</b> as our Agric teacher and school nurse.She is an inspiration and role model, showing us what it means to care for others and make a positive impact</p>'

let writer=document.createElement('p')
writer.innerHTML='<H4>Ameh Praise<br>Health Prefect<br>2023/2024</H4>'
document.body.appendChild(teacherImage);
document.body.appendChild(heading);
document.body.appendChild(para1) 
document.body.appendChild(para2)
document.body.appendChild(para3) 
document.body.appendChild(para4)
//document.body.appendChild(para5) 
document.body.appendChild(writer)
})

//------------------------------------

let giwa=document.getElementById('GIWA')
giwa.addEventListener('click',()=>{
clearPage()
let teacherImage=document.createElement('img')
teacherImage.setAttribute('src',pixFolder+teacherName[7]+'.jpg')
console.log(teacherName);

let heading=document.createElement('h2')
let heading2=document.createElement('h3')
heading.innerText='Mr Giwa, M.O'; 
heading2.innerText='Year Tutor,(SS 3)'; 
 

let para1=document.createElement('p')
para1.innerHTML='<h2>A Poem to my Math Teacher, Mr Giwa:</h2><i>A teacher of numbers, a guide on our way,<br>Mr Giwa, a name that is synonymous with math day.<br>With equation and theorems, he leads our quest<br>For knowledge and understanding, he puts us to the test.</i>'

let para2=document.createElement('p')
para2.innerHTML='<i><br>His patience is legendary, his passion so bright,<br>He breaks down complexities, aking math a delight. <br>From algebra to geometry, he takes us on a ride, <br>Explaining concecpts with ease, gliding with pride.</i>'

let para3=document.createElement('p')
para3.innerHTML='<i><br>With marker in hand and a smile so wide, <br>Mr Giwa makes math problems feel less daunting inside. <br>He encourages our questions, our thoughts and our fears, <br>and helps us discover answers through laughter and tears.</i>'

let para4=document.createElement('p')
para4.innerHTML='<i><br>A mentor, a leader, a shining light, <br>Mr Giwa inspires us to reach new heights. <br>His love for math contagious, it spreads like a flame, <br>Igniting curiosity, fostering a love for the game.</i>'

let para5=document.createElement('p')
para5.innerHTML='<i><br>Thank you, dear Mr Giwa, for all that you do,<br>For making math meaningful, and learning fun a new.<br>Your impact will last, long after we leave,<br>A lasting legacy, a heart that believes.</i>'

let writer=document.createElement('p')
writer.innerHTML='<H4>Ude Oluchi<br>SS 3A<br>2023/2024</H4>'
document.body.appendChild(teacherImage);
document.body.appendChild(heading);
document.body.appendChild(para1) 
document.body.appendChild(para2)
document.body.appendChild(para3) 
document.body.appendChild(para4)
document.body.appendChild(para5) 
document.body.appendChild(writer)
})

//----------------------------------
let adesoye=document.getElementById('ADESOYE')
adesoye.addEventListener('click',()=>{
clearPage()
let teacherImage=document.createElement('img')
teacherImage.setAttribute('src',pixFolder+teacherName[11]+'.jpg')
console.log(teacherName);

let heading=document.createElement('h2')
let heading2=document.createElement('h3')
heading.innerText='Mrs Adesoye, A. E'; 
heading2.innerText='Class Teacher,(SS 3C)'; 
 

let para1=document.createElement('p')
para1.innerHTML='In our school journey, teachers come and go, but a few truly make a lasting impact on our lives. <b>Mrs. Adenike Adesoye</> is one of those exceptional teachers whose influence goes beyond the classroom. She has been more than just a teacher; she has been a guide, a mentor, and a source of inspiration.'

let para2=document.createElement('p')
para2.innerHTML='<b>Mrs. Adesoye </b>has a unique way of making every lesson engaging and memorable. She has the remarkable ability to break down difficult topics into simple, easy-to-understand concepts, ensuring that each of us can follow along. Her patience and dedication to helping every student succeed are qualities that set her apart. No matter how challenging a lesson might be, Mrs. Adesoye never hesitates to go over it again until we all understand.'

let para3=document.createElement('p')
para3.innerHTML='Beyond academics, <b>Mrs. Adesoye</b> genuinely cares about each of us as individuals. She is always willing to listen, offer advice, and lend a helping hand when we need it. Whether it’s helping us through personal challenges or encouraging us before a big test, she is always there, ready to support us. Her kindness and empathy remind us that we are more than just students in her class; we are young people with our own dreams, struggles, and potential.'

let para4=document.createElement('p')
para4.innerHTML='One of the most valuable lessons we’ve learned from <b>Mrs. Adesoye </b>is the importance of respect, hard work, and integrity. She models these values in everything she does, showing us how to carry ourselves with dignity and treat others with kindness. Through her example, we are learning to be better people, not just better students.'

let para5=document.createElement('p')
para5.innerHTML='As we reflect on our time with <b>Mrs. Adenike Adesoye, </b>we feel incredibly grateful for her guidance, encouragement, and belief in us. She has helped shape our lives in ways that we will carry with us long after we leave her classroom. Thank you, Mrs. Adesoye, for being a truly wonderful teacher and role model. Your impact on our lives is profound, and we will always remember you with gratitude and respect.'

let writer=document.createElement('p')
writer.innerHTML='<H4>Adebayo Aishat <br>Special Duty Prefect<br>2023/2024</H4>'
document.body.appendChild(teacherImage);
document.body.appendChild(heading);
document.body.appendChild(para1) 
document.body.appendChild(para2)
document.body.appendChild(para3) 
document.body.appendChild(para4)
document.body.appendChild(para5) 
document.body.appendChild(writer)
})

//----------------------------------
let idowu=document.getElementById('IDOWU')
idowu.addEventListener('click',()=>{
clearPage()
let teacherImage=document.createElement('img')
teacherImage.setAttribute('src',pixFolder+teacherName[14]+'.jpg')
console.log(teacherName);

let heading=document.createElement('h2')
let heading2=document.createElement('h3')
heading.innerText='Mrs IDOWU, O. A'; 
heading2.innerText='Class Teacher,(SS 3A)'; 
 

let para1=document.createElement('p')
para1.innerHTML='I want to express my deepest gratitude for being an exceptional teacher and mentor. Your passion, patience, and dedication have made a significant impact on my life. Your lessons extended beyond academics, teaching me valuable life skills and inspiring me to reach my potential.'

let para2=document.createElement('p')
para2.innerHTML='<h3>Trust your girls, there is so much more to say...</H3><H4>UNLIMITED RESPECTS FOR THE BEST CLASS TEACHER!</h4>'



//let writer=document.createElement('p')
//writer.innerHTML='<H4>Adebayo Aishat <br>Special Duty Prefect<br>2023/2024</H4>'
document.body.appendChild(teacherImage);
document.body.appendChild(heading);
document.body.appendChild(para1) 
document.body.appendChild(para2)
 
//document.body.appendChild(writer)
})

//----------------------------------
let uba=document.getElementById('UBA')
uba.addEventListener('click',()=>{
clearPage()
let teacherImage=document.createElement('img')
teacherImage.setAttribute('src',pixFolder+teacherName[18]+'.jpg')
console.log(teacherName);

let heading=document.createElement('h2')
let heading2=document.createElement('h3')
heading.innerText='Mr Uba, U. J'; 
heading2.innerText='Class Teacher,(SS 3B)'; 
 

let para1=document.createElement('p')
para1.innerHTML='I am out of secondary school,well it has been a tough and a rough journey but God saw me through.First I wanna give a big shout out to my class teacher Mrs Uzoma UBA. She is a wonderful teacher, Like words cant ven describe how wonderful she is     From the very first time I met <b>Mrs Uba,</b> she is an exceptional educator '

let para2=document.createElement('p')
para2.innerHTML='She has created a transformative educatonal experience for countless students. Like I mean who would meet Mrs UBA and say she hasnt imparted your life in a positive way. She is a great counselor, whenever I need advice with something I go to her I know in a way or the other advice me' 
                

let para3=document.createElement('p')
para3.innerHTML='She has created a transformative educatonal experience for countless students. Like I mean who would meet Mrs UBA and say she hasnt imparted your life in a positive way. She is a great counselor, whenever I need advice with something I go to her I know in a way or the other advice me'

let para4=document.createElement('p')
para4.innerHTML='Mrs Uba I want to say that I love you so much. Thank you so much for everything'

let writer=document.createElement('p')
writer.innerHTML='<H4>Ikechukwu Chisom <br>SS 3 Art<br>2023/2024</H4>'
document.body.appendChild(teacherImage);
document.body.appendChild(heading);
document.body.appendChild(para1) 
document.body.appendChild(para2)
document.body.appendChild(para3) 
document.body.appendChild(para4)
//document.body.appendChild(para5) 
document.body.appendChild(writer)
})
