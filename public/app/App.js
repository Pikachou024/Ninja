import { Scene } from './Scene.js';

export class App
{
    getScene(){
        return this.scene;
    }
    setScene(scene){
        this.scene = scene;
        return this;
    }

    constructor() {
        this.init();
        console.log('Toast');

    }
    init(){
        this.setScene(new Scene())
    }


}