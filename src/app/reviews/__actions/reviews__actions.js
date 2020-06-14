import {Block} from "../../../common/block";
import {Button} from '../../../common/button/button'
import {Reviews} from "../reviews";
import './reviews__actions.scss';

export function createElActions({review, classList, container}) {
  if (review.status !== Reviews.statusPublic) return '';

  container = Block.createElement({className: 'reviews__actions', classList, container});
  new Button({caption: 'Дополнить отзыв', classList: ['reviews_extend-review'], container});

  return container;
}
