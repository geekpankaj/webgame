namespace managers {
  export class Collision {
    public static check(
      object1: objects.GameObject,
      object2: objects.GameObject
    ): void {
      let P1 = new math.Vec2(object1.x, object1.y);
      let P2 = new math.Vec2(object2.x, object2.y);
      
      if (math.Vec2.Distance(P1, P2) <= object1.halfHeight + object2.halfHeight) {
        if (!object2.isColliding) {
          object2.isColliding = true;
        
            switch(object2.name) {
                case "island":
                let yaySound = createjs.Sound.play("yay");
                yaySound.volume = 0.2;
                managers.Game.ScoreBoard.Score += 100;
                break;

               
                case "cloud":
                let dragonSound = createjs.Sound.play("dragon_hurt");
                dragonSound.volume = 0.3;
                managers.Game.ScoreBoard.Lives -= 1;
                break;

                
                case "fire":
               
                  managers.Game.ScoreBoard.Score += 50;
                  object1.Reset();
                break;
               
            }

        }
      }
      else {
          object2.isColliding = false;
      }
    }
  }
}
