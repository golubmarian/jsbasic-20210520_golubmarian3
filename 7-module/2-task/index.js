import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
    this.closeX();
    this.closeEscape();
  }

  render() {
    this.modal = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
          <div class="modal__inner">
            <div class="modal__header">
              <button type="button" class="modal__close">
                <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>
              <h3 class="modal__title"></h3>
            </div>
          <div class="modal__body"></div>
        </div>
      </div>
    `);
  }

  open() {
    document.body.append(this.modal);
    document.body.classList.add('is-modal-open');
  }

  setTitle(title) {     
    this.modal.querySelector('.modal__title').insertAdjacentHTML('afterbegin',`${title}`);
  }

  setBody(body) {
    this.modal.querySelector('.modal__body').insertAdjacentElement('afterbegin',body);
  }

  close() {
    this.modal.remove();
    document.body.classList.remove('is-modal-open');
  }

  closeX() {
    this.modal.addEventListener('click', ({target}) => {
      if (target.closest('.modal__close')) this.close();
    });
  }

  closeEscape() {
    document.documentElement.addEventListener('keydown', (ev) => {
      if (ev.code === 'Escape') this.close();
    });

  }

}
