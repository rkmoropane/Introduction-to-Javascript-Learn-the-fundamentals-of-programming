// const message1 = "Hey Sam how are you doing?";
// const message2 = "Kholo, I am doing fine,how are you doing?";
// const message3 = "I'm doing great, were you able to do that thing.";
// const message4 = "It was ok.";
const kholo = "Kholo";
const sam = "Sam";

sendMessage(kholo, "Hi Sam, How are you doing?");
sendMessage(sam, "Hi Kholo, I am doing fine, How about you?");
sendMessage(kholo, "Doing good. Tell me a joke.");
sendMessage(sam, "Your face!.");

function sendMessage(user, message) {
    const timestamp = getTimeStamp();
    console.log(
        `${user}: ${message}
                                                 ${timestamp}`
    ); 
}

function getTimeStamp() {
    const d = new Date();
    const timestamp = d.getHours() + ": " + d.getMinutes();
    // console.log(timestamp);
    return timestamp;
}
