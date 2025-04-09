let num;

document.getElementById("buttonShake").onclick=function() {
    num = Math.ceil(Math.random() * 20);
    switch (num) {
        case 1:
            document.getElementById("labelAnswer").innerHTML = "Answer: It is decidedly so.";
            break;
        case 2:
            document.getElementById("labelAnswer").innerHTML = "Answer: Without a doubt.";
            break;
        case 3:
            document.getElementById("labelAnswer").innerHTML = "Answer: Yes definitely.";
            break;
        case 4:
            document.getElementById("labelAnswer").innerHTML = "Answer: You may rely on it.";
            break;
        case 5:
            document.getElementById("labelAnswer").innerHTML = "Answer: As I see it, yes.";
            break;
        case 6:
            document.getElementById("labelAnswer").innerHTML = "Answer: Most likely.";
            break;
        case 7:
            document.getElementById("labelAnswer").innerHTML = "Answer: Outlook good.";
            break;
        case 8:
            document.getElementById("labelAnswer").innerHTML = "Answer: Yes.";
            break;
        case 9:
            document.getElementById("labelAnswer").innerHTML = "Answer: Signs point to yes.";
            break;
        case 10:
            document.getElementById("labelAnswer").innerHTML = "Answer: Reply hazy, try again.";
            break;
        case 11:
            document.getElementById("labelAnswer").innerHTML = "Answer: Ask again later.";
            break;
        case 12:
            document.getElementById("labelAnswer").innerHTML = "Answer: Better not tell you now.";
            break;
        case 13:
            document.getElementById("labelAnswer").innerHTML = "Answer: Cannot predict now.";
            break;
        case 14:
            document.getElementById("labelAnswer").innerHTML = "Answer: Concentrate and ask again.";
            break;
        case 15:
            document.getElementById("labelAnswer").innerHTML = "Answer: Don't count on it.";
            break;
        case 16:
            document.getElementById("labelAnswer").innerHTML = "Answer: My reply is no.";
            break;
        case 17:
            document.getElementById("labelAnswer").innerHTML = "Answer: My sources say no.";
            break;
        case 18:
            document.getElementById("labelAnswer").innerHTML = "Answer: Outlook not so good.";
            break;
        case 19:
            document.getElementById("labelAnswer").innerHTML = "Answer: Very doubtful.";
            break;
        default:
            document.getElementById("labelAnswer").innerHTML = "Answer: It is certain.";
    }
}