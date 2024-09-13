const transformString = () => {
    const input = document.getElementById("userInput").value;
    const result = input
        .split('')
        .map((char, index) => index + char.toUpperCase())
        .join('');
    document.getElementById("output").innerText = result;
};
