import Sprite from "../sprite";
import walk1 from '../../../images/hero/Walk (1).png';
import walk2 from '../../../images/hero/Walk (2).png';
import walk3 from '../../../images/hero/Walk (3).png';
import walk4 from '../../../images/hero/Walk (4).png';
import walk5 from '../../../images/hero/Walk (5).png';
import walk6 from '../../../images/hero/Walk (6).png';
import walk7 from '../../../images/hero/Walk (7).png';
import walk8 from '../../../images/hero/Walk (8).png';
import walk9 from '../../../images/hero/Walk (9).png';
import walk10 from '../../../images/hero/Walk (10).png';

export default class SpriteWalkHero extends Sprite {
    constructor() {
        super([walk1, walk2, walk3, walk4, walk5, walk6, walk7, walk8, walk9, walk10]);
    }
}