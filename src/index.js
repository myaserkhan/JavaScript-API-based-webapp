import './style.scss';
// import addElem from './modules/add-elem.js';

// Search button
const searchIcon = document.querySelector('#search-btn');
const searchBarContainer = document.querySelector('.search-bar');
const searchCloseBtn = document.querySelector('#search-close-btn');

searchIcon.onclick = () => {
  searchBarContainer.classList.remove('hide');

  // Add event listener
  searchCloseBtn.onclick = () => {
    searchBarContainer.classList.add('hide');
  };
};