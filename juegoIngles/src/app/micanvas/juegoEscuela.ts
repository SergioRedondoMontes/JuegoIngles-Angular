import {Actividad1} from './actividad1';
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Button,ButtonListener} from '../milib/views/buttons/button';
import {Window} from '../milib/views/windows/window';
import {Sticker} from '../milib/views/stickers/sticker';




export class JuegoEscuela implements EventsAdminListener,ButtonListener{
  panelImg: Panel;
  imgFondoEscuela: any;
    private motor:Motor;
    private actividad:Actividad1;
    //variables Escenario Juego
    private windowJuego:Window;
    //Stickers
    private borrador:Sticker;
    private lapiz:Sticker;
    private libro:Sticker;
    private mochila:Sticker;
    private regla:Sticker;   
    private sacapuntas:Sticker;
    private tijeras:Sticker;
   

    constructor(vMotor:Motor,vActividad:Actividad1){
      console.log("----------------------->>>>>> ");
        this.motor=vMotor;
        this.actividad=vActividad;
        this.crearEscenarioJuego();
    }

  
    private crearEscenarioJuego():void{
      this.imgFondoEscuela = new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
      this.imgFondoEscuela.setImg('./assets/comingSoon.jpg');
      this.motor.addViewToParentView(this.actividad.imagenFondo, this.imgFondoEscuela);
      this.panelImg = new Panel(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
      this.motor.addViewToParentView(this.imgFondoEscuela, this.panelImg);
      // console.log("----------------------->>>>>> JUEGO ESCUELA");
      // this.windowJuego = new Window(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
      // this.windowJuego.setImagePath('./assets/imagenesJuego/materialEscolar/materialEscolar.png');
      // this.motor.addViewToParentView(this.actividad.imagenFondo, this.windowJuego);
      // this.borrador = new Sticker(this.motor,0,0,DataHolder.instance.nScreenWidth*0.3,DataHolder.instance.nScreenHeight*0.3);
      // this.borrador.setImg('./assets/imagenesJuego/materialEscolar/borrador.png');
      // this.motor.addViewToParentView(this.windowJuego, this.borrador);
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