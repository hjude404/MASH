//Whenever you change this and you wanna update to Github, you need to get to this directory and do: "git add ." "git commit -m 'commit message'" and then "git push"

//Instructions found here: https://docs.google.com/document/d/1CqPqu_KISfzjlSP19jWOfUt2Pcv2gxQl35WPShX918E/edit


function mash() {
    return "You'll live in a " + getHome() + " with " + getChildsCt() + "/children. Raise them well." //this function outputs our final statement using the functions below
}

console.log(mash()); //this line is necessary in order to print 


arr = ["mansion", "apartment", "shack", "house", "red stand-alone house", "grey duplex", "black penthouse in Philly, PA", "a sealed concrete box with one air hole"]; //this our array

function getHome() { //This block generates random numbers from 0 to 7, never going to 7
    decimal = Math.random();
    adNum = decimal * 8;
    raNum = Math.floor(adNum);

    arr = ["mansion", "apartment", "shack", "house", "red stand-alone house", "grey duplex", "black penthouse in Philly, PA", "a sealed concrete box with one air hole"];
    mansion = process.argv[2];



    return arr[raNum]; //We can use this command to replace the block of "if" and "else" statements. Much shorter


    // if (raNum == 0) { //if the generator makes 0, print this message
    //     return " mansion"
    // } else if (raNum == 1) { //if generator makes 1, print this message
    //     return "apartment";
    // } else if (raNum == 2) { //if the generator makes 2, print this message
    //     return "shack";
    // } else if (raNum == 3) { //if the generator makes 3, print this message
    //     return "red stand-alone house";
    // } else if (raNum == 4) { //so on and so forth
    //     return "grey duplex";
    // } else if (raNum == 5) {
    //     return "black penthouse in Philly, PA";
    // } else if (raNum == 6) {
    //     return "a sealed concrete box with one air hole";
    // }


}
getHome();



function getChildsCt() { //
    decimal = Math.random();
    adjustedNum = decimal * 8; //this generates numbers from 0 to 8, but never reaching 8
    randomNum = Math.floor(adjustedNum);



    if (randomNum == 1) {
        return "you will have " + randomNum + " child" //this returns a statment telling us how many children we will have
    }

}