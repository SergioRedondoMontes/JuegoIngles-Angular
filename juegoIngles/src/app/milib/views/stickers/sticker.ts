import {View} from '../view';
import {Motor} from '../../engines/motor';
import {EventsAdmin} from '../../events/eventsadmin';
import {Imagen} from '../imgs/imagen';
import {DataHolder} from '../../dataholder/dataholder';

/**
 * Clase que hereda de View y se encarga de pintar un elemento visual compuesto Boton por un Label y una Imagen.
 */
export class Sticker extends Imagen{


    private imgBack1: HTMLImageElement;
    private blImgLoaded1:boolean=false;
    private name:string;


    constructor(vmotor:Motor,vX:number,vY:number,vW:number,vH:number){
        super(vmotor,vX,vY,vW,vH);
        this.imgBack1=new Image();
        this.imgBack1.onload = (() => this.imageReady1(this));//Unica forma de no perder el hilo central es enviar al que ejecuta la accion como parametro.
    }
    
    /**
     * Metodo que devuelve true en caso que la imagen se haya descargado correctamente
     */
    public isImgLoaded():boolean{
        return this.blImgLoaded1;
    }
    

    /**
     * Setea la URL (RUTA) de la imagen para la imagen. EJEMPLO: './assets/btnsback/back1.png'
     * @param urlImg String con la ruta de la imagen.
     */
    public setImg(urlImg:string){
        this.imgBack1.src=urlImg;
    }

    public setName(name:string):void{
        this.name=name;
    }

    /**
     * Metodo que se ejecuta como un evento que notifica cuando la imagen se descarga correctamente
     */
    private imageReady1(img_self:Imagen):void{
        this.blImgLoaded1=true;
    }

    /**
     * Paint de la clase Imagen.
     * @param vctx Contexto para poder pintar la imagen.
     */
    paint(vctx:CanvasRenderingContext2D){
        
        if(this.blImgLoaded1){
            vctx.drawImage(this.imgBack1,this.xa,this.ya,this.w,this.h);
        }
    }

    public mouseUp(e:MouseEvent):void{
        console.log(e.x,e.y);
        super.mouseUp(e);
        if(this.name=='conejo' && (e.x>0 && e.x<DataHolder.instance.nScreenWidth*0.2) && (e.y>0 && e.y<DataHolder.instance.nScreenHeight*0.38)){
           this.motor.setViewVisibility(this.uid,false);
        }else if(this.name=='gato' && (e.x>0 && e.x<DataHolder.instance.nScreenWidth*0.2) && (e.y>DataHolder.instance.nScreenHeight*0.41 && e.y<DataHolder.instance.nScreenHeight*0.8)){
            this.motor.setViewVisibility(this.uid,false);
        }

    }

}


export interface stickerListener{
    buttonListenerOnUp?(sticker:Sticker):void;
}