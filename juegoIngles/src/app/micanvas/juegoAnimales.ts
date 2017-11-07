import {Actividad1} from './actividad1';
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Button,ButtonListener} from '../milib/views/buttons/button';
import {Window} from '../milib/views/windows/window';
import {Sticker} from '../milib/views/stickers/sticker';




export class JuegoAnimales implements EventsAdminListener,ButtonListener{
    private motor:Motor;
    private actividad:Actividad1;
    //variables Escenario Juego
    private windowJuego:Window;
    //Stickers
    private conejo:Sticker;
    private gato:Sticker;
    private loro:Sticker;
    private pajaro:Sticker;
    private perro:Sticker;
    private pez:Sticker;
    private tortuga:Sticker;

    private imgPrueba:Imagen;
   

    constructor(vMotor:Motor,vActividad:Actividad1){
        this.motor=vMotor;
        this.actividad=vActividad;
        this.crearEscenarioJuego();
    }

  
    private crearEscenarioJuego():void{
        console.log("----------------------->>>>>> JUEGO ANIMALES");
        this.windowJuego = new Window(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.windowJuego.setImagePath('./assets/imagenesJuego/animales/fAnimales.png');
        this.motor.addViewToParentView(this.actividad.imagenFondo, this.windowJuego);

        this.conejo = new Sticker(this.motor,0,0,DataHolder.instance.nScreenWidth*0.2,DataHolder.instance.nScreenHeight*0.38);
        this.conejo.setImg('./assets/imagenesJuego/animales/conejo.png');
        this.conejo.setName("conejo");
        this.motor.addViewToParentView(this.windowJuego, this.conejo);
        EventsAdmin.instance.addMouseDragToView(this.conejo);

        this.gato = new Sticker(this.motor,0,50,DataHolder.instance.nScreenWidth*0.2,DataHolder.instance.nScreenHeight*0.39);
        this.gato.setImg('./assets/imagenesJuego/animales/gato.png');
        this.gato.setName("gato");
        this.motor.addViewToParentView(this.windowJuego, this.gato);
        EventsAdmin.instance.addMouseDragToView(this.gato);
        /*
        this.imgPrueba = new Imagen(this.motor,0,0,this.windowJuego.w*0.2,this.windowJuego.h*0.38);
        this.imgPrueba.setImg('./assets/btnColores.jpg');
        this.motor.addViewToParentView(this.windowJuego,this.imgPrueba);
        */
        
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