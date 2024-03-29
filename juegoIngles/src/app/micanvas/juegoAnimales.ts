import {Actividad1} from './actividad1';
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Button,ButtonListener} from '../milib/views/buttons/button';
import {Window} from '../milib/views/windows/window';
import {Sticker,stickerListener} from '../milib/views/stickers/sticker';
import { Label } from '../milib/views/labels/label';




export class JuegoAnimales implements EventsAdminListener,ButtonListener,stickerListener{
    private motor:Motor;
    private actividad:Actividad1;
    //variables Escenario Juego
    private windowJuego:Window;
    private imgFondoSiluetas:Imagen;
    private panelStickers: Panel;
    private panelTrans: Panel;
    private panelTrans1: Panel;

    private panelBlackConejo:Panel;
    private panelBlackPez:Panel;
    private panelBlackLoro:Panel;
    private panelBlackPerro:Panel;
    private panelBlackGato:Panel;
    private panelBlackTortuga:Panel;
    private panelBlackPajaro:Panel;

    //Stickers
    private conejo:Sticker;
    private gato:Sticker;
    private loro:Sticker;
    private pajaro:Sticker;
    private perro:Sticker;
    private pez:Sticker;
    private tortuga:Sticker;

    private imgPrueba:Imagen;

    private audio; //Animals sound
    private audioGreat1;
    private audioGreat2;

    private imgVictoria:Imagen;

    //Labels
    private lblConejo:Label;
    private lblGato:Label;
    private lblLoro:Label;
    private lblPajaro:Label;
    private lblPerro:Label;
    private lblPez:Label;
    private lblTortuga:Label;


    
    constructor(vMotor:Motor,vActividad:Actividad1){
        this.motor=vMotor;
        this.actividad=vActividad;
        this.audio = new Audio('./assets/sounds/welcome.mp3');
        var aux= this;
        setTimeout(function() {
            aux.audio.play();
        }, 2000);
       
        this.crearEscenarioJuego();
        
    }

  
    private crearEscenarioJuego():void{
        let pmw=DataHolder.instance.nScreenWidth*0.6;
        let pmh=DataHolder.instance.nScreenHeight*0.6;
        let pmx=DataHolder.instance.nScreenWidth2-(pmw>>1);
        let pmy=DataHolder.instance.nScreenHeight2-(pmh>>1);

       

        this.imgFondoSiluetas = new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth*0.7,DataHolder.instance.nScreenHeight);
        this.imgFondoSiluetas.setImg('./assets/imagenesJuego/animales/animales2.jpg');
        this.motor.addViewToParentView(this.actividad.imagenFondo, this.imgFondoSiluetas);

        this.panelTrans = new Panel(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.panelTrans);

         ///////////////////////////////////////////////////////////////////
         /*PANELS BLACK STICKERS*/

