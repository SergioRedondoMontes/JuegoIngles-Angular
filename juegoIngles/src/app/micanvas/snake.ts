
import {Body2D} from '../milib/views/bodies/body2d';
import {View} from '../milib/views/view';
import {EventsAdmin} from '../milib/events/eventsadmin';
import {World2D} from '../milib/physics/world2d';
import {SHead} from './shead';
import {SBody} from './sbody';
import {Motor} from '../milib/engines/motor';

export class Snake extends View{

    public nDireccionV:number=0;
    public nDireccionH:number=0;

    public sHead:SHead;
    //public sBody:SHead;
    private arBody;


    constructor(vmotor:Motor,vX:number,vY:number,vW:number,vH:number){
        super(vmotor,vX,vY,vW,vH);
        this.arBody=[];
        EventsAdmin.instance.addKeysToView(this);
        this.sHead=new SHead(this.motor,100,100,20,20);
        this.sHead.sBackColor='#FF0000';
        this.motor.addViewToParentView(this,this.sHead);
    }

    public setColorSnake(sColor:string):void{
        this.sHead.sBackColor=sColor;
        //this.sBody.sBackColor=sColor;
    }

    public updateBody(numParts:number){


        //for(let i=0;i<numParts;i++){
            let lastElement=this.sHead;
            if(this.arBody.length>0){
                lastElement=this.arBody[this.arBody.length-1];
            }
            
            let part:Body2D=new SBody(this.motor,lastElement.getOldestPos[0],lastElement.getOldestPos[1],this.sHead.w,this.sHead.h);
            part.sBackColor='#FF0000';
            this.motor.addViewToParentView(this,part);
            this.arBody.push(part);
        //}
        /*let ppartX=this.sHead.x;
        let ppartY=this.sHead.y;

        if(this.arBody.length<2){
            if(this.nDireccionV==-1){//SE MUEVE HACIA ARRIBA
                ppartY+=this.sHead.h*this.arBody.length;
            }
            else if(this.nDireccionV==1){
                ppartY-=this.sHead.h*this.arBody.length;
            }
            else if(this.nDireccionH==-1){
                ppartX+=this.sHead.w*this.arBody.length;
            }
            else if(this.nDireccionH==1){
                ppartX-=this.sHead.w*this.arBody.length;
            }
        }
        let part:Body2D=new SBody(this.motor,ppartX,ppartY,this.sHead.w,this.sHead.h);
        part.sBackColor=this.sHead.sBackColor;
        this.motor.addViewToParentView(this,part);
        this.arBody.push(part);*/

    }
    
    public updatePosition(){
        this.sHead.updatePosition();
        if(this.arBody!=undefined && this.arBody.length>0){
            this.arBody[0].updatePosition(this.sHead.getOldestPos()[0],this.sHead.getOldestPos()[1]);
            for(let i=1;i<this.arBody.length;i++){
                this.arBody[i].updatePosition(this.arBody[i-1].getOldestPos()[0],this.arBody[i-1].getOldestPos()[1]);
            }
        }
        
        /*if(this.arBody!=undefined && this.arBody.length>0){
            for(let i=this.arBody.length-1;i>0;i--){
                this.arBody[i].updatePosition(this.arBody[i-1].nDireccionV,this.arBody[i-1].nDireccionH);
                //this.arBody[i].nDireccionH=this.arBody[i-1].nDireccionH;
                //this.arBody[i].nDireccionV=this.arBody[i-1].nDireccionV;
            }
            this.arBody[0].updatePosition(this.sHead.nDireccionV,this.sHead.nDireccionH);
            //this.arBody[0].nDireccionH=this.sHead.nDireccionH;
            //this.arBody[0].nDireccionV=this.sHead.nDireccionV;
            
            
        }*/

        //this.sHead.x+=this.nDireccionH;
        //this.sHead.y+=this.nDireccionV;
    }


    update(vParent:View){ 
        super.update(vParent);

        /*this.y=this.y + this.nDireccionV;
        this.x=this.x + this.nDireccionH;*/
        this.updatePosition();
        World2D.instance.checkColission(this.sHead);

    }

    /*
    public setDireccionV(vnDireccionV:number):void{
        this.nDireccionV=vnDireccionV;
    }

    public setDireccionH(vnDireccionH:number):void{
        this.nDireccionH=vnDireccionH;
    }
    */
    public executedKeyboardEvent(sEventName:string,event: KeyboardEvent):void{
        //console.log(sEventName+"   "+event.keyCode);
        if(sEventName=='keyup'){
            if(event.keyCode==38){//FLECHA ARRIBA
                this.sHead.nDireccionH=0;
                this.sHead.nDireccionV=-1;
                //this.y++;
            }
            else if(event.keyCode==40){//FLECHA ABAJO
                this.sHead.nDireccionH=0;
                this.sHead.nDireccionV=1;
                //this.y++;
            }
            else if(event.keyCode==37){//FLECHA IZQ
                this.sHead.nDireccionV=0;
                this.sHead.nDireccionH=-1;
                //this.y++;
            }
            else if(event.keyCode==39){//FLECHA DER
                this.sHead.nDireccionV=0;
                this.sHead.nDireccionH=1;
                //this.y++;
            }
            
        }
    }

}