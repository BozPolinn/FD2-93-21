import Sprite from "../sprite";
import dead1 from '../../../images/hero/Dead (1).png';
import dead2 from '../../../images/hero/Dead (2).png';
import dead3 from '../../../images/hero/Dead (3).png';
import dead4 from '../../../images/hero/Dead (4).png';
import dead5 from '../../../images/hero/Dead (5).png';
import dead6 from '../../../images/hero/Dead (6).png';
import dead7 from '../../../images/hero/Dead (7).png';
import dead8 from '../../../images/hero/Dead (8).png';
import dead9 from '../../../images/hero/Dead (9).png';
import dead10 from '../../../images/hero/Dead (10).png';

export default class SpriteDeadHero extends Sprite {
    constructor() {
        super([dead1, dead2, dead3, dead4, dead5, dead6, dead7, dead8, dead9, dead10]);
    }
}