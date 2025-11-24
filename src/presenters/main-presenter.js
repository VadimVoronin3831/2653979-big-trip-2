import ListFiltersView from '../view/trip-filters-view.js';
import ListSortView from '../view/trip-list-sort-view.js';
import ListEventsView from '../view/trip-events-list-view.js';
import EventFormView from '../view/trip-event-form-view.js';

import { render } from '../render.js';

export default class MainPresenter {
  constructor({ headerContainer, mainContainer, pointModel }) {
    this.headerContainer = headerContainer;
    this.mainContainer = mainContainer;
    this.pointModel = pointModel;
  }

  init() {
    this.pointList = [...this.pointModel.getPoint()];
    render(new ListFiltersView(), this.headerContainer);
    render(new ListSortView(), this.mainContainer);

    const eventsComponent = new ListEventsView();
    render(eventsComponent, this.mainContainer);

    for (let i = 0; i < this.pointList.length; i++) {
      render(new EventFormView({point: this.pointList[i]}), eventsComponent.getElement());
    }
  }
}

