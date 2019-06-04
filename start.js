const folderDir = "./drop the files/";

const { readdirSync, renameSync } = require("fs");
const NAME = process.argv.slice(2)[0].replace(/:/g, " ");
const IGNORE = process.argv.slice(3).join("").split(":");

let COUNT_FILES = 0;
const folder = readdirSync(folderDir);

folder.forEach((item) => {
    const oldName = item.split(".")[0];
    const extendFile = item.split(".")[1];

    if (!IGNORE.includes(extendFile)) {
        COUNT_FILES++;
        const newName = `${NAME}_${COUNT_FILES}`;
        renameSync(folderDir+item, folderDir+item.replace(oldName, newName));
    }
});
