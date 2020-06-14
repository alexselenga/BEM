import {Block} from "../../common/block";
import {Titles} from '../../common/titles/titles';
import {Rows} from '../../common/rows/rows';
import {createElStatus} from "./__status/reviews__status";
import {createElProductImage} from './__product-image/reviews__product-image';
import {createElProductName} from './__product-name/reviews__product-name';
import {createElContent} from './__content/reviews__content';
import './reviews.scss';

export class Reviews extends Block {
/*
  //Заголовки полей c их классами
  cols: [{ caption: 'Фото', classNames: 'reviews_col-img', ... }, { caption: 'Наименование товара', classNames: 'reviews_col-name', ... }, ...]

  products = [
    {
      productName: 'Дрель',
      productSmallImageSrc: 'images/drill.png',
      productBigImageSrc: 'images/drill.png',
      rating: { //Рейтинг. Необязательное поле
        impression: 5, //Впечатление
        accordance: 4, //Соответствие
        reliability: 5 //Надежность
      },
      reviews: [ //Отзывы
        {
          text: 'Значит купил я данную модель',
          date: '1 августа, 2018',
          status: 2, //Статус модерации
          isExtended: true, //Дополнительный отзыв. Необязательное поле
          images: [ //Изображения. Необязательное поле.
            { smallSrc: 'images/drill1.png', bigSrc: 'images/drill1.png' }, //smallSrc - Url миниатюры. bigSrc - Url увеличенного изображения (bigSrc - необязательное поле)
            { smallSrc: 'images/drill2.png', bigSrc: 'images/drill2.png' },
          ]
        }
        ...
      ]
    },
    ...
  ]
*/

  constructor({cols, products, classList = [], container = null}) {
    super({tagName: 'main', className: 'reviews', classList, container});
    const elemRows = [];

    for (const product of products) {
      const review = product.reviews[0]; //В данном случае хотя бы один отзыв всегда есть

      const elemRow = [
        !review.isExtended ? createElStatus({review}) : null,
        createElProductImage({smallSrc: product.productSmallImageSrc, bigSrc: product.productBigImageSrc}),
        createElProductName({product}),
        createElContent({product, cols})
      ];

      elemRows.push(elemRow);
    }

    new Titles({
      cols,
      container: this.elem
    });

    new Rows({
      cols: cols.slice(0, 3),
      elemRows,
      rowTagName: 'article',
      rowClassName: 'reviews_row',
      container: this.elem
    });
  }
}

Reviews.statusNone = 0; //Модерация отзыва не пройдена
Reviews.statusModeration = 1; //Отзыв на модерацияя
Reviews.statusPublic = 2; //Отзыв прошел модерацию
