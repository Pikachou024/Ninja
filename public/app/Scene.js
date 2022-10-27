export class Scene{
    getInit(){
        return this.init();
    }

    getConteneur(){
        return this.conteneur;
    }
    setConteneur(conteneur){
        this.conteneur = conteneur;
        return this;
    }

    getLimites(){
        return this.limites
    }
    setLimites(limites){
        this.limites = limites;
        return this;
    }

    getBackground(){
        return this.background;
    }
    setBackground(background){
        this.background = background;
        return this;
    }

    constructor() {
        this.init();
    }

    init(){
        this.setConteneur(this.buildConteneur())
        .setLimites(this.buildLimites())
        .setBackground(this.buildBackground());
    }

    buildConteneur(){
        let cmt = document.createElement('div');
        document.body.appendChild(cmt);
        return cmt;
    }
    buildLimites(){
        let coord = {
            'x' : '100%' ,
            'y' : '100%'
        }
        return coord;
    }
    buildBackground(){
        return 'foret';
    }
}
