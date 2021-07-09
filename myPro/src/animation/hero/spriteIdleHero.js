import Sprite from "../sprite";
import idle1 from '../../../images/hero/Idle (1).png';
import idle2 from '../../../images/hero/Idle (2).png';
import idle3 from '../../../images/hero/Idle (3).png';
import idle4 from '../../../images/hero/Idle (4).png';
import idle5 from '../../../images/hero/Idle (5).png';
import idle6 from '../../../images/hero/Idle (6).png';
import idle7 from '../../../images/hero/Idle (7).png';
import idle8 from '../../../images/hero/Idle (8).png';
import idle9 from '../../../images/hero/Idle (9).png';
import idle10 from '../../../images/hero/Idle (10).png';

export default class SpriteIdleHero extends Sprite {
    constructor() {
        super([idle1, idle2, idle3, idle4, idle5, idle6, idle7, idle8, idle9, idle10]);
    }
}