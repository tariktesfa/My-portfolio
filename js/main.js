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
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.',
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
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="technology"><a href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
    experienceList += (k === 0) ? `<li><a href="#" class="canopy">${projectDetail[i].exprience[k]}</a></li>` : `<li><a href="#">${projectDetail[i].exprience[k]}</a></li>`;
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
      <div class="flex-item6"><button data-index="${i}" class="see-project">See project</button></div>
    </div>
  </div>`;
}
/* End of project detail population when the pages loads */

/* Display Popup modal */

const popupModal = document.querySelector('#portfolioPopup');
const displayPopupModal = (i) => {
  let tech = '';
  let techPop = '';
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="technology"><a href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let j = 0; j < projectDetail[i].popupTech.length; j += 1) {
    techPop += `<li class="lang-group" id="mobile">${projectDetail[i].popupTech[j]}</li>`;
  }

  for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
    experienceList += (k === 0) ? `<li class="list-main">${projectDetail[i].exprience[k]}</li>` : `<li class="titles-item">${projectDetail[i].exprience[k]}</li>`;
  }
  document.querySelector('#portfolioPopup').innerHTML = `
  <div class="works-flex">
      <div>
        <div class="works-flex-pop">
          <h3 class="intro-text-works">${projectDetail[i].title}</h3>
          <span> <a onclick="closePopupModal()" href="" class="close-popup">X</a></span>
      </div>
      <ul class="works-flex-item titles-container">
      ${experienceList}
      </ul>
      </div>
      <div class="works-flex-item work-image">
          <img src="${projectDetail[i].imageMobilePopup}" class="flex-item1" alt="${projectDetail[i].title} project screenshot"/>
          <img src="${projectDetail[i].imagePopup}" class="desk-item1" alt="${projectDetail[i].title} project screenshot"/>
      </div>
      <div class="project-tags">
          <div class="work-description">
            <p class="works-flex-item works-description">
              ${projectDetail[i].popDescription}
            </p>
          </div>
          <div class="tags">
              <ul class="lang-container mobile">
              ${tech}
              </ul>
              <ul class="lang-container">
              ${techPop}
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
      </div>
  `;
  popupModal.style.display = 'block';
};
document.querySelectorAll('.see-project').forEach((row) => row.addEventListener('click', () => displayPopupModal(row.getAttribute('data-index'))));

const closeModal = document.querySelector('#portfolioPopup');
const closePopupModal = () => {
  closeModal.style.display = 'none';
};
/* End of display popup modal */

/* Contact Form validation */
// eslint-disable-next-line no-useless-escape
const regex = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';
document.querySelector('#form').addEventListener('submit', (e) => {
  for (let i = 0; i < e.target.length; i += 1) {
    if (e.target[i].classList.contains('form-control')) {
      if (e.target[i].value === '') {
        // e.target[i].nextElementSibling.style.display = 'block';
        e.target[i].parentElement.nextElementSibling.innerText = `Please enter your ${e.target[i].getAttribute('placeholder')}`;
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else if (e.target[i].type === 'input' && e.target[i].value.length > e.target[i].getAttribute('maxlength')) {
        e.target[i].parentElement.nextElementSibling.innerText = `The maximum number of character is ${e.target[i].getAttribute('maxlength')}`;
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else if (e.target[i].type === 'email' && e.target[i].value !== e.target[1].value.toLowerCase()) {
        e.target[i].parentElement.nextElementSibling.innerText = 'Please enter your email in lowercase';
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else if (e.target[i].type === 'email' && regex.test(e.target[i].value) !== e.target[i].value) {
        e.target[i].parentElement.nextElementSibling.textContent = 'Please enter a valid email address';
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else {
        e.target[i].parentElement.nextElementSibling.style.display = 'none';
        e.target[i].parentElement.nextElementSibling.innerText = '';
      }
    }
  }
});
/* End of Contact Form Validation */
