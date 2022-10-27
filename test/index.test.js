/**
 * @jest-environment jsdom
 */

import { likesCount, commentsCount, showsCount } from './countFunction.js';

describe('Count the number or likes', () => {
  test('Assume previous likes is "14" expect "15" ', () => {
    document.body.innerHTML = '<span class="like-symbol">14</span>';
    expect(likesCount(14)).toBe(15);
  });
  test('comments = [{name: "Desmond", message: "Nice"}, {name: "Tushar", message: "Greate"}] expect "2"', () => {
    document.body.innerHTML = '<button class="comment">comment</button>';
    const preComments = [{ name: 'Desmond', message: 'Nice' },
      { name: 'Tushar', message: 'Great' }];
    const newComment = { name: 'Mike', message: "I don't love this movie" };
    expect(commentsCount(preComments, newComment)).toEqual(3);
  });
  test("[show1, show2, show3, show4] expect length to be '4'", () => {
    const shows = ['show1', 'show2', 'show3', 'show4'];
    const result = showsCount(shows);
    expect(result).toBe(4);
  });
});