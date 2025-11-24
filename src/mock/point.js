import {getRandomNumber} from '../utils';
import {PRICE} from './const';
import {createDestination} from './destination';
import {createOffer} from './offer';

export function createPoint() {
  const destination = createDestination();
  const offer = createOffer();
  const dateFrom = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000);
  const dateTo = new Date(dateFrom.getTime() + (30 * 60 * 1000) + Math.random() * 7 * 24 * 60 * 60 * 1000);

  return {
    id: crypto.randomUUID(),
    basePrice: getRandomNumber(PRICE.MIN, PRICE.MAX),
    dateFrom: dateFrom.toISOString(),
    dateTo: dateTo.toISOString(),
    destination: destination,
    isFavorite: !getRandomNumber(0, 1),
    offers: offer,
    type: offer.type
  };
}
