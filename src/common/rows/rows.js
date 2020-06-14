import {Block} from "../block";
import {Cols} from '../cols/cols'
import './rows.scss';

export class Rows extends Block {
/*
  cols: [{ classNames: 'reviews_col-img', ... }, { classNames: 'reviews_col-name', ... }, ...] //Классы заголовков полей
  elemRows: [[imgElement0, nameElement0, ...], [imgElement1, nameElement1, ...], ...] //Строки DOM-элементов полей
*/

  constructor({cols, elemRows, rowTagName = 'article', rowClassName = '', classList, container}) {
    super({tagName: 'section', className: 'rows', classList, container});

    for (const elemRow of elemRows) {
      const row = Block.createElement({
        tagName: rowTagName,
        className: 'rows__row',
        classList: [rowClassName],
        container: this.elem
      });

      new Cols({
        cols,
        elemRow,
        container: row
      });
    }
  }
}
