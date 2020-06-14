import {Block} from "../block";
import './breadcrumb.scss';

export class Breadcrumb extends Block {
  constructor({caption, classList = [], container}) {
    super({tagName: 'header', className: 'breadcrumb', classList, container});

    Block.createElement({
      tagName: 'h1',
      className: 'breadcrumb__caption',
      container: this.elem
    }).innerText = caption;
  }
}
