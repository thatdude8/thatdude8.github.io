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
    // toggleGrid();
    toggleGrid();

    // TODO 2 - Create Platforms

createPlatform(1350, 400, 50, 50, "red");
createPlatform(200, 700, 90, 90);
createPlatform(400, 410, 100, 90);
createPlatform(470, 500, 30, 90);
createPlatform(400, 600, 100, -10);
createPlatform(700, 600, 50, 1000)
createPlatform(800, 600, 5000000, 50)

    // TODO 3 - Create Collectables

createCollectable("database", 1350, 700);
createCollectable("database", 410, 540);
createCollectable("database", 700, 540);


    
    // TODO 4 - Create Cannons
createCannon("top", 2, 10000000000);
createCannon("right", 530, 1);
createCannon("right", 600, 4500)
createCannon("bottom", 800, 2000)
createCannon("bottom", 700, 2000)

    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
