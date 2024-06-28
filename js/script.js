// code 1 
//window.addEventListener = (`mousemove`, function (eventObj) {
//         console.log(eventObj.clientY);
// });

// code 2
//function keyPressed(){
//         console.log('key pressed down'); 
// }

// document.addEventListener('keydown', keyPressed);

// function test() {
//         console.log(num);
// }

// test();

//code 3
const output = document.getElementById('key-output');


function keyPressed(eventObj) {
        console.log(eventObj.key);

        output.innerText = eventObj.key + ' / ' + eventObj.keyCode; 
      
        if (eventObj.keyCode === 13) {
          console.log(eventObj.key);
          console.log('You have pressed the enter key');
        }
      }
      
      document.addEventListener('keydown', keyPressed); 