import {Block} from "../../../common/block";
import {Rows} from "../../../common/rows/rows";
import {createElReview} from "../__review/reviews__review";
import {createElStatus} from "../__status/reviews__status";
import {createElActions} from "../__actions/reviews__actions";
import './reviews__content.scss';

export function createElContent({product, cols, classList, container}) {
  const elemRows = [];

  for (const review of product.reviews) {
    elemRows.push([
      createElReview({product, review}),
      createElStatus({review}),
      createElActions({review})
    ]);
  }

  container = Block.createElement({className: 'reviews__content', classList, container});
  new Rows({container, rowTagName: 'section', rowClassName: 'reviews__content_row', cols: cols.slice(3, 6), elemRows});

  return container;
}
