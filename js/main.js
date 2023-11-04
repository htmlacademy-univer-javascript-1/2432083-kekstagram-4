const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
  'Хочеца тоже :((',
  'А на какую камеру снимаешь?',
  'Накрутка лайков, слит',
  'Уже не тот что раньше...',
  'Фото - имба',
  'Очень хорошо отредактировано, какой программой пользуетесь?'
];
const DESCRIPTIONS = [
  'Наконец-то',
  'Не хочу обратно...',
  'Попа обгорела, сидеть больно...',
  'Как же долго я ждала этой поездки, и вот оно, море!',
  'Вот такой сегодня у нас ужин',
  'А как ваши дела?',
  'И ничего даже не добавишь',
  'Да',
  'Нет',
  'Спокойной ночи',
  'Доброе утро'
];
const NAMES = ['Ксения', 'Вероника', 'Анжела', 'Анна', 'Юлия', 'Екатерина'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from (
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(COMMENT_LINES),
).join(' ');

const createComment = () => ({
id: generateCommentId(),
avatar: 'img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg',
message: createMessage(),
name: getRandomArrayElement(NAMES)
});

const createPicture = (index) => ({
  id: index,
  url: 'photos/${index}.jpg',
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment,
  ),
});

const getPictures = () => Array.from(
  { length: PICTURE_COUNT },
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

getPictures();
