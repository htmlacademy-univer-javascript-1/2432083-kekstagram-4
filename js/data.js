import { COMMENT_LINES, NAMES, AVATAR_COUNT, COMMENT_COUNT, DESCRIPTIONS, LIKE_MIN_COUNT, LIKE_MAX_COUNT, PICTURE_COUNT } from './constants.js';
import {getRandomElement, createUniqueRandomIdGenerator, getRandomInteger, createIdGenerator} from './utils/misc.js';

const generateCommentId = createIdGenerator();

export const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(COMMENT_LINES),
).join(' ');

export const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

export const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment,
  ),
});

export const getPictures = () => Array.from(
  { length: PICTURE_COUNT },
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);
