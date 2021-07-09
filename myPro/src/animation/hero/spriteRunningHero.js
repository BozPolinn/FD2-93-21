import Sprite from "../sprite";
import run1 from "../../../images/hero/Run (1).png";
import run2 from "../../../images/hero/Run (2).png";
import run3 from "../../../images/hero/Run (3).png";
import run4 from "../../../images/hero/Run (4).png";
import run5 from "../../../images/hero/Run (5).png";
import run6 from "../../../images/hero/Run (6).png";
import run7 from "../../../images/hero/Run (7).png";
import run8 from "../../../images/hero/Run (8).png";
import run9 from "../../../images/hero/Run (9).png";
import run10 from "../../../images/hero/Run (10).png";

export default class SpriteRunningHero extends Sprite {
    constructor() {
        super([run1, run2, run3, run4, run5, run6, run7, run8, run9, run10]);
    }
}