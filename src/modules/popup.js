import addElem from './add-elem.js';

const clearPopups = () => {
  const popupContainer = document.querySelectorAll('.popup-container');

  if (popupContainer) {
    popupContainer.forEach((e) => {
      e.remove();
    });
  }
}
const showPopup = (_showData, _domRect) => {
    // Clear all other pop-ups if any
    clearPopups();
  
    // Calculate y position
    const posY = window.pageYOffset + _domRect.y - 50;
  
    // DOM manipulations
    const main = document.querySelector('main');
    const popupContainer = addElem('div', ['popup-container'], main);
    popupContainer.style.top = `${posY}px`;
    popupContainer.innerHTML = `
    <div class="popup-close-container"></div>
    <div class="flex-column">
      <h2>${_showData.name}</h2>
      <div class="sub-title flex-row">
        <span>${_showData.premiered.substring(0, 4)}</span>
        <span>&middot;</span>
        <span>${_showData.status}</span>
        <span>&middot;</span>
        <div class="flex-row">
          <span class="material-icons-round icons">star</span>
          <span class="rating">${_showData.rating.average}</span>
          <span>/10</span>
        </div>
      </div>
    </div>
    <img class="popup-img" src="${_showData.image.original}" alt="show thumbnail">
    <div class="genres flex-row"></div>
    <div>${_showData.summary}</div>`;
// Generate genres
const genres = document.querySelector('.genres');
_showData.genres.forEach((genre) => {
  genres.innerHTML += `<div class="tag-genre">${genre}</div>`;
});

// Close button event listener
const popupCloseContainer = document.querySelector('.popup-close-container');
const popupClose = addElem('button', ['popup-close'], popupCloseContainer);
const closeIcon = addElem('span', ['material-icons-round', 'icons'], popupClose);
closeIcon.textContent = 'close';
popupClose.onclick = () => {
    popupContainer.remove();
  };
};

export { showPopup, clearPopups };
