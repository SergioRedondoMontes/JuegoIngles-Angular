

import {DataHolder} from '../dataholder/dataholder';
import {View} from '../views/view';

export class EventsAdmin {

    public static instance:EventsAdmin = new EventsAdmin();
    public arListeners=[];
    private blIsMouseClickRegistered:boolean=false;
    private arViewsForMouseClick=[];
    public sKeyDownEvent:string="keydown";
    public sKeyUpEvent:string="keyup";
    private blIsKeysRegistered:boolean=false;
    private arViewsForKeys=[];

    private blIsMouseMoveRegistered:boolean=false;
    private arViewsForMouseMove=[];
    private blIsMouseDownRegistered:boolean=false;
    private arViewsForMouseDown=[];
    private blIsMouseUpRegistered:boolean=false;
    private arViewsForMouseUp=[];

    constructor(){
        window.addEventListener("resize",this.screenSizeResized);

    }

    /**
     * Metodo que agrega (o subsribe) a cualquier clase que implemente el EventsAdminListener en el array de subsriptores
     * para que luego pueda recibir notificaciones del EventsAdmin.
     * @param listener La clase que implementa el EventsAdminListener
     */
    public addListener(listener:EventsAdminListener):void{
        if(this.arListeners.indexOf(listener)==-1)
            this.arListeners.push(listener);
    }


    public addMouseDragToView(view:View):void{
        this.addMouseDownToView(view);
        this.addMouseMoveToView(view);
        this.addMouseUpToView(view);
    }

    /**
     * Agrega un elemento visual View a la lista de views que detectan si les han pinchado con el Raton encima.
     * @param view View que queremos subscribir a las notificaciones de MouseClick
     */
    public addMouseClickToView(view:View):void{
        if(this.blIsMouseClickRegistered==false){
            this.blIsMouseClickRegistered=true;
            window.addEventListener("click",this.mouseClick);
        }

        if(this.arViewsForMouseClick.indexOf(view)==-1)
            this.arViewsForMouseClick.push(view);
    }

    /**
     * Agrega un elemento visual View a la lista de views que detectan si les han presionado con el Raton encima.
     * @param view View que queremos subscribir a las notificaciones de MouseDown
     */
    public addMouseDownToView(view:View):void{
        if(this.blIsMouseDownRegistered==false){
            this.blIsMouseDownRegistered=true;
            window.addEventListener("mousedown",this.mouseDown);
        }

        if(this.arViewsForMouseDown.indexOf(view)==-1)
            this.arViewsForMouseDown.push(view);
    }

    /**
     * Agrega un elemento visual View a la lista de views que detectan si les han soltado con el Raton encima.
     * @param view View que queremos subscribir a las notificaciones de MouseUp
     */
    public addMouseUpToView(view:View):void{
        if(this.blIsMouseUpRegistered==false){
            this.blIsMouseUpRegistered=true;
            window.addEventListener("mouseup",this.mouseUp);
        }

        if(this.arViewsForMouseUp.indexOf(view)==-1)
            this.arViewsForMouseUp.push(view);
    }

