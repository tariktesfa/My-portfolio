/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
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

const projectDetail = [
  {
    title: 'Tonic',
    exprience: ['CANOPY', 'Back End Dev', '2015'],
    desription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    image: './images/Snap2.png',
    imageMobile: './images/Snapshoot.png',
  },
  {
    title: 'Multi-Post Stories',
    exprience: ['FACEBOOK', 'Back End Dev', '2015'],
    desription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: './images/Snap3.png',
    imageMobile: './images/Snapshoot2.png',
  },
  {
    title: 'Facebook 360',
    exprience: ['FACEBOOK', 'Back End Dev', '2015'],
    desription: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: './images/Snap1.png',
    imageMobile: './images/Snapshoot3.png',
  },
  {
    title: 'Uber Navigation',
    exprience: ['UBER', 'Lead Developer', '2018'],
    desription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: './images/Snap4.png',
    imageMobile: './images/Snapshoot4.png',
  },
];

// eslint-disable-next-line no-plusplus
// eslint-disable-next-line no-empty
for (let i = 0; i < projectDetail.length; i++) {
  let tech = '';
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j++) {
    tech += `<li class="technology"><a href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let j = 0; j < projectDetail[i].exprience.length; j++) {
    experienceList += `<li><a href="#" class="canopy">${projectDetail[i].exprience[j]}</a></li>`;
  }

  document.querySelector('#portfolio').innerHTML
 += `<div class="main-container">
 <div class="grid-item" id="work-1">
   <div class="flex-item1"><img src="${projectDetail[i].image}" alt="my tonic project"></div>
   <div class="desk-item1"><img src="${projectDetail[i].imageMobile}" alt="my tonic project"></div>
   <div class="desk-col">
     <div class="flex-item2">
       <h2>${projectDetail[i].title}</h2>
     </div>
     <div class="flex-item2-desk">
       <h2>${projectDetail[i].title}</h2>
     </div>
     <div class="flex-item3">
       <ul class="inner-element">
         <li><a href="#" class="canopy">${experienceList}</a></li>
         <li><a href="#"><img src="./images/Counter.png" alt="dot"></a></li>
       </ul>
     </div>
     <div class="flex-item4">
       <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
     </div>
     <div class="flex-item5">
       <ul class="inner-flex-item">
         <li class="technology"><a href="#">${tech}</a></li>
       </ul>
     </div>
     <div class="flex-item6"><button>See project</button></div>
   </div>
 </div>`;
}
