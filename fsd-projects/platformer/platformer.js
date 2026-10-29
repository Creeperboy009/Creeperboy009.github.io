const spikes = [];
const grassPlatforms = [];
const spikesImage = new Image();
spikesImage.src = "images/spikes.png";
spikesImage.addEventListener("error", function () {
  console.error("Could not load images/spikes.png");
});

const drawPlatformsWithoutGrass = drawPlatforms;
drawPlatforms = function () {
  drawPlatformsWithoutGrass();

  for (const platform of grassPlatforms) {
    ctx.fillStyle = "#79502b";
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    ctx.fillStyle = "#4caf50";
    ctx.fillRect(
      platform.x,
      platform.y,
      platform.width,
      Math.min(6, platform.height)
    );
  }
};

function createGrassPlatform(x, y, width, height) {
  if (height > width) {
    createPlatform(x, y, width, height, "#808080");
    return;
  }

  createPlatform(x, y, width, height, "#79502b");
  grassPlatforms.push(platforms[platforms.length - 1]);
}

const drawBadPlatformsWithoutSpikes = drawBadPlatforms;
drawBadPlatforms = function () {
  drawBadPlatformsWithoutSpikes();

  if (!spikesImage.complete || spikesImage.naturalWidth === 0) {
    return;
  }

  for (const spike of spikes) {
    ctx.drawImage(spikesImage, spike.x, spike.y, spike.width, spike.height);
  }
};

function createSpikes(x, y, width, height) {
  createBadPlatform(x, y, width, height, "transparent");
  spikes.push({ x, y, width, height });
}

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

    // TODO 2 - Create Platforms
    createGrassPlatform(300, 300, 20, 550);
    createGrassPlatform(0, 600, 200, 20);
    createGrassPlatform(100, 460, 200, 20);
    createGrassPlatform(300, 300, 700, 20);
    createGrassPlatform(1100, 0, 20, 600);
    createGrassPlatform(600, 230, 20, 70);
    createGrassPlatform(800, 0, 20, 70);
    createGrassPlatform(0, 320, 200, 20);
    createGrassPlatform(500, 600, 620, 20);
    createGrassPlatform(700, 460, 20, 140);
    createGrassPlatform(850, 300, 20, 200);
    createGrassPlatform(1100, 600, 200, 20);
    createGrassPlatform(1250, 460, 200, 20);
    createGrassPlatform(1100, 320, 200, 20);



    // TODO 3 - Create Collectables
    createCollectable("steve", 1200, 60);
    createCollectable("diamond", 200, 150);
    createCollectable("database", 700, 700);

    
    // TODO 4 - Create Cannons
    createCannon("right", 250, 1500);
    createCannon("right", 150, 1700);
    createCannon("bottom", 390, 900);

    // TODO 5 - Create Spikes
    createSpikes(600, 500, 100, 100);
    createSpikes(1000, 500, 100, 100);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
