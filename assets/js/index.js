let net;

async function app() {
  var res1 = document.getElementById('result1');
  var res2 = document.getElementById('result2');
  var res3 = document.getElementById('result3');

  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result);
	


  res1.innerHTML = "This is a(n) " + result[0].className + " with a probability of : " + result[0].probability.toFixed(3);
  res2.innerHTML = "Could be a(n) " + result[1].className + " with a probability of : " + result[1].probability.toFixed(3);
  res3.innerHTML = "Might be a(n) " + result[2].className + " with a probability of : " + result[2].probability.toFixed(3);
	

}
var loadFile = function(event) {
    var img = document.getElementById('img');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.width = 227;
    img.height = 227;
  };