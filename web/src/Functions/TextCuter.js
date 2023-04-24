export const textCuter =(string) => {
    const splitedText = string.split(" ");
    const shorterString = splitedText[0] + " "+ splitedText[1] +" "  +splitedText[2] +" " +splitedText[3] +" "+splitedText[4] + "...";
    return shorterString
}