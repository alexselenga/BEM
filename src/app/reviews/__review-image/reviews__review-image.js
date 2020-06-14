import {Block} from "../../../common/block";
import {Image} from '../../../common/image/image';
import './reviews__review-image.scss';

//smallSrc - Url миниатюры. bigSrc - Url увеличенного изображения (bigSrc - необязательное поле)

export function createElReviewImage({smallSrc, bigSrc, classList, container}) {
  container = Block.createElement({className: 'reviews__review-image', classList, container});
  new Image({smallSrc, bigSrc, container});

  return container;
}
