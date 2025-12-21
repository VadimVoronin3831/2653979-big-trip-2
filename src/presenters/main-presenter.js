import ListFiltersView from '../view/list-filters-view.js';
import ListSortView from '../view/list-sort-view.js';
import ListEventsView from '../view/list-events-view.js';
import PointPresenter from '../presenters/point-rpesenter.js';
import TripInfoView from '../view/trip-info-view.js';

import { render, replace } from '../framework/render.js';
import { generateFilter } from '../utils.js';
export default class MainPresenter {
  #headerContainer = null;
  #mainContainer = null;

  #eventsComponents = [];
  #points = [];
  #destinations = [];
  #offers = [];
  #pointPresenters = new Map();
  #filters = [];
  #currentFilterType = 'everything';
  #totalPrice = 0;

  constructor({ headerContainer, mainContainer, pointModel }) {
    this.#headerContainer = headerContainer;
    this.#mainContainer = mainContainer;
    this.#points = [...pointModel.getPoints()];
    this.#destinations = [...pointModel.getDestinations()];
    this.#offers = [...pointModel.getOffers()];
    this.#filters = generateFilter(this.#points);
  }

  #replacePointsByFilter() {
    replace(this.#eventsComponents, this.#eventsComponents);
  }

  #handleFilterChange = () => {
    this.#replacePointsByFilter();
  };

  #renderPoint(point, tripList) {
    const offer = this.#offers.find((off) => off.type === point.type);
    const pointPresenter = new PointPresenter({
      point: { ...point, offer },
      destinations: this.#destinations,
      container: tripList,
    });

    this.#pointPresenters.set(point.id, pointPresenter);
    pointPresenter.init();
  }

  #renderPoints(tripList) {
    this.#points.forEach((point) => {
      this.#renderPoint(point, tripList);
      this.#totalPrice += point.basePrice;
    });
  }

  init() {
    render(new ListSortView(), this.#mainContainer);
    this.#eventsComponents = new ListEventsView();
    render(this.#eventsComponents, this.#mainContainer);
    this.#renderPoints(this.#eventsComponents.element);

    render(new TripInfoView(this.#totalPrice), this.#headerContainer, 'afterbegin');
    render(new ListFiltersView(this.#filters, this.#currentFilterType, { onFilterChange: this.#handleFilterChange }), this.#headerContainer.querySelector('.trip-controls__filters'));
  }
}