    /**
     * Agrega un elemento visual View a la lista de views que detectan si les han movido con el Raton encima.
     * @param view View que queremos subscribir a las notificaciones de MouseMove
     */
    public addMouseMoveToView(view:View):void{
        if(this.blIsMouseMoveRegistered==false){
            this.blIsMouseMoveRegistered=true;
            window.addEventListener("mousemove",this.mouseMove);
        }

        if(this.arViewsForMouseMove.indexOf(view)==-1)
            this.arViewsForMouseMove.push(view);
    }

    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un MouseClick
     * @param e evento de tipo MouseEvent que recibe la informacion sobre la posicion donde el raton ha pinchado.
     */
    public mouseClick(e:MouseEvent){
        var vfin:View=null;
        for(let i=0;i<EventsAdmin.instance.arViewsForMouseClick.length;i++){
            let vtemp:View=EventsAdmin.instance.arViewsForMouseClick[i];
            if(vtemp.checkPointInView(e.pageX,e.pageY)){
                vfin=vtemp;
            }
            //EventsAdmin.instance.arListeners[i].screenSizeChanged(
                //DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
         }
         if(vfin!=null)vfin.mouseClicked(e);
    }

    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un MouseUp
     * @param e evento de tipo MouseEvent que recibe la informacion sobre la posicion donde el raton ha pinchado.
     */
    public mouseDown(e:MouseEvent){
        var vfin:View=null;
        for(let i=0;i<EventsAdmin.instance.arViewsForMouseDown.length;i++){
            let vtemp:View=EventsAdmin.instance.arViewsForMouseDown[i];
            if(vtemp.checkPointInView(e.pageX,e.pageY)){
                vfin=vtemp;
            }
            //EventsAdmin.instance.arListeners[i].screenSizeChanged(
                //DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
         }
         if(vfin!=null)vfin.mouseDown(e);
    }

    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un MouseDown
     * @param e evento de tipo MouseEvent que recibe la informacion sobre la posicion donde el raton ha pinchado.
     */
    public mouseUp(e:MouseEvent){
        var vfin:View=null;
        for(let i=0;i<EventsAdmin.instance.arViewsForMouseUp.length;i++){
            let vtemp:View=EventsAdmin.instance.arViewsForMouseUp[i];
            if(vtemp.checkPointInView(e.pageX,e.pageY)){
                vfin=vtemp;
            }
            //EventsAdmin.instance.arListeners[i].screenSizeChanged(
                //DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
         }
         if(vfin!=null)vfin.mouseUp(e);
    }

    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un MouseMove
     * @param e evento de tipo MouseEvent que recibe la informacion sobre la posicion donde el raton ha pinchado.
     */
    public mouseMove(e:MouseEvent){
        var vfin:View=null;
        for(let i=0;i<EventsAdmin.instance.arViewsForMouseMove.length;i++){
            let vtemp:View=EventsAdmin.instance.arViewsForMouseMove[i];
            if(vtemp.checkPointInView(e.pageX,e.pageY)){
                vfin=vtemp;
            }
            //EventsAdmin.instance.arListeners[i].screenSizeChanged(
                //DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
         }
         if(vfin!=null)vfin.mouseMove(e);
    }

    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un cambio del tamaño de pantalla.
     */
    private screenSizeResized():void{
        DataHolder.instance.initScreenSize();
        for(let i=0;i<EventsAdmin.instance.arListeners.length;i++){
           EventsAdmin.instance.arListeners[i].screenSizeChanged(
               DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        }
   }

   /**
     * Agrega un elemento visual View a la lista de views que detectan si les han presionado el teclado.
     * @param view View que queremos subscribir a las notificaciones de KeyEvent
     */
    public addKeysToView(view:View):void{
        if(this.blIsKeysRegistered==false){
            this.blIsKeysRegistered=true;
            window.addEventListener(this.sKeyDownEvent,this.executedKeyDownEvent);
            window.addEventListener(this.sKeyUpEvent,this.executedKeyUpEvent);
        }

        if(this.arViewsForKeys.indexOf(view)==-1)
            this.arViewsForKeys.push(view);
    }


    public executedKeyDownEvent(event: KeyboardEvent):void{
        //console.log("*************   "+self.dictEventsViews);
        
        if(EventsAdmin.instance.arViewsForKeys!=undefined){
            for (let i = 0; i < EventsAdmin.instance.arViewsForKeys.length; i++) {
                EventsAdmin.instance.arViewsForKeys[i].executedKeyboardEvent(EventsAdmin.instance.sKeyDownEvent,event);
            }
        }
    }
    
    public executedKeyUpEvent(event: KeyboardEvent):void{

        if(EventsAdmin.instance.arViewsForKeys!=undefined){
            for (let i = 0; i < EventsAdmin.instance.arViewsForKeys.length; i++) {
                EventsAdmin.instance.arViewsForKeys[i].executedKeyboardEvent(EventsAdmin.instance.sKeyUpEvent,event);
            }
        }
        
    }


}

/**
 * Clase de interface que se usa para las notificaciones de eventos del EventsAdmin.
 */
export interface EventsAdminListener{
    /**
     * Metodo que se llamara cuando EventsAdmin quiera notificar a los subscriptores que ha cambiado el tamaño de pantalla.
     */
    screenSizeChanged?(vWidth:number,vHeight:number):void;
   
}