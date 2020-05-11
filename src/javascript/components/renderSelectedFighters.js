import { createFighterPreview } from './fighterPreview';
import { createVersusBlock } from './fighterSelector';
export function renderSelectedFighters(selectedFighters) {
  const fightersPreview = document.querySelector('.preview-container___root');
  const [playerOne, playerTwo] = selectedFighters;
  const firstPreview = createFighterPreview(playerOne, 'left');
  const secondPreview = createFighterPreview(playerTwo, 'right');
  const versusBlock = createVersusBlock(selectedFighters);
  fightersPreview.innerHTML = '';
  fightersPreview.append(firstPreview, versusBlock, secondPreview);
}
