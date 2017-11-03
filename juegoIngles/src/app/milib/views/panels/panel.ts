import {View} from '../view';
import {Motor} from '../../engines/motor';
import {Imagen} from '../imgs/imagen';


export class Panel extends View{
   
   private sColor:string='rgba(138,221,45,0)';
    //private sColor:string=null;
    private imgBack:Imagen=null;

    constructor(vmotor:Motor,vX:number,vY:number,vW:number,vH:number){
        super(vmotor,vX,vY,vW,vH);
        this.imgBack=new Imagen(this.motor,0,0,this.w,this.h);
        this.motor.addViewToParentView(this,this.imgBack);
    }

    public setColor(vsColor:string):void{
        this.sColor=vsColor;
    }
    
    public setImagePath(vsPath:string):void{
        this.imgBack.setImg(vsPath);
    }


    paint(vctx:CanvasRenderingContext2D){
        
    
        vctx.fillStyle = this.sColor;  
        vctx.fillRect(this.x, this.y, this.w, this.h);
        
    }

   
    public executedKeyboardEvent(sEventName:string,event: KeyboardEvent):void{
        console.log("PRESIONADO!!!!");
    }

}