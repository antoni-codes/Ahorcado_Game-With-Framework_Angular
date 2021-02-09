
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
  
  intentos = 0; //Property of the class - used on the method existeLetra()

  gano = false;
  perdio = false;

  constructor(){
    //Code for hide the word
    //(this.) Reference to a property of the class
    this.palabraOculta = '_ '.repeat( this.palabra.length );
  }


  //Method
  comprobar( letra: any, ){
                    //request the argument ( letra )
    this.existeLetra( letra )
                                  //Add a space o separation
    const palabraOcultaArr = this.palabraOculta.split(' ');

    for( let i = 0; i < this.palabra.length; i++){                
      //[i]: Because each letter of the word will be traversed
      if( this.palabra[i] === letra){
        //Replace the value of the arrat
        palabraOcultaArr[i] = letra;
      }
    }
                                  //Join 
    this.palabraOculta = palabraOcultaArr.join(' ');

    //Add method to the function comprobar 
    this.verificaVictoria();
  
  }


  //Method
  verificaVictoria(){

                                            //Convert this to an array and put a space between
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    console.log(palabraEvaluar);


    //Condition if Win
    if ( palabraEvaluar  === this.palabra ) {
      this.gano = true;
      // console.log( "El usuario Gano" );
    }

    //Condition if Lose
    if ( this.intentos >= 9){
      this.perdio = true;
      // console.log( "El usuario Perdio" );
    }


  }


  //Method number of tries
  existeLetra ( letra: any, ){

    if ( this.palabra.indexOf( letra ) >= 0 ){
      // console.log("Letra existe");
    } else {
      // console.log("Letra NO existe")
      //Increment of tries
      this.intentos++;
    }

  }

}
