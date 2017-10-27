import {Body2D} from '../milib/views/bodies/body2d';
import {View} from '../milib/views/view';
import {Motor} from '../milib/engines/motor';

export class SHead extends Body2D{

    public nDireccionV:number=0;
    public nDireccionH:number=0;
    private nCachePos=[];
    private nIndex:number=0;


    constructor(vmotor:Motor,vX:number,vY:number,vW:number,vH:number){
        super(vmotor,vX,vY,vW,vH);
        this.nCachePos=[];
        this.nCachePos.push([this.x,this.y]);
    }

    public updatePosition():void{
        this.x+=this.nDireccionH;
        this.y+=this.nDireccionV;
        

        this.nCachePos.push([this.x,this.y]);

        if(this.nCachePos.length>=this.w){
            //console.log("--------->>>>>>>>>>>>>> POP!!! "+this.nCachePos.length);
            this.nCachePos.shift();
            //this.nIndex=0;
        }
    }

    public getOldestPos():number[]{
        
        return this.nCachePos[0];
    }

}