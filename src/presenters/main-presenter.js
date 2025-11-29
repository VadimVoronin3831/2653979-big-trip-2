import ListFiltersView from '../view/filters-view.js';
import ListSortView from '../view/list-sort-view.js';
import ListEventsView from '../view/events-list-view.js';
import EventFormView from '../view/event-form-view.js';

import { render } from '../render.js';

export default class MainPresenter {
  constructor({ headerContainer, mainContainer, pointModel }) {
    this.headerContainer = headerContainer;
    this.mainContainer = mainContainer;
    this.pointModel = pointModel;
  }

  init() {
    this.points = [...this.pointModel.getPoints()];
    this.destinations = [...this.pointModel.getDestinations()];
    this.offers = [...this.pointModel.getOffers()];
    render(new ListFiltersView(), this.headerContainer);
    render(new ListSortView(), this.mainContainer);

    const eventsComponent = new ListEventsView();
    render(eventsComponent, this.mainContainer);

    this.points.forEach((point) => {
      const offer = this.offers.find((off) => off.type === point.type);

      render(new EventFormView({
        ...point,
        offer,
        allDestinations: this.destinations,
      }), eventsComponent.getElement());
    });
  }
}

