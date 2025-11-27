import { CITIES, DESCRIPTION, IMG_DESCRIPTION } from './const';
import { getRandomArrayElement, getRandomNumber } from '../utils';

export function createDestination(destinationID) {
  return {
    id: destinationID === '' ? crypto.randomUUID() : destinationID,
    description: getRandomArrayElement(DESCRIPTION),
    name: getRandomArrayElement(CITIES),
    pictures: [{
      src: `https://loremflickr.com/248/152?random=${getRandomNumber(0, 10)}`,
      description: getRandomArrayElement(IMG_DESCRIPTION),
    }
    ]
  };
}
