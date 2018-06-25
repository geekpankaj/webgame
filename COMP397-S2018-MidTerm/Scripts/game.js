//Name: Pankaj Talwar
//Date: June 25th 2018
//Program: When we click on the start button, we have to show that images randomly and have to show the 
//         number we got on the dice.

let app;
(function(app) {
  "use strict";

  // Game Variables
  let stage;
  let canvas;
  let helloLabel;
  let assetManager;
  let startButton;
  let FirstDice;
  let SecondDice;
  let numbertime;
  let lbl_dice1,lbl_dice2;
  var least=1,max=6;
  let manifest = [
      { id: "one", src: "Assets/images/1.png" }, 
      { id: "two", src: "Assets/images/2.png" }, 
      { id: "three", src: "Assets/images/3.png" }, 
      { id: "four", src: "Assets/images/4.png" },
      { id: "five", src: "Assets/images/5.png" },
      { id: "six", src: "Assets/images/6.png" },
      { id: "blank", src: "Assets/images/blank.png" },
      { id: "StartButton", src: "Assets/images/StartButton.png" }
    ];

  function Init() {
      console.log("App Initializing...");
      assetManager = new createjs.LoadQueue();
      assetManager.installPlugin(createjs.Sound);
      assetManager.on("complete", Start);
      assetManager.loadManifest(manifest);
  }


  /**
   * The Start function initializes the createjs Stage object,
   * sets the framerate and sets up the Main Game Loop to
   * trigger every frame
   *
   */
  function Start() {
    console.log("App Started...");
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
    numbertime=0;
    Main();
  }

  /**
   * This is the Main Game Loop it runs at 60 fps
   *
   */
  function Update() {
    stage.update();
  }

  /**
   *  This is the main function - place all your code here
   *
   */
  function Main() {
    console.log("Main Function...");

    // hello label
    helloLabel = new createjs.Text("Hello, World!", "60px Consolas", "#000000");
    helloLabel.regX = helloLabel.getBounds().width * 0.5;
    helloLabel.regY = helloLabel.getBounds().height * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 200;
    stage.addChild(helloLabel);

    // start button
    startButton = new createjs.Bitmap(assetManager.getResult("StartButton"));
    startButton.regX = startButton.getBounds().width * 0.5;
    startButton.regY = startButton.getBounds().height * 0.5;
    startButton.x = 320;
    startButton.y = 300;
    stage.addChild(startButton);

    // start button listeners
    startButton.addEventListener("click", function() {
        console.log("Start Button Clicked");
        stage.removeChild(helloLabel);
      //Dice1
    if(numbertime==0)
    {
    FirstDice = new createjs.Bitmap(assetManager.getResult("blank"));
    FirstDice.regX = FirstDice.getBounds().width * 0.5;
    FirstDice.regY = FirstDice.getBounds().height * 0.5;
    FirstDice.x = 200;
    FirstDice.y = 150;
    stage.addChild(FirstDice);

      //Dice2
    SecondDice = new createjs.Bitmap(assetManager.getResult("blank"));
    SecondDice.regX = SecondDice.getBounds().width * 0.5;
    SecondDice.regY = SecondDice.getBounds().height * 0.5;
    SecondDice.x = 450;
    SecondDice.y = 150;
    stage.addChild(SecondDice);
      //label for dice1
      lbl_dice1  = new createjs.Text("-", "20px Consolas", "#000000");
      lbl_dice1.regX = lbl_dice1.getBounds().width * 0.5;
      lbl_dice1.regY = lbl_dice1.getBounds().height * 0.5;
      lbl_dice1.x = 200;
      lbl_dice1.y = 280;
    
      stage.addChild(lbl_dice1);
      
      //label for dice2
      lbl_dice2 = new createjs.Text("-", "20px Consolas", "#000000");
      lbl_dice2.regX = lbl_dice2.getBounds().width * 0.5;
      lbl_dice2.regY = lbl_dice2.getBounds().height * 0.5;
      lbl_dice2.x = 450;
      lbl_dice2.y = 280;
      stage.addChild(lbl_dice2);
      
  numbertime=2;  
  }
  else if(numbertime ==2)
  {
    var numbergen=randomdigit(least,max);
    var numbergen2=randomdigit(least,max);
   
    Rollthedice(numbergen,numbergen2);
  }
    });

    startButton.addEventListener("mouseover", function(event) {
        event.currentTarget.alpha = 0.7;
    });

    startButton.addEventListener("mouseout", function(event) {
        event.currentTarget.alpha = 1.0;
    });
  }
  //function to get and set the value and image of the dice.
function Rollthedice(num1,num2)
{
  var value;
  var dispvaluedice1;
  var dispvaluedice2;
 switch(num1)
 {
   case 1:
   value="one";
   dispvaluedice1=1;
   break;
   case 2:
   value="two";
   dispvaluedice1=2;
   break;
   case 3:
   value="three";
   dispvaluedice1=3;
   break;
    case 4:
    value="four";
    dispvaluedice1=4;
    break;
    case 5:
    value="five";
    dispvaluedice1=5;
    break;
    case 6:
    value="six";
    dispvaluedice1=6;
    break;
    default:
    dispvaluedice1="blank";

 }
 FirstDice = new createjs.Bitmap(assetManager.getResult(value));


 switch(num2)
 {
   case 1:
   value="one";
   dispvaluedice2=1;
   break;
   case 2:
   value="two";
   dispvaluedice2=2;
   break;
   case 3:
   value="three";
   dispvaluedice2=3;
   break;
    case 4:
    value="four";
    dispvaluedice2=4;
    break;
    case 5:
    value="five";
    dispvaluedice2=5;
    break;
    case 6:
    value="six";
    dispvaluedice2=6;
    break;
    default:
    value="blank";

 }

 SecondDice = new createjs.Bitmap(assetManager.getResult(value));

  FirstDice.regX = FirstDice.getBounds().width * 0.5;
  FirstDice.regY = FirstDice.getBounds().height * 0.5;
  FirstDice.x = 200;
  FirstDice.y = 150;
  stage.addChild(FirstDice);

    //Dice2
  
  SecondDice.regX = SecondDice.getBounds().width * 0.5;
  SecondDice.regY = SecondDice.getBounds().height * 0.5;
  SecondDice.x = 450;
  SecondDice.y = 150;
  stage.addChild(SecondDice);

  Labelfordice(dispvaluedice1,dispvaluedice2);
}
//function to set the value of the dice obtained in a label
function Labelfordice(numdisp1,numdisp2)
{
 stage.removeChild(lbl_dice1);
 stage.removeChild(lbl_dice2);
 
  lbl_dice1  = new createjs.Text(numdisp1, "20px Consolas", "#000000");
  lbl_dice1.regX = lbl_dice1.getBounds().width * 0.5;
  lbl_dice1.regY = lbl_dice1.getBounds().height * 0.5;
  lbl_dice1.x = 200;
  lbl_dice1.y = 280;

  stage.addChild(lbl_dice1);
  
  //label for dice2
  lbl_dice2 = new createjs.Text(numdisp2, "20px Consolas", "#000000");
  lbl_dice2.regX = lbl_dice2.getBounds().width * 0.5;
  lbl_dice2.regY = lbl_dice2.getBounds().height * 0.5;
  lbl_dice2.x = 450;
  lbl_dice2.y = 280;
  stage.addChild(lbl_dice2);
  
}
//function to generate the random digit of a dice
function randomdigit(least,max){
  return Math.floor(Math.random()*(max-least)+least);
}
  window.addEventListener("load", Init);
})(app | (app = {}));
