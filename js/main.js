
import { getPictures } from './data.js';
import { createThumbnails } from './thumbnails.js';

renderThumbnails(getPictures());
const pictures = getPictures();

console.log(pictures); // Вывод данных в консоль для проверки
