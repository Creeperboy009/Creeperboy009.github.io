$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 300, 20, 550);
    createPlatform(0, 600, 200, 20);
    createPlatform(100, 460, 200, 20);
    createPlatform(300, 300, 700, 20);
    createPlatform(1100, 0, 20, 600);
    createPlatform(600, 230, 20, 70);
    createPlatform(800, 0, 20, 70);
    createPlatform(0, 320, 200, 20);
    createPlatform(500, 600, 620, 20);
    createPlatform(700, 460, 20, 140);
    createPlatform(850, 300, 20, 200);
    createPlatform(1100, 600, 200, 20);
    createPlatform(1250, 460, 200, 20);
    createPlatform(1100, 320, 200, 20);



    // TODO 3 - Create Collectables
    createCollectable("steve", 1200, 60);
    createCollectable("steve", 200, 150);
    createCollectable("steve", 700, 700);

    
    // TODO 4 - Create Cannons
    createCannon("right", 250, 1500);
    createCannon("right", 150, 1700);
    createCannon("bottom", 390, 900);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
