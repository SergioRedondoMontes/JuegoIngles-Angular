import {Actividad1} from './actividad1';
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Button,ButtonListener} from '../milib/views/buttons/button';
import {Window} from '../milib/views/windows/window';
import {Sticker,stickerListener} from '../milib/views/stickers/sticker';




export class JuegoAnimales implements EventsAdminListener,ButtonListener,stickerListener{
    private motor:Motor;
    private actividad:Actividad1;
    //variables Escenario Juego
    private windowJuego:Window;
    private imgFondoSiluetas:Imagen;
    private panelStickers: Panel;
    private panelTrans: Panel;

    private panelBlack1:Panel;
    private panelBlack2:Panel;
    private panelBlack3:Panel;
    private panelBlack4:Panel;
    private panelBlack5:Panel;
    private panelBlack6:Panel;
    private panelBlack7:Panel;

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

       

        this.imgFondoSiluetas = new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imgFondoSiluetas.setImg('./assets/imagenesJuego/animales/animales2.jpg');
        this.motor.addViewToParentView(this.actividad.imagenFondo, this.imgFondoSiluetas);

        this.panelTrans = new Panel(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.panelTrans);


        this.panelBlack1 = new Panel(this.motor,0,0,DataHolder.instance.nScreenWidth*0.2,DataHolder.instance.nScreenHeight*0.38);
        this.panelBlack1.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlack1);


        this.windowJuego = new Window(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.windowJuego.setImagePath('./assets/imagenesJuego/animales/fAnimales1.png');
        this.motor.addViewToParentView(this.panelTrans, this.windowJuego);




        this.conejo = new Sticker(this.motor,0,0,DataHolder.instance.nScreenWidth*0.2,DataHolder.instance.nScreenHeight*0.38);
        this.conejo.setImg('./assets/imagenesJuego/animales/conejo.png');
        this.conejo.setName("conejo");
        this.motor.addViewToParentView(this.windowJuego, this.conejo);
        this.conejo.setListener(this);
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

    
    buttonListenerOnUp?(sticker:Sticker):void{
        console.log("holaaaaaaaaaa");
        console.log("Nombre: "  + sticker.getName());
        if(sticker.getName()=='conejo' && (sticker.x>0 && sticker.x<DataHolder.instance.nScreenWidth*0.2) && (sticker.y>0 && sticker.y<DataHolder.instance.nScreenHeight*0.38)){
            this.motor.setViewVisibility(sticker.uid,false);
            this.motor.setViewVisibility(this.panelBlack1.uid,false);
         }else if(sticker.getName()=='gato' && (sticker.x>0 && sticker.x<DataHolder.instance.nScreenWidth*0.2) && (sticker.y>DataHolder.instance.nScreenHeight*0.41 && sticker.y<DataHolder.instance.nScreenHeight*0.8)){
             this.motor.setViewVisibility(sticker.uid,false);
         }


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