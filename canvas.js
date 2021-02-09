window.onload = function(){
	var dateCreatedBeforeRendering = new Date().getTime(); 
	console.log("dateCreatedBeforeRendering.: "+dateCreatedBeforeRendering);

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  
  var canvasWidth = window.innerWidth;
  var canvasHeight = window.innerHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
    ctx.rect(0, 0, canvas.width, canvas.height);
         
  
  var ballsQuantity = 50;
  var balls = [];
  var ball2 = [];
  var y=0;
  for(var i=0; i<ballsQuantity; i++){
    var r=20;
    var x=0;
    var y=4*r*i;
    for (var j=0;j<ballsQuantity;j++){
    	var x=4*r*j;
    	

    balls.push({
      r: r,
      x: x, 
      y: y,
      dx: 15,
      dy: 15
    })

  }
}
for(var i=0.5; i<ballsQuantity; i++){
    var r=20;
    var x=0;
    var y=4*r*i;
    for (var j=0.5;j<ballsQuantity;j++){
    	var x=4*r*j;
    
    ball2.push({
      r: r,
      x: x, 
      y: y,
      dx: 10,
      dy: 10
    })
  
  }
}
  
    // draw 
      function drawCircle(){
      ctx.clearRect(0,0,canvasWidth,canvasHeight);
      ctx.fillStyle = "black";
      ctx.beginPath();
      for(var i=0; i<2500; i++){
        var f = balls[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
      }
      for(var i=0; i<2500; i++){
        var f = ball2[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
      }
       var grd = ctx.createLinearGradient(1000, 100, canvas.width, canvas.height);
            grd.addColorStop(0, 'white');
            grd.addColorStop(1, 'white');

            ctx.fillStyle = grd;
            ctx.fill();

            var g1 = ctx.createRadialGradient(1000, 210, 200, 900, 400, 700);
            g1.addColorStop(0, 'white');
            g1.addColorStop(1, 'black');

            ctx.fillStyle = g1;

      ctx.fill();
      animateDemBalls();
    }
    
    function animateDemBalls(){
      for(var i=0; i<2500; i++){
        var f = balls[i];
        
        if(f.y > canvasHeight || f.y < 0){
          f.dy = -f.dy;
        }
        if(f.x  > canvasWidth || f.x  < 0){
          f.dx = -f.dx;
        }
        
        //update balls position
        f.x =f.x+ f.dx;
        f.y =f.y+ f.dy;
      }
      for(var i=0; i<2500; i++){
        var f = ball2[i];

        if(f.y > canvasHeight || f.y  < 0){
          f.dy = -f.dy;
        }
        if(f.x  > canvasWidth || f.x  < 0){
          f.dx = -f.dx;
        }
        
        //update balls position
        f.x =f.x+ f.dx;
        f.y =f.y+ f.dy;
      }
    }

if (window.DeviceMotionEvent != undefined) {
 window.ondevicemotion = function(e) {
  dx = event.accelerationIncludingGravity.x * 5;
  dy = event.accelerationIncludingGravity.y * 5;
 }
  setInterval(drawCircle, 25)
}


			var dateCreatedAfterRendering = new Date().getTime(); 
			console.log("dateCreatedAfterRendering: "+dateCreatedAfterRendering);
			var renderTime = dateCreatedAfterRendering- dateCreatedBeforeRendering;
			console.log("renderTime: "+renderTime);
}