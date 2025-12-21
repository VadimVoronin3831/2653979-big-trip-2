import AbstractView from '../framework/view/abstract-view';

function createTripInfoTemplate(totlalPrice) {
  return `
<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

              <p class="trip-info__dates">18&nbsp;—&nbsp;20 Mar</p>
            </div>

            <p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${totlalPrice}</span>
            </p>
          </section>
              `;
}

export default class TripInfoView extends AbstractView {
  #totlalPrice = 0;
  constructor(totalPrice){
    super();
    this.#totlalPrice = totalPrice;
  }

  get template() {
    return createTripInfoTemplate(this.#totlalPrice);
  }
}
