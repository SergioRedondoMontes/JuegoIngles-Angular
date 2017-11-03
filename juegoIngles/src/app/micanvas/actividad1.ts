
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Button,ButtonListener} from '../milib/views/buttons/button';
import {Window} from '../milib/views/windows/window';



export class Actividad1 implements EventsAdminListener,ButtonListener{
    private motor:Motor;
    private imagenFondo:Imagen;
    //variables menú
    private panelMenu:Panel;
    private btnPlay: Button;
    private btnExit: Button;
    //variables Escenario Juego
    private windowSelector: Window;
    private btnColores: Button;
    private btnAnimales: Button;
    private btnEscuela: Button;
    private windowJuego:Window;

   

   

    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/fondoMenu.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        this.crearEscenarioJuego();
        
    }

    

    /**
     * OJO!! AUNQUE EN ESTE EJEMPLO SE USE EL PANEL, ES OBLIGATORIO CREAR UN OBJETO WINDOW EN EL MILIB, Y AGREGARLE EL BOTON
     * DE SALIR EN LA ESQUINA COMO SALE EN EL LA PAGINA WEB. HABRA QUE QUITAR EL PANEL Y USAR WINDOW
     */
    private crearEscenarioMenu():void{
        let pmw=DataHolder.instance.nScreenWidth*0.6;
        let pmh=DataHolder.instance.nScreenHeight*0.6;
        let pmx=DataHolder.instance.nScreenWidth2-(pmw>>1);
        let pmy=DataHolder.instance.nScreenHeight2-(pmh>>1);
        this.panelMenu = new Panel(this.motor,pmx,pmy,pmw,pmh);
       // this.panelMenu.setImagePath('./assets/backgroundPanel.png');
        this.motor.addViewToParentView(this.imagenFondo,this.panelMenu);
        this.btnPlay= new Button(this.motor,this.panelMenu.w/2-(this.panelMenu.w/3)/2,this.panelMenu.h/6,this.panelMenu.w/3,this.panelMenu.h/4);
        this.btnPlay.setImagePath('./assets/BTNPlay.png');
       
        this.motor.addViewToParentView(this.panelMenu,this.btnPlay);
        this.btnPlay.setListener(this);

        this.btnExit= new Button(this.motor,this.panelMenu.w/2-(this.panelMenu.w/3)/2,this.panelMenu.h/1.8,this.panelMenu.w/3,this.panelMenu.h/4);
        this.btnExit.setImagePath('./assets/btnExit.png');
        this.motor.addViewToParentView(this.panelMenu,this.btnExit);
        this.btnExit.setListener(this);


    }

    private crearEscenarioJuego():void{
        this.windowSelector = new Window(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.motor.addViewToParentView(this.imagenFondo, this.windowSelector);


        this.btnColores = new Button(this.motor,this.windowSelector.w*0.0625,0.15*this.windowSelector.h,this.windowSelector.w*0.20,this.windowSelector.h*0.25);
        this.btnColores.setImagePath('./assets/btnColores.jpg');
        this.motor.addViewToParentView(this.windowSelector,this.btnColores);
     


        this.btnAnimales = new Button(this.motor,this.btnColores.w+(this.windowSelector.w*0.125),0.15*this.windowSelector.h,this.windowSelector.w*0.20,this.windowSelector.h*0.25);
        this.btnAnimales.setImagePath('./assets/btnAnimales.jpg');
        this.motor.addViewToParentView(this.windowSelector,this.btnAnimales);
        

        this.btnEscuela = new Button(this.motor,(this.btnAnimales.x+this.windowSelector.w*0.25)+this.windowSelector.w*0.0625,0.15*this.windowSelector.h,this.windowSelector.w*0.20,this.windowSelector.h*0.25);
        this.btnEscuela.setImagePath('./assets/btnEscuela.jpeg');
        this.motor.addViewToParentView(this.windowSelector,this.btnEscuela);
       
        this.motor.setViewVisibility(this.windowSelector.uid,false);
    }


    buttonListenerOnClick?(btn:Button):void{
        console.log("dentro");
        if(this.btnPlay==btn){
            console.log("play");
            this.motor.setViewVisibility(this.panelMenu.uid,false);
            this.motor.setViewVisibility(this.windowSelector.uid,true);
        }else if(this.btnExit==btn){
            this.motor.setViewVisibility(this.panelMenu.uid,false);
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