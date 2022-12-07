/* just a blueprint for objects we create since classes can have instance */
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    
    constructor(name: string, description: string, imagePath: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}
