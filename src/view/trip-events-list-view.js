import { createElement } from '../render.js';

function createListControlsTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class ListEventsView {
  getTemplate() {
    return createListControlsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }

}
