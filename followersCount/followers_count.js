let count = 0; //Initialize count to 0

function increaseCount(){
    count++; // Increase the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value & display msgs
}

function checkCountValue(){
    if (count===10) {
        alert("Your account gained 10 followers! Congratulations!");
    } else if (count===20) {
        alert("Your account gained 20 followers! Yay!");
    }
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; //Display the count in HTML

}

function resetCount(){
    count = 0;
    displayCount();
    alert("Your followers have been reset to 0");
}