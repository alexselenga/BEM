import {Breadcrumb} from './common/breadcrumb/breadcrumb';
import {Alert} from './common/alert/alert';
import {Reviews} from './app/reviews/reviews';
import './index.scss';

const cols = [
  {
    caption: '', //Статус отзыва
    classNames: 'reviews_col-status-sm is-show-fsm'
  },
  {
    caption: 'Фото',
    classNames: 'reviews_col-img'
  },
  {
    caption: 'Наименование товара',
    classNames: 'reviews_col-name'
  },
  {
    caption: 'Ваши отзывы',
    classNames: 'reviews_col-reviews'
  },
  {
    caption: 'Статус отзыва',
    classNames: 'reviews_col-status is-hide-sm'
  },
  {
    caption: 'Действия',
    classNames: 'reviews_col-actions'
  },
];

const products = [
  {
    productName: 'Дрель ударная BOSCH PSB 550 RЕ, БЗП Арт.0603130020',
    productSmallImageSrc: 'images/_drill.png',
    productBigImageSrc: 'images/drill.png',
    rating: {
      impression: 5,
      accordance: 4,
      reliability: 5
    },
    reviews: [
      {
        text: 'Значит купил я данную модель, поработал неделю, отказал один аккумулятор, заряд держит так себе, НОООООО МАГАЗИН АДЕКВАТНЫЙ, ОБМЕНЯЛИ НА НОВЫЙ, ПРИЧЁМ ПРИВЕЗЛИ ДОМОЙ. С ТАКИМ ПРОДАВЦОМ ПРИЯТНО ИМЕТЬ ДЕЛО!!! СОВЕТУЮ! Я МНОГО ВСЕГО ПОКУПАЛ, И БУДУ ПОКУПАТЬ)',
        date: '1 августа, 2018',
        status: 2
      },
      {
        text: 'Год прошел, работает как пушка!',
        date: '19 августа, 2018',
        status: 1,
        isExtended: true,
        images: [
          { smallSrc: 'images/_drill1.png', bigSrc: 'images/drill1.png' },
          { smallSrc: 'images/_drill2.png', bigSrc: 'images/drill2.png' },
        ]
      }
    ]
  },
  {
    productName: 'Декоративный металлический экран на радиатор 3-х секционный 3 ДМЭР',
    productSmallImageSrc: 'images/_screen.png',
    productBigImageSrc: 'images/screen.png',
    reviews: [
      {
        text: 'Lorem Ipsum',
        date: '23 июня, 2019',
        status: 0
      }
    ]
  },
];

const container = document.getElementById('app');
new Breadcrumb({caption: 'Мои отзывы о товарах', classList: ['page__breadcrumb'], container});
new Alert({caption: 'Ваши отзывы будут опубликованы на сайте после проверки модератором.', classList: ['page__alert'], container});
new Reviews({cols, products, container});
