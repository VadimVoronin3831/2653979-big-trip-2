import {getRandomArrayElement} from '../utils';
import {TYPES} from './const';

export function createOffer(){
  const typeKeys = Object.keys(TYPES);
  const randomType = getRandomArrayElement(typeKeys);

  const offersForType = TYPES[randomType];

  return {
    id: crypto.randomUUID(),
    type: randomType,
    offers: offersForType
  };
}
