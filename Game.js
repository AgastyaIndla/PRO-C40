class Game {
    constructor(){

    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player=new Player();
        var playerCountRef=await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount=playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      player1 = createSprite(200,100);
      player1.addImage("player1",player1_img);
      player2 = createSprite(200,300);
      player2.addImage("player2",player2_img);
      player3 = createSprite(200,500);
      player3.addImage("player3",player3_img);
      player4 = createSprite(200,700);
      player4.addImage("player4",player4_img);
      players = [player1,player2,player3,player4];
    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
  
      player.getplayersAtEnd();
  
      if(allPlayers !== undefined){
        background(198,135,103);
        image(track,0,-displayHeight*4,displayWidth,displayHeight*6);
  
       //index of the array
       var index = 0;
  
       //x and y positions of the player
       var x;
       var y = 175;
  
        for(var plr in allPlayers){
          //add one to the index of every loop
          index=index+1;
  
          //position the players a little away from each other in x direction
          y = y + 250 ;
  
          //use data from the database to display the players in y direction
          x = displayHeight-allPlayers[plr].distance;
          players[index-1].x = x;
          players[index-1].y = y;
  
          if(index===player.index){
            stroke(10);
            fill("blue");
            ellipse(x,y,60,60);
  
            players[index-1].shapeColor="blue";
  
            camera.position.x=displayWidth/2;
            camera.position.y=players[index-1].y;
  
          }
        }
      }
      
      if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance+=10;
        player.update();
     }
  
     if(player.distance>3860){
       gameState=2;
       player.rank ++
       Player.updateplayersAtEnd(player.rank);
     }
      drawSprites();
    }
  
      end(){
    console.log(player.rank);
    }
  }