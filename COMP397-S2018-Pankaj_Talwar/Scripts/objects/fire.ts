
 module objects{
    export class fires extends objects.GameObject{
         constructor(){
        super("fire");
        this.Start();
      }
  
      public Start():void{
       
        this._dx=5;
        this._dy=0;
        this.Reset();
  
      }
  
      public Update():void{
        this.x += this._dx;
        this.CheckBounds();
      }
      public Reset():void{
        this.x=-5000;
        this.y= -5000;
        
      }
     
      public CheckBounds():void{
        if(this.x>= 800){
          this.Reset();
        }
      }
    }
  }