import {View} from '../view';
import {Motor} from '../../engines/motor';
import {Button,ButtonListener} from '../buttons/button';

export class Window extends View implements ButtonListener{

    private sColor:string='#FFFFFF';
    private btnSalir:Button;
    private btnMove:Button;
    private listener:WindowListener;
    

    constructor(vmotor:Motor,vX:number,vY:number,vW:number,vH:number){
        super(vmotor,vX,vY,vW,vH);
        let btnsWidth=vW*0.1;
        let btnsHeight=vH*0.1;

        this.btnSalir=new Button(this.motor,this.w-btnsWidth,0,btnsWidth,btnsHeight);
        this.btnSalir.setTexto("Salir");
        this.btnSalir.setListener(this);
        this.motor.addViewToParentView(this,this.btnSalir);

        this.btnMove=new Button(this.motor,0,0,btnsWidth,btnsHeight);
        this.btnMove.setTexto("Move");
        this.btnMove.setListener(this);
        this.motor.addViewToParentView(this,this.btnMove);

    }

     /**
     * Metodo de setter para el listener que escuche los eventos del Window.
     */
    public setListener(listener:WindowListener):void{
        this.listener=listener;
    }
    
    public setColor(vsColor:string):void{
        this.sColor=vsColor;
    }
    
    paint(vctx:CanvasRenderingContext2D){
        
    
        vctx.fillStyle = this.sColor;  
        vctx.fillRect(this.x, this.y, this.w, this.h);
        
    }

    public setSize(vWidth:number,vHeight:number):void{
        super.setSize(vWidth,vHeight);
        let btnsWidth=vWidth*0.1;
        let btnsHeight=vHeight*0.1;
        this.btnSalir.setSize(btnsWidth,btnsHeight);
        this.btnMove.setSize(btnsWidth,btnsHeight);
    }

    buttonListenerOnClick?(btn:Button):void{
        if(this.btnSalir==btn){
            if(this.listener!=null)this.listener.buttonExitClicked(this);
        }
        else if(this.btnMove==btn){
            if(this.listener!=null)this.listener.buttonMoveClicked(this);
        }

    }

}

/**
 * Interface que representara el listener del Boton.
 */
export interface WindowListener{
    /**
     * Metodo de notificacion del boton para avisar de que se ha presionado en el boton.
     */
    buttonExitClicked?(win:Window):void;
    buttonMoveClicked?(win:Window):void;
   
}