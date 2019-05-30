# RenameFiles

Rename all files in a folder.

**Usage:** Put all the files in the **"drop the files"** folder and and make the following command **node start.js newName**
**Example:** node start.js wallpaper

Files will be renamed this way: **wallpaper_1.xxx, wallpaper_2.xxx etc...**

If you want to add a space in the new name you have to do this: **node start.js wallpaper:HD** which will ultimately make this 
**wallpaper HD_1.xxx, wallpaper HD_2.xxx**

You can also ignore some extension, You will have to do like this: **node start.js wallaper png:jpeg:gif** Files with it's extentions will not touch

You can of course cumulate the options.
**Example: node start.js Wallpaper:HD jpeg:png:gif**
**Rendering: Wallpaper HD_1.jpg**
