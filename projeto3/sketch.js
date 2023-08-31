function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  fill("black");
  textSize(64);
   textAlign(CENTER, CENTER);

  let maximo = width;
  let minimo =0;
  //mousex, 0,widht ==> 0,palavra.length
  let palavra = "caminhante";
  let quantidade = map(mousex, 0, width, 0,palavra.length);
  console.log(quantidade);
//if(mouseX < 50){
// let palavra ="c";
//text(palavra, 200, 200);
// } else if(mouseX < 100){
//   let palavra ="ca";
// text(palavra, 200, 200);
// } else{
//  let palavra ="caminhante";
//   text(palavra, 200, 200);
//  }

}