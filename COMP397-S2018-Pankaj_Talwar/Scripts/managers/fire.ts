 namespace managers{
    export class Fire {
        constructor() {
            this.Start();
        }
        private _fireCounts:number;

        public fires:objects.fires[];
    public Currentfire:number;

  
    
    public Start():void{
        this._fireCounts=1000;
        this.fires = new Array<objects.fires>();
        this._buildfirePool();
        this.Currentfire=0;
       
    }
    private _buildfirePool():void{

        for (let count = 0; count < this._fireCounts; count++) {
             this.fires[count]=new objects.fires();
        }
    }
  public Update():void{
    
            this.fires.forEach(fire =>{

                fire.Update();
            });
        }
    }
}