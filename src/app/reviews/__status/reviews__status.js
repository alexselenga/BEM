import {Block} from "../../../common/block";
import {Button} from '../../../common/button/button'
import './reviews__status.scss';

const statusCaptions = [
  'Не опубликован',
  'На модерации',
  'Опубликован'
];

const statusClasses = [
  'reviews__status_status-none',
  'reviews__status_status-moderation',
  'reviews__status_status-public'
];

export function createElStatus({review, classList, container}) {
  container = Block.createElement({className: 'reviews__status', classList, container});

  new Button({
    caption: statusCaptions[review.status],
    classList: ['reviews__status-button', statusClasses[review.status]],
    container
  });

  Block.createElement({
    className: 'reviews__status-date',
    container
  }).innerText = review.date;

  return container;
}
