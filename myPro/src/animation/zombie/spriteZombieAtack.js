import Sprite from "../sprite";
import attack1 from '../../../images/zombie/Attack (1).png';
import attack2 from '../../../images/zombie/Attack (2).png';
import attack3 from '../../../images/zombie/Attack (3).png';
import attack4 from '../../../images/zombie/Attack (4).png';
import attack5 from '../../../images/zombie/Attack (5).png';
import attack6 from '../../../images/zombie/Attack (6).png';
import attack7 from '../../../images/zombie/Attack (7).png';
import attack8 from '../../../images/zombie/Attack (8).png';

export default class SpriteZombieAttack extends Sprite {
    constructor() {
        super([attack1, attack2, attack3, attack4, attack5, attack6, attack7, attack8]);
    }
}