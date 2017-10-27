import {View} from '../view';
import {Motor} from '../../engines/motor'

export class Panel extends View{

    private sColor:string='#FFFFFF';
    
    
    public setColor(vsColor:string):void{
        this.sColor=vsColor;
    }
    
    paint(vctx:CanvasRenderingContext2D){
        
    
        vctx.fillStyle = this.sColor;  
        vctx.fillRect(this.x, this.y, this.w, this.h);
        
    }

    public executedKeyboardEvent(sEventName:string,event: KeyboardEvent):void{
        console.log("PRESIONADO!!!!");
    }

}