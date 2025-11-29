import MainPresenter from './presenters/main-presenter';
import PointModel from './model/point-model.js';

const pointModel = new PointModel();

const headerElement = document.querySelector('.page-header');
const mainElement = document.querySelector('.page-main');
const filtersElement = headerElement.querySelector('.trip-controls__filters');
const eventsElement = mainElement.querySelector('.trip-events');

const mainPresenter = new MainPresenter({
  headerContainer: filtersElement,
  mainContainer: eventsElement,
  pointModel,
});

mainPresenter.init();
