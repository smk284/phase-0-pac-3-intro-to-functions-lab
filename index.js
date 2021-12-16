function shout(string) {
    return string.toUpperCase();
}// your code here


function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoomate(string){
    if (string === 'hello'){
        return ("I can't hear you!");
    }
    else if (string === 'HELLO'){
    return ("YES INDEED!")
    }
    else if (string ==="Let's have dinner together!"){
        return("I would love to!");
    }
}
