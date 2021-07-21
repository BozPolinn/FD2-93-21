export default class Sprite {
    constructor(array) {
        this.array = array.map( (x) => {
            const img = new Image(225, 150);
            img.src = x;
            return img;
        });
    }

    get length() {
        return this.array.length;
    }

    get = (index) => {
        return this.array[index];
    };
}