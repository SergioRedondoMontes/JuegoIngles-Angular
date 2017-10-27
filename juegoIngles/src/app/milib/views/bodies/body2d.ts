import { View } from '../view';
import {Motor} from '../../engines/motor';
import {World2D} from '../../physics/world2d';

export class Body2D extends View{

    private arBody2DListeners=[];
    public sBackColor:string=null;

    public addListener(listener:Body2DListener):void{
        if(this.arBody2DListeners.indexOf(listener)==-1)this.arBody2DListeners.push(listener);
    }

    public addColissions():void{
        if(World2D.instance == null)World2D.instance=new World2D();
        World2D.instance.addColissionToBody2D(this);
    }


    paint(vctx:CanvasRenderingContext2D){
        
        if(this.sBackColor!=null){
            vctx.fillStyle = this.sBackColor;  
            vctx.fillRect(this.xa, this.ya, this.w, this.h);
        }
        
    }

    public colissionDetected(bcol:Body2D):void{
        for(let i=0;i<this.arBody2DListeners.length;i++){
            if(this.arBody2DListeners[i].body2DlistColDetected!=undefined){
                this.arBody2DListeners[i].body2DlistColDetected(this,bcol);
            }
            
        }
    }

}

export interface Body2DListener{
    body2DlistColDetected?(b1:Body2D,b2:Body2D):void;
   
}