//When the page loads, shows a button that the user clicks
//When the button is clicked, show a prompt for first name, last name and age
//Store the 3 values to an object
//Print the data object values to the browser window

const gatherBtn = document.querySelector('#gather-btn');

function gatherInfo(){
        let firstName, lastName, age;
        let ask = true;

        while(ask) {
        firstName = prompt('Please enter your first name');

        if (!firstName){
                continue; 
        }

        lastName = prompt('Please enter your last name');
        
        if (!lastName){
                continue; 
        }
        
        age = prompt('Please enter your age');
                }
        
        // while(!firstName || !lastName || !age) {
        // firstName = prompt('Please enter your first name');
        // lastName = prompt('Please enter your last name');
        // age = prompt('Please enter your age');
        // }

        // if (!firstName || !lastName || !age) {
        //         alert ('You must fill out all values');
        //         return gatherInfo();
        // }
}


gatherBtn.addEventListener('click', gatherInfo);