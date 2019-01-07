
 module managers{
    export class Keyboard {
        
        public fire: boolean;
        public enabled: boolean;
        
        constructor()
        {
            this.fire = false;
            
            this.enabled = true;

            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        }
       
          public onKeyDown(event:KeyboardEvent):void {
              if(event.keyCode==32)
              {
                let dragonfire= createjs.Sound.play("firesound");
                dragonfire.volume = 0.5;
                  this.fire = true;
              }
          }
          public onKeyUp(event:KeyboardEvent):void {
            if(event.keyCode==32)
            {
                this.fire = false;
            }
        }
    }

}