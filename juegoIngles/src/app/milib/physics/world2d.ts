import {Body2D} from '../views/bodies/body2d';

export class World2D{
    
    public static instance:World2D = null;

    private arBody2DsCol=[];
    
    /*
    public static getInstance():World2D{
        if(this.instance == null)this.instance=new World2D();
        return this.instance;
    }
    */
    public addColissionToBody2D(body:Body2D){
        if(this.arBody2DsCol.indexOf(body)==-1){
            this.arBody2DsCol.push(body);
        }
    }

    public checkColission(body:Body2D){
        for(let i=0;i<this.arBody2DsCol.length;i++){
            var blCol=this.checkIfColBetweenBodys(body,this.arBody2DsCol[i]);
            if(blCol==false){
                blCol=this.checkIfColBetweenBodys(this.arBody2DsCol[i],body);
            }
            if(blCol==true){
                body.colissionDetected(this.arBody2DsCol[i]);
                this.arBody2DsCol[i].colissionDetected(body);
            }
            
            /*if(blCol==true){
                body.colissionDetected(this.arBody2DsCol[i]);
            }
            else{
                blCol=this.checkIfColBetweenBodys(this.arBody2DsCol[i],body);
                if(blCol==true)this.arBody2DsCol[i].colissionDetected(body);
            }*/
            
            

        }
    }

    public checkIfColBetweenBodys(b1:Body2D,b2:Body2D):boolean{
        var blret=false;
        if(b2.checkPointInView(b1.xa,b1.ya)){//IZQ ARRIBA CUADRADO
            blret=true;
        }
        else if(b2.checkPointInView(b1.xa+b1.w,b1.ya)){//DERECHA ARRIBA CUADRADO
            blret=true;
        }
        else if(b2.checkPointInView(b1.xa+b1.w,b1.ya+b1.h)){//DERECHA ABAJO CUADRADO
            blret=true;
        }
        else if(b2.checkPointInView(b1.xa,b1.ya+b1.h)){//IZQ ABAJO CUADRADO
            blret=true;
        }

        return blret;

    }


}