        this.panelBlackConejo = new Panel(this.motor,0,0,DataHolder.instance.nScreenWidth*0.15,DataHolder.instance.nScreenHeight*0.38);
        this.panelBlackConejo.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackConejo);
        this.lblConejo = new Label(this.motor,0, this.panelBlackConejo.h*0.55,DataHolder.instance.nScreenWidth*0.15,DataHolder.instance.nScreenHeight*0.38);
        this.lblConejo.setTexto("Rabbit");
        this.lblConejo.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblConejo);
        this.motor.setViewVisibility(this.lblConejo.uid,false);

        this.panelBlackPez = new Panel(this.motor,DataHolder.instance.nScreenWidth*0.17,0,DataHolder.instance.nScreenWidth*0.175,DataHolder.instance.nScreenHeight*0.38);
        this.panelBlackPez.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackPez);
        this.lblPez = new Label(this.motor,DataHolder.instance.nScreenWidth*0.17,this.panelBlackPez.h*0.45,DataHolder.instance.nScreenWidth*0.175,DataHolder.instance.nScreenHeight*0.38);
        this.lblPez.setTexto("Fish");
        this.lblPez.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblPez);
        this.motor.setViewVisibility(this.lblPez.uid,false);

        this.panelBlackLoro = new Panel(this.motor,DataHolder.instance.nScreenWidth*0.354,DataHolder.instance.nScreenHeight*0.07,DataHolder.instance.nScreenWidth*0.15,DataHolder.instance.nScreenHeight*0.4);
        this.panelBlackLoro.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackLoro);
        this.lblLoro = new Label(this.motor,DataHolder.instance.nScreenWidth*0.354,this.panelBlackLoro.h*(-0.40),DataHolder.instance.nScreenWidth*0.15,DataHolder.instance.nScreenHeight*0.4);
        this.lblLoro.setTexto("Parrot");
        this.lblLoro.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblLoro);
        this.motor.setViewVisibility(this.lblLoro.uid,false);

        this.panelBlackPerro = new Panel(this.motor,DataHolder.instance.nScreenWidth*0.49,0,DataHolder.instance.nScreenWidth*0.19,DataHolder.instance.nScreenHeight*0.457);
        this.panelBlackPerro.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackPerro);
        this.lblPerro = new Label(this.motor,this.panelBlackPerro.x+this.panelBlackPerro.x*0.1,0,DataHolder.instance.nScreenWidth*0.19,DataHolder.instance.nScreenHeight*0.457);
        this.lblPerro.setTexto("Dog");
        this.lblPerro.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblPerro);
        this.motor.setViewVisibility(this.lblPerro.uid,false);

        this.panelBlackGato = new Panel(this.motor,0,DataHolder.instance.nScreenHeight*0.41,DataHolder.instance.nScreenWidth*0.18,DataHolder.instance.nScreenHeight*0.38);
        this.panelBlackGato.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackGato);
        this.lblGato = new Label(this.motor,0,this.panelBlackGato.y*1.6,DataHolder.instance.nScreenWidth*0.18,DataHolder.instance.nScreenHeight*0.38);
        this.lblGato.setTexto("Cat");
        this.lblGato.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblGato);
        this.motor.setViewVisibility(this.lblGato.uid,false);

        this.panelBlackTortuga = new Panel(this.motor,DataHolder.instance.nScreenWidth*0.22,DataHolder.instance.nScreenHeight*0.53,DataHolder.instance.nScreenWidth*0.175,DataHolder.instance.nScreenHeight*0.42);
        this.panelBlackTortuga.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackTortuga);
        this.lblTortuga = new Label(this.motor,DataHolder.instance.nScreenWidth*0.22,this.panelBlackTortuga.y*1.2,DataHolder.instance.nScreenWidth*0.175,DataHolder.instance.nScreenHeight*0.42);
        this.lblTortuga.setTexto("Turtle");
        this.lblTortuga.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblTortuga);
        this.motor.setViewVisibility(this.lblTortuga.uid,false);

        this.panelBlackPajaro = new Panel(this.motor,DataHolder.instance.nScreenWidth*0.4,DataHolder.instance.nScreenHeight*0.50,DataHolder.instance.nScreenWidth*0.22,DataHolder.instance.nScreenHeight*0.365);
        this.panelBlackPajaro.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackPajaro);
        this.lblPajaro = new Label(this.motor,this.panelBlackPajaro.x*1.2,this.panelBlackPajaro.y*0.75,DataHolder.instance.nScreenWidth*0.22,DataHolder.instance.nScreenHeight*0.365);
        this.lblPajaro.setTexto("Bird");
        this.lblPajaro.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblPajaro);
        this.motor.setViewVisibility(this.lblPajaro.uid,false);


        ///////////////////////////////////////////////////////////////////

        this. panelStickers = new Panel(this.motor,DataHolder.instance.nScreenWidth*0.7,0,DataHolder.instance.nScreenWidth*0.3,DataHolder.instance.nScreenHeight);
        this. panelStickers.setColor("white");
        this.motor.addViewToParentView(this.panelTrans, this. panelStickers);

        this.windowJuego = new Window(this.motor,0,0,DataHolder.instance.nScreenWidth*0.7,DataHolder.instance.nScreenHeight);
        this.windowJuego.setImagePath('./assets/imagenesJuego/animales/fAnimales1.png');
        this.motor.addViewToParentView(this.panelTrans, this.windowJuego);

        this.conejo = new Sticker(this.motor,DataHolder.instance.nScreenWidth*0.6,DataHolder.instance.nScreenHeight*0.01,DataHolder.instance.nScreenWidth*0.12,DataHolder.instance.nScreenHeight*0.32);
        this.conejo.setImg('./assets/imagenesJuego/animales/conejo.png');
        this.conejo.setName("conejo");
        this.motor.addViewToParentView(this.windowJuego, this.conejo);
        this.conejo.setListener(this);
        EventsAdmin.instance.addMouseDragToView(this.conejo);

        this.gato = new Sticker(this.motor,DataHolder.instance.nScreenWidth*0.65,DataHolder.instance.nScreenHeight*0.38,DataHolder.instance.nScreenWidth*0.15,DataHolder.instance.nScreenHeight*0.35);
        this.gato.setImg('./assets/imagenesJuego/animales/gato.png');
        this.gato.setName("gato");
        this.motor.addViewToParentView(this.windowJuego, this.gato);
        this.gato.setListener(this);
        EventsAdmin.instance.addMouseDragToView(this.gato);

        this.pez = new Sticker(this.motor,DataHolder.instance.nScreenWidth*0.67,DataHolder.instance.nScreenHeight*0.7,DataHolder.instance.nScreenWidth*0.18,DataHolder.instance.nScreenHeight*0.28);
        this.pez.setImg('./assets/imagenesJuego/animales/pez.png');
        this.pez.setName("pez");
        this.motor.addViewToParentView(this.windowJuego, this.pez);
        this.pez.setListener(this);
        EventsAdmin.instance.addMouseDragToView(this.pez);

        this.loro = new Sticker(this.motor,DataHolder.instance.nScreenWidth*0.72,DataHolder.instance.nScreenHeight*0.05,DataHolder.instance.nScreenWidth*0.15,DataHolder.instance.nScreenHeight*0.35);
        this.loro.setImg('./assets/imagenesJuego/animales/loro.png');
        this.loro.setName("loro");
        this.motor.addViewToParentView(this.windowJuego, this.loro);
        this.loro.setListener(this);
        EventsAdmin.instance.addMouseDragToView(this.loro);

        this.perro = new Sticker(this.motor,DataHolder.instance.nScreenWidth*0.84,DataHolder.instance.nScreenHeight*0.015,DataHolder.instance.nScreenWidth*0.19,DataHolder.instance.nScreenHeight*0.4);
        this.perro.setImg('./assets/imagenesJuego/animales/perro.png');
        this.perro.setName("perro");
        this.motor.addViewToParentView(this.windowJuego, this.perro);
        this.perro.setListener(this);
        EventsAdmin.instance.addMouseDragToView(this.perro);

        this.tortuga = new Sticker(this.motor,DataHolder.instance.nScreenWidth*0.8,DataHolder.instance.nScreenHeight*0.4,DataHolder.instance.nScreenWidth*0.19,DataHolder.instance.nScreenHeight*0.29);
        this.tortuga.setImg('./assets/imagenesJuego/animales/tortuga.png');
        this.tortuga.setName("tortuga");
        this.motor.addViewToParentView(this.windowJuego, this.tortuga);
        this.tortuga.setListener(this);
        EventsAdmin.instance.addMouseDragToView(this.tortuga);

        this.pajaro = new Sticker(this.motor,DataHolder.instance.nScreenWidth*0.84,DataHolder.instance.nScreenHeight*0.67,DataHolder.instance.nScreenWidth*0.18,DataHolder.instance.nScreenHeight*0.35);
        this.pajaro.setImg('./assets/imagenesJuego/animales/pajaro.png');
        this.pajaro.setName("pajaro");
        this.motor.addViewToParentView(this.windowJuego, this.pajaro);
        this.pajaro.setListener(this);
        EventsAdmin.instance.addMouseDragToView(this.pajaro);

        this.imgVictoria = new Imagen(this.motor,pmx,pmy,pmw,pmh);
        this.imgVictoria.setImg("./assets/great.jpg");
        this.motor.addViewToParentView(this.imgFondoSiluetas,this.imgVictoria);
        this.motor.setViewVisibility(this.imgVictoria.uid,false);
      // PRUEBA         this.motor.setViewVisibility(this.windowJuego.uid,false);



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
        if(sticker.getName()=='conejo' && (sticker.x>0 && sticker.x<DataHolder.instance.nScreenWidth*0.15) && (sticker.y>0 && sticker.y<DataHolder.instance.nScreenHeight*0.35)){
            this.motor.setViewVisibility(sticker.uid,false);
            this.motor.setViewVisibility(this.panelBlackConejo.uid,false);
            this.audio = new Audio('./assets/sounds/rabbit.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblConejo.uid,true);
         }else if(sticker.getName()=='gato' && (sticker.x>0 && sticker.x<DataHolder.instance.nScreenWidth*0.18) && (sticker.y>DataHolder.instance.nScreenHeight*0.41 && sticker.y<DataHolder.instance.nScreenHeight*0.76)){
             this.motor.setViewVisibility(sticker.uid,false);
             this.motor.setViewVisibility(this.panelBlackGato.uid,false);
                this.audio = new Audio('./assets/sounds/cat.mp3');
                this.audio.play();
                this.motor.setViewVisibility(this.lblGato.uid,true);
         }else if(sticker.getName()=='pez' && (sticker.x>DataHolder.instance.nScreenWidth*0.17 && sticker.x<DataHolder.instance.nScreenWidth*0.345) && (sticker.y>0 && sticker.y<DataHolder.instance.nScreenHeight*0.38)){
            this.motor.setViewVisibility(sticker.uid,false);
            this.motor.setViewVisibility(this.panelBlackPez.uid,false);
            this.audio = new Audio('./assets/sounds/fish.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblPez.uid,true);
         }else if(sticker.getName()=='loro' && (sticker.x>DataHolder.instance.nScreenWidth*0.354 && sticker.x<DataHolder.instance.nScreenWidth*0.484) && (sticker.y>0 && sticker.y<DataHolder.instance.nScreenHeight*0.452)){
            this.motor.setViewVisibility(sticker.uid,false);
            this.motor.setViewVisibility(this.panelBlackLoro.uid,false);
            this.audio = new Audio('./assets/sounds/parrot.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblLoro.uid,true);
         }else if(sticker.getName()=='perro' && (sticker.x>DataHolder.instance.nScreenWidth*0.49&& sticker.x<DataHolder.instance.nScreenWidth*0.68) && (sticker.y>0 && sticker.y<DataHolder.instance.nScreenHeight*0.457)){
            this.motor.setViewVisibility(sticker.uid,false);
            this.motor.setViewVisibility(this.panelBlackPerro.uid,false);
            this.audio = new Audio('./assets/sounds/dog.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblPerro.uid,true);
         }else if(sticker.getName()=='tortuga' && (sticker.x>DataHolder.instance.nScreenWidth*0.22&& sticker.x<DataHolder.instance.nScreenWidth*0.75) && (sticker.y>DataHolder.instance.nScreenHeight*0.53 && sticker.y<DataHolder.instance.nScreenHeight*0.95)){
            this.motor.setViewVisibility(sticker.uid,false);
            this.motor.setViewVisibility(this.panelBlackTortuga.uid,false);
            this.audio = new Audio('./assets/sounds/turtle.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblTortuga.uid,true);
         }else if(sticker.getName()=='pajaro' && (sticker.x>DataHolder.instance.nScreenWidth*0.4&& sticker.x<DataHolder.instance.nScreenWidth*0.62) && (sticker.y>DataHolder.instance.nScreenHeight*0.5 && sticker.y<DataHolder.instance.nScreenHeight*0.865)){
            this.motor.setViewVisibility(sticker.uid,false);
            this.motor.setViewVisibility(this.panelBlackPajaro.uid,false);
            this.audio = new Audio('./assets/sounds/bird.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblPajaro.uid,true);
         }
         this.comprobarVictoria();
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

      private comprobarVictoria():void{
          if(this.panelBlackConejo.blVisible==false && this.panelBlackGato.blVisible==false && this.panelBlackPez.blVisible==false && this.panelBlackLoro.blVisible==false&& this.panelBlackPerro.blVisible==false && this.panelBlackTortuga.blVisible==false && this.panelBlackPajaro.blVisible==false){
            console.log("GANSTEEEEEE!!!!!!!!!!!!! YUPIIIIIIIIIIII!!!!!!!");
         
            var aux= this;
            setTimeout(function() {
                aux.motor.setViewVisibility(aux.imgVictoria.uid,true);
                aux.audioGreat2 = new Audio ('./assets/sounds/aplausos.mp3');
                aux.audioGreat1 = new Audio('./assets/sounds/congratulations.mp3');
                aux.audioGreat2.play();
                aux.audioGreat1.play();
                setTimeout(function() {
                    location.reload(); // recarga la página para volver al menu
                }, 3000);
            }, 2500);
            
          }
      }

     

}