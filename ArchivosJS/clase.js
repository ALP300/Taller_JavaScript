class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
    
}

const persona1= new Persona('Luis','30')
const persona2= new Persona('Pepe','50')
persona1.saludar();
persona2.saludar();
console.log(persona1)
console.log(persona2)