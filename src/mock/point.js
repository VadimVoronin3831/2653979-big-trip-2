import { getRandomNumber, getRandomArrayElement } from '../utils';
import { PRICE } from './const';

export function createPoint(destinationId, offer) {
  const dateFrom = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000);
  const dateTo = new Date(dateFrom.getTime() + (30 * 60 * 1000) + Math.random() * 7 * 24 * 60 * 60 * 1000);
  const selectedOffer = getRandomArrayElement(offer.offers);

  return {
    id: crypto.randomUUID(),
    basePrice: getRandomNumber(PRICE.MIN, PRICE.MAX),
    dateFrom: dateFrom.toISOString(),
    dateTo: dateTo.toISOString(),
    destination: destinationId,
    isFavorite: !getRandomNumber(0, 1),
    offers: selectedOffer ? [selectedOffer.id] : [],
    type: offer.type
  };
}
