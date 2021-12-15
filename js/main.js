const menuItem = document.querySelector('.mobile-item');
const closeMobileItems = document.querySelectorAll('.closeMenu');
const displayMobileMenu = () => {
  menuItem.style.display = 'block';
};
const closeMobileMenu = () => {
  menuItem.style.display = 'none';
};
document.querySelector('.openMenu').addEventListener('click', displayMobileMenu);
closeMobileItems.forEach(((element) => element.addEventListener('click', closeMobileMenu)));
/* Project Detail objects */
const projectDetail = [{
  title: 'Tonic',
  exprience: ['CANOPY', 'Back End Dev', '2015'],
  desription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['html', 'css', 'javascript'],
  popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  image: './images/Snap1.png',
  imageMobile: './images/Snapshoot1.png',
  imagePopup: './images/Snap1.png',
  imageMobilePopup: './images/Snapshoot1.png',
  seeLive: 'https://tariktesfa.github.io/My-portfolio/',
  seeSource: 'https://github.com/tariktesfa/My-portfolio',
},
{
  title: 'Multi-Post Stories',
  exprience: ['FACEBOOK', 'Back End Dev', '2015'],
  desription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  image: './images/Snap2.png',
  imageMobile: './images/Snapshoot2.png',
  imagePopup: './images/Snap2.png',
  imageMobilePopup: './images/Snapshoot2.png',
  seeLive: 'https://tariktesfa.github.io/My-portfolio/',
  seeSource: 'https://github.com/tariktesfa/My-portfolio',
},
{
  title: 'Facebook 360',
  exprience: ['FACEBOOK', 'Back End Dev', '2015'],
  desription: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  image: './images/Snap3.png',
  imageMobile: './images/Snapshoot3.png',
  imagePopup: './images/Snap3.png',
  imageMobilePopup: './images/Snapshoot3.png',
  seeLive: 'https://tariktesfa.github.io/My-portfolio/',
  seeSource: 'https://github.com/tariktesfa/My-portfolio',
},
{
  title: 'Uber Navigation',
  exprience: ['UBER', 'Lead Developer', '2018'],
  desription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  image: './images/Snap4.png',
  imageMobile: './images/Snapshoot4.png',
  imagePopup: './images/Snap4.png',
  imageMobilePopup: './images/Snapshoot4.png',
  seeLive: 'https://tariktesfa.github.io/My-portfolio/',
  seeSource: 'https://github.com/tariktesfa/My-portfolio',
},
];
/* End of project detail object */

/* Populate object to html elements when the page loads */
for (let i = 0; i < projectDetail.length; i += 1) {
  let tech = '';
  let techPop = '';
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="technology"><a href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let j = 0; j < projectDetail[i].popupTech.length; j += 1) {
    techPop += `<li class="technology"><a href="#">${projectDetail[i].popupTech[j]}</a></li>`;
  }

  for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
    experienceList += `<li><a href="#" class="canopy">${projectDetail[i].exprience[k]}</a></li>`;
    if (k !== projectDetail[i].exprience.length - 1) experienceList += '<li><a href="#"><img src="./images/Counter.png" alt="dot"></a></li>';
  }

  document.querySelector('#portfolio').innerHTML += `<div class="main-container">
 <div class="grid-item" id="work-1">
   <div class="flex-item1"><img src="${projectDetail[i].imageMobile}" alt="my tonic project"></div>
   <div class="desk-item1"><img src="${projectDetail[i].image}" alt="my tonic project"></div>
   <div class="desk-col">
     <div class="flex-item2">
       <h2>${projectDetail[i].title}</h2>
     </div>
     <div class="flex-item2-desk">
       <h2>${projectDetail[i].title}</h2>
     </div>
     <div class="flex-item3">
       <ul class="inner-element">
        ${experienceList}
       </ul>
     </div>
     <div class="flex-item4">
       <p>${projectDetail[i].desription}</p>
     </div>
     <div class="flex-item5">
       <ul class="inner-flex-item">
       ${tech}
       </ul>
     </div>
     <div class="flex-item6"><button class="see-project">See project</button></div>
   </div>
 </div>`;

  document.querySelector('#portfolioPopup').innerHTML += `    <div class="works-flex">
 <div>
   <div class="works-flex-pop">
     <h3 class="intro-text-works">${projectDetail[i].title}</h3>
     <span> <a href="#" class="close-popup">X</a></span>
 </div>
 <ul class=" works-flex-item titles-container">
     <li class="list-main">${experienceList}</li>
 </ul>
 </div>
 <div class="works-flex-item work-image">
 <img src="${projectDetail[i].imageMobilePopup}" class="desk-item1" alt="${projectDetail[i].title} project screenshot"/>
     <img src="<img src="${projectDetail[i].imagePopup}" class="desk-item1" alt="${projectDetail[i].title} project screenshot"/>" class="flex-item1" alt="${projectDetail[i].title} project screenshot"/>
 </div>
 <div class="project-tags">
     <div class="work-description">
       <p class="works-flex-item works-description">
         ${projectDetail[i].popDescription}
       </p>
     </div>
     <div class="tags">
         <ul class="lang-container">
            <li class="lang-group">${techPop}</li>
         </ul>
         <ul>
           <li class="lang-group-2">${techPop}</li>
         </ul>
         <div class="btn-tags">
           <a href="${projectDetail[i].seeLive}" class="btn-see-project">See Live
             <i class="fa fa-external-link" aria-hidden="true"></i>
           </a>
           <a href="${projectDetail[i].seeSource}" class="btn-see-project">See Source
             <i class="fa fa-github-square" aria-hidden="true"></i>
           </a>
       </div>
     </div>
 </div>
</div>`;
}
/* End of project detail population when the pages loads */

/* Display Popup modal */

const popupModal = document.querySelector('#portfolioPopup');
const displayPopupModal = () => {
  popupModal.style.display = 'block';
};
const closePopupModal = () => {
  popupModal.style.display = 'none';
};
document.querySelector('.see-project').addEventListener('click', displayPopupModal);
document.querySelector('.close-popup').addEventListener('click', closePopupModal);

/* End of display popup modal */
