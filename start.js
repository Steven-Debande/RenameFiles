const folderDir = "./drop the files";

const { readdir, rename } = require("fs");
const Name = process.argv.slice(2)[0].replace(/:/g, " ");
const Ignored = process.argv.slice(3).join(" ").split(":");

let count = 0;

readdir(folderDir, async(err, files) => {
    if (err) {
        return console.log(`[RenameFiles]: ${err}`);
        process.exit(1);
    }
    console.log(`[RenameFiles]: ${files.length} files found.`);
    console.log(`[RenameFiles]: Extends ignored [${Ignored.map(i => `"${i}"`)}]`);
    files.forEach(file => {
        const oldName = file.split(".")[0];
        const extendFile = file.split(".")[1];

        if (!Ignored.includes(extendFile)) {
            count++;
            const newName = `${Name}_${count}`;
            rename(`${folderDir}/${file}`, `${folderDir}/${file.replace(oldName, newName)}`, (err) => {
                if (err) {
                    return console.log(`[RenameFiles]: ${err}`);
                }
                console.log(`[RenameFiles]: ${oldName} => ${newName}`);
            });
        }
    });
    //console.log(`[RenameFiles]: ${count} files rename!`);
});
