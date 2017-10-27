import {Body2D} from '../milib/views/bodies/body2d';
import {View} from '../milib/views/view';
import {Motor} from '../milib/engines/motor';

export class SBody extends Body2D{

    private nCachePos:[Array<number>];


    constructor(vmotor:Motor,vX:number,vY:number,vW:number,vH:number){
        super(vmotor,vX,vY,vW,vH);
        this.nCachePos=[[]];
        this.nCachePos.push([this.x,this.y]);

    }

    public updatePosition(vx:number,vy:number):void{
        this.x=vx;
        this.y=vy;
        
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