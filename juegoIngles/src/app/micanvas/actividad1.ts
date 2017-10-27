
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Snake} from './snake'
import {Body2D,Body2DListener} from '../milib/views/bodies/body2d';
import {Button} from '../milib/views/buttons/button';
import {Window,WindowListener} from '../milib/views/windows/window';

export class Actividad1 implements EventsAdminListener,Body2DListener,WindowListener{

    private motor:Motor;
    //private panelMenu:Panel;
    private windowMenu:Window;
    //private panelJuego:Panel;
    private windowJuego:Window;
    private imagenFondo:Imagen;
    private snake:Snake;

    private cuerpoParedIzq:Body2D;
    private cuerpoParedDer:Body2D;
    private cuerpoParedTop:Body2D;
    private cuerpoParedBot:Body2D;

    private candy:Body2D;
    private nMinPosCandyX:number;
    private nMaxPosCandyX:number;
    private nMinPosCandyY:number;
    private nMaxPosCandyY:number;

    //private btnTemp:Button;

    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/backmain.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        
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
        let topBarHeight=40;
        this.windowMenu=new Window(this.motor,pmx,pmy,pmw,pmh);
        this.windowMenu.setListener(this);
        EventsAdmin.instance.addMouseDragToView(this.windowMenu);

        this.candy=new Body2D(this.motor,0,0,20,20);
        this.candy.sBackColor='#0000FF';

        this.snake=new Snake(this.motor,0,topBarHeight,pmw,pmh-topBarHeight);
        this.snake.setColorSnake('#FF0000');
        this.cuerpoParedIzq = new Body2D(this.motor,0,topBarHeight,20,pmh-topBarHeight);
        this.cuerpoParedIzq.addColissions();
        this.cuerpoParedIzq.sBackColor='#00FF00';
        this.cuerpoParedDer = new Body2D(this.motor,pmw-20,topBarHeight,20,pmh-topBarHeight);
        this.cuerpoParedDer.addColissions();
        this.cuerpoParedDer.sBackColor='#00FF00';
        this.cuerpoParedTop = new Body2D(this.motor,0,topBarHeight,pmw,20);
        this.cuerpoParedTop.addColissions();
        this.cuerpoParedTop.sBackColor='#00FF00';
        this.cuerpoParedBot = new Body2D(this.motor,0,pmh-20,pmw,20);
        this.cuerpoParedBot.addColissions();
        this.cuerpoParedBot.sBackColor='#00FF00';
        this.snake.sHead.addColissions();
        this.candy.addColissions();
        //this.cuerpoParedIzq.addListener(this);
        this.snake.sHead.addListener(this);

        this.nMinPosCandyX=0+20;
        this.nMaxPosCandyX=this.cuerpoParedDer.x-20;
        this.nMinPosCandyY=20+topBarHeight;
        this.nMaxPosCandyY=this.cuerpoParedBot.y-20-topBarHeight;

        //this.btnTemp=new Button(this.motor,50,50,100,100);

        this.motor.addViewToParentView(this.imagenFondo,this.windowMenu);
        this.motor.addViewToParentView(this.windowMenu,this.snake);
        this.motor.addViewToParentView(this.windowMenu,this.cuerpoParedIzq);
        this.motor.addViewToParentView(this.windowMenu,this.cuerpoParedDer);
        this.motor.addViewToParentView(this.windowMenu,this.cuerpoParedTop);
        this.motor.addViewToParentView(this.windowMenu,this.cuerpoParedBot);
        this.motor.addViewToParentView(this.windowMenu,this.candy);
        //this.motor.addViewToParentView(this.windowMenu,this.btnTemp);
        this.generateCandy();
    }

    private crearEscenarioJuego():void{
        
    }

    public generateCandy():void{
        let posx=this.nMinPosCandyX+(Math.random()*(this.nMaxPosCandyX-this.nMinPosCandyX));
        let posy=this.nMinPosCandyY+(Math.random()*(this.nMaxPosCandyY-this.nMinPosCandyY));
        this.candy.x=posx;
        this.candy.y=posy;
    }
    

    body2DlistColDetected?(b1:Body2D,b2:Body2D):void{
        //console.log("--------->>>>>>>> COLISION"+b1);
        if(b1==this.snake.sHead && b2==this.cuerpoParedIzq){
            console.log("--------->>>>>>>> COLISION CON PARED IZQ");
            this.snake.sHead.x+=2;
            this.snake.sHead.nDireccionH=this.snake.sHead.nDireccionH*-1;
        }
        else if(b1==this.snake.sHead && b2==this.cuerpoParedDer){
            console.log("--------->>>>>>>> COLISION CON PARED DER");
            this.snake.sHead.x-=2;
            this.snake.sHead.nDireccionH=this.snake.sHead.nDireccionH*-1;
        }
        else if(b1==this.snake.sHead && b2==this.cuerpoParedTop){
            console.log("--------->>>>>>>> COLISION CON PARED TOP");
            this.snake.sHead.y+=2;
            this.snake.sHead.nDireccionV=this.snake.sHead.nDireccionV*-1;
        }
        else if(b1==this.snake.sHead && b2==this.cuerpoParedBot){
            console.log("--------->>>>>>>> COLISION CON PARED BOT");
            this.snake.sHead.y-=2;
            this.snake.sHead.nDireccionV=this.snake.sHead.nDireccionV*-1;
        }
        else if(b1==this.snake.sHead && b2==this.candy){
            console.log("--------->>>>>>>> COLISION CON CANDY");
            this.generateCandy();
            this.snake.updateBody(1);
            //this.snake.w+=20;
            //this.snake.y-=2;
            //this.snake.nDireccionV=this.snake.nDireccionV*-1;
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