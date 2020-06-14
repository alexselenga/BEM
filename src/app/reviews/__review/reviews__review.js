import {Block} from "../../../common/block";
import {Reviews} from "../reviews";
import {createElStars} from "../__stars/reviews__stars";
import {createElRating} from "../__rating/reviews__rating";
import {createElReviewImage} from "../__review-image/reviews__review-image";
import {createElStatus} from "../__status/reviews__status";
import './reviews__review.scss';

export function createElReview({product, review, classList, container}) {
  container = Block.createElement({tagName: 'section', className: 'reviews__review', classList, container});

  if (review.isExtended) {
    Block.createElement({
      className: 'reviews__review-extended',
      container
    }).innerText = 'Дополненный отзыв';
    createElStatus({review, classList: ['is-show-fsm'], container});
  }

  if (product.rating) {
    const classList = review.isExtended ? ['is-show-bsm'] : [];
    createElStars({rating: product.rating, classList, container});
    createElRating({rating: product.rating, classList, container});
  }

  if (review.status !== Reviews.statusNone) {
    const fullText = review.text;
    const showTeaser = fullText.length > 180;
    const teaserText = showTeaser ? fullText.slice(0, 180) + '...' : fullText;
    const textDiv = Block.createElement({className: 'reviews__review-text', container});
    textDiv.innerText = teaserText;

    if (showTeaser) {
      const expandDiv = Block.createElement({className: 'reviews__review-expand-link', container});
      expandDiv.innerText = 'Подробнее';

      expandDiv.onclick = () => {
        textDiv.innerText = fullText;
        expandDiv.remove();
      };
    }

    if (review.images) {
      const imagesDiv = Block.createElement({className: 'reviews__review-images', container});

      for (const image of review.images) {
        createElReviewImage({smallSrc: image.smallSrc, bigSrc: image.bigSrc, container: imagesDiv});
      }
    }
  } else {
    Block.createElement({
      className: 'reviews__review-status-none',
      container
    }).innerText = 'К сожалению, ваш отзыв не прошёл модерацию.';
  }

  return container;
}
