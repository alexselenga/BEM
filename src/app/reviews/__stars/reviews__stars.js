import {Block} from "../../../common/block";
import './reviews__stars.scss';

export function createElStars ({rating, classList, container}) {
  const fixedRating = ((rating.impression + rating.accordance + rating.reliability) / 3).toFixed(1);
  const roundRating = Math.round(parseFloat(fixedRating));
  const ratingStars = '★'.repeat(roundRating);
  const voidStars = '★'.repeat(5 - roundRating);

  container = Block.createElement({ className: 'reviews__stars', classList, container});

  Block.createElement({
    className: 'reviews__rating-stars',
    container
  }).innerText = ratingStars;

  Block.createElement({
    className: 'reviews__void-stars',
    container
  }).innerText = voidStars;

  Block.createElement({
    className: 'reviews__rating-value',
    container
  }).innerText = fixedRating;

  return container;
}
