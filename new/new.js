class Cinderala {
    constructor(name, age, footSize) {
        this.name = name|| 'Vasia';
        this.age =age|| 200;
        this.footSize = footSize|| 28;
    }
}

class Prince {
    constructor(name, age, footSize) {
        this.name = name|| 'Vasia';
        this.age =age|| 200;
        this.footSize = footSize|| 28;
        this.arrGirls =[];

    }
    generateGirls(){
        for (let i = 0; i < 10; i++) {
            this.arrGirls.push(new Cinderala(`Cinderala${i+1}`, Math.round(Math.random(100)),Math.round(Math.random(100))))
        }
    }
}

let prince = new Prince();
prince.generateGirls();
console.log(prince);
