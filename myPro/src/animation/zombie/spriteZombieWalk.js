import Sprite from "../sprite";
import walk1 from '../../../images/zombie/Walk (1).png';
import walk2 from '../../../images/zombie/Walk (2).png';
import walk3 from '../../../images/zombie/Walk (3).png';
import walk4 from '../../../images/zombie/Walk (4).png';
import walk5 from '../../../images/zombie/Walk (5).png';
import walk6 from '../../../images/zombie/Walk (6).png';
import walk7 from '../../../images/zombie/Walk (7).png';
import walk8 from '../../../images/zombie/Walk (8).png';
import walk9 from '../../../images/zombie/Walk (9).png';
import walk10 from '../../../images/zombie/Walk (10).png';

export default class SpriteZombieWalk extends Sprite {
    constructor() {
        super([walk1, walk2, walk3, walk4, walk5, walk6, walk7, walk8, walk9, walk10]);
    }
}