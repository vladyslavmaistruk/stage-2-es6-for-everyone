import { createElement } from '../helpers/domHelper';
import { fighters } from '../helpers/mockData';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  // todo: show fighter info (image, name, health, etc.)

  
  const nameElement = createElement({
    tagName: 'div',
    className: 'fighter-preview__element fighter-preview__name'
  });
  nameElement.innerText = `${fighter.name}`;
  
  const imageElement = createElement({
    tagName: 'div',
    className : `figher-preview__image`,
  });
  const imageFighter = createFighterImage(fighter);
  imageElement.append(imageFighter);

  const haelthElement = createElement({
    tagName: 'div',
    className: 'fighter-preview__element'
  });
  haelthElement.innerHTML = `Health: <span>${fighter.health}</span>`;

  const attackElement = createElement({
    tagName: 'div',
    className: 'fighter-preview__element'
  });
  attackElement.innerHTML = `Attack: <span>${fighter.attack}</span>`;

  const defenseElement = createElement({
    tagName: 'div',
    className: 'fighter-preview__element'
  });
  defenseElement.innerHTML = `Defense: <span>${fighter.defense}</span>`;







  fighterElement.append(nameElement, imageElement,haelthElement, attackElement, defenseElement);
  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
