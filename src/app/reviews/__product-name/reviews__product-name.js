import {Block} from "../../../common/block";
import './reviews__product-name.scss';

export function createElProductName ({product, classList, container}) {
  container = Block.createElement({tagName: 'H2', className: 'reviews__product-name', classList, container});
  container.innerText = product.productName;

  return container;
}
