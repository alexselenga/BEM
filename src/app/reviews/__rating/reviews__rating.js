import {Block} from "../../../common/block";
import './reviews__rating.scss';

export function createElRating({rating, classList, container}) {
  container = Block.createElement({className: 'reviews__rating', classList, container});

  Block.createElement({
    className: 'reviews__rating-item',
    container
  }).innerHTML = `Впечатление: <strong>${rating.impression}</strong>`;

  Block.createElement({
    className: 'reviews__rating-item',
    container
  }).innerHTML = `Надежность: <strong>${rating.accordance}</strong>`;

  Block.createElement({
    className: 'reviews__rating-item',
    container
  }).innerHTML = `Ответственность: <strong>${rating.reliability}</strong>`;

  return container;
}
