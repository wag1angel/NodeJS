const fs = require("fs");


fs.readFile("text.txt.rtf", "utf8", (err, data) => {
    if (err) {
        console.error("Kunde inte läsa filen:", err.message)
        return;
    }
    console.log(data);
});