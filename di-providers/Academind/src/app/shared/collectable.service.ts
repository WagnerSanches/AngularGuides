import { Collectable } from "./collectable.model";

// it's gonna be the global data repository
export class CollectableService {
  private collectables: Collectable[] = [
    {description: "A very rare copy of 'Jquery for Dummies'", type: 'Book'},
    {description: 'The first Letter ever written', type: 'Piece of Paper'},
    {description: 'A photograph showing nothing', type: 'Photo'},
    {description: 'A box with all sold Zunes', type: 'Garbage'}
  ];
  
  getCollectables(): Collectable[] {
    return this.collectables;
  }
} 