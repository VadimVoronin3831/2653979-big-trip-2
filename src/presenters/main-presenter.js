import ListFiltersView from '../view/trip-filters-view.js';
import ListSortView from '../view/trip-list-sort-view.js';
import ListEventsView from '../view/trip-events-list-view.js';
import EventView from '../view/trip-event-item-view.js';
import EventFormView from '../view/trip-event-form-view.js';

import { render } from '../render.js';

export default class MainPresenter {
  constructor({ headerContainer, mainContainer }) {
    this.headerContainer = headerContainer;
    this.mainContainer = mainContainer;
  }

  init() {
    render(new ListFiltersView(), this.headerContainer);
    render(new ListSortView(), this.mainContainer);

    const eventsComponent = new ListEventsView();
    render(eventsComponent, this.mainContainer);

    render(new EventFormView(), eventsComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new EventView(), eventsComponent.getElement());
    }
  }
}

