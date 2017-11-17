import {Actividad1} from './actividad1';
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Button,ButtonListener} from '../milib/views/buttons/button';
import {Window} from '../milib/views/windows/window';




export class JuegoColores implements EventsAdminListener,ButtonListener{
  panelImg: Panel;
    private motor:Motor;
    private imagenFondo:Imagen;
    //variables Escenario Juego
    private windowJuego:Window;
    private imgFondoColores:Imagen;
    private actividad:Actividad1;

   

    constructor(vMotor:Motor,vActividad:Actividad1){
      this.motor=vMotor;
      this.actividad=vActividad;
      this.crearEscenarioJuego();
        // this.motor=vMotor;
        // this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        // this.imagenFondo.setImg('./assets/fondoMenu.jpg');
        // this.motor.setRaiz(this.imagenFondo);
    }

  
    private crearEscenarioJuego():void{
      this.imgFondoColores = new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
      this.imgFondoColores.setImg('./assets/comingSoon.jpg');
      this.motor.addViewToParentView(this.actividad.imagenFondo, this.imgFondoColores);
      this.panelImg = new Panel(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
      this.motor.addViewToParentView(this.imgFondoColores, this.panelImg);
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