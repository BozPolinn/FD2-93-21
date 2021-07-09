export default class Sprite {
    constructor(images) {
        this.images = images.map(getImage);

        function getImage(imagePath) {
            const img = new Image(225, 150);
            img.src = imagePath;
            return img;
        }
    }


}