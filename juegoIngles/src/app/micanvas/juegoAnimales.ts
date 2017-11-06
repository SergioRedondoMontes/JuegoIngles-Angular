
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Button,ButtonListener} from '../milib/views/buttons/button';
import {Window} from '../milib/views/windows/window';




export class JuegoAnimales implements EventsAdminListener,ButtonListener{
    private motor:Motor;
    private imagenFondo:Imagen;
    //variables Escenario Juego
    private windowJuego:Window;

   

   

    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/fondoMenu.jpg');
        this.motor.setRaiz(this.imagenFondo);
    }

  
    private crearEscenarioJuego():void{
        this.windowJuego = new Window(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.motor.addViewToParentView(this.imagenFondo, this.windowJuego);
        
    }


    buttonListenerOnClick?(btn:Button):void{
        

    }
    

    


    screenSizeChanged?(vWidth:number,vHeight:number):void{
        //console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
      }

      buttonExitClicked?(win:Window):void{
        console.log("PRESIONO SALIR");
      }
      buttonMoveClicked?(win:Window):void{
        console.log("PRESIONO MOVER");
      }

}