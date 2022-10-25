import addElem from './add-elem.js';
import { postComment, getComments } from './involvement.js';

const clearPopups = () => {
 const popupContainer = document.querySelectorAll('.popup-container');

 if (popupContainer) {
 popupContainer.forEach((e) => {
 e.remove();
 });
 }
};

const updateComments = async (_id, _container) => {
 let comments = await getComments(_id);
 comments = Array.isArray(comments) ? comments : [];

 // Add comments section to the container
 _container.innerHTML = `
 <div class="comments-current">
 <h3>Comments (${comments.length})</h3>
 <div class="comments-all"></div>
 </div>
 <div class="comments-add">
 <h3>Add a comment</h3>
 <form class="form-add-comment" action="">
 <input class="input-comment-name" type="text" placeholder="Your name">
 <input class="input-comment-insight" type="text" placeholder="Your insights">
 <button type="submit">Comment</button>
 </form>
 </div>`;

 // Generate current comments
 const commentsAll = document.querySelector('.comments-all');
 if (comments) {
 comments.forEach((comment) => {
 commentsAll.innerHTML += `
 <span>${comment.creation_date}</span>
 <span>${comment.username}:</span>
 <span>${comment.comment}</span>`;
 });
 }

 // Add form event listener
 const form = document.querySelector('.form-add-comment');
 const inputName = form.querySelector('.input-comment-name');
 const inputInsight = form.querySelector('.input-comment-insight');

 form.onsubmit = (e) => {
 e.preventDefault();
 postComment(_id, inputName.value, inputInsight.value);

 form.reset();
 };
};

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
 <div>${_showData.summary}</div>
 <div class="comments-container"></div>`;

 // Generate genres
 const genres = document.querySelector('.genres');
 _showData.genres.forEach((genre) => {
 genres.innerHTML += `<div class="tag-genre">${genre}</div>`;
 });

 // Generate comments
 const commentsContainer = document.querySelector('.comments-container');
 updateComments(_showData.id, commentsContainer);

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