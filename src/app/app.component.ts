
//Decorador - typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  palabra = 'PASTO'; //property of the class
  palabraOculta = '_ '; //property of the class


  letras =  [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
              'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
              'V', 'W', 'X', 'Y', 'Z'];

  constructor(){
    //Code for hide the word
    //(this.) Reference to a property of the class
    this.palabraOculta = '_ '.repeat( this.palabra.length );

  }

  //Method
  comprobar( letra: any, ){
                                  //Add a space o separation
    const palabraOcultaArr = this.palabraOculta.split(' ');

    for( let i = 0; i < this.palabra.length; i++){
                
      //[i]: Because each letter of the word will be traversed
      if( this.palabra[i] === letra){
        //Replace the value of the arrat
        palabraOcultaArr[i] = letra;
      }

    }

    this.palabraOculta = palabraOcultaArr.join(' ');


  }

}
