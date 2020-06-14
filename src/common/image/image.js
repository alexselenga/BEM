import {Block} from '../block';
import {Modal} from "../modal/modal";
import './image.scss';

export class Image extends Block {
//smallSrc - Url миниатюры. bigSrc - Url увеличенного изображения (bigSrc - необязательное поле)

  constructor({smallSrc, bigSrc = '', classList = [], container = null}) {
    super({tagName: 'img', className: 'image', classList, container});
    this.elem.src = smallSrc;

    if (bigSrc) {
      this.elem.classList.add('image_clickable');

      this.elem.addEventListener('click', event => {
        Image.modal.content.innerHTML = '';

        const img = Block.createElement({
          tagName: 'img',
          className: 'image__modal',
          container: Image.modal.content
        });

        img.src = bigSrc;
      });

      Image.modal.registerRef(this.elem);
    }
  }
}

Image.modal = new Modal({id: 'big-image'});
