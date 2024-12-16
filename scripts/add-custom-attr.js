const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../src");

fs.readdir(dir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (file.endsWith(".js")) {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          return;
        }

        let updatedData = data.replace(/<svg([^>]*?)>/, (match, attributes) => {
          return `<svg${attributes} className={\`justd-icons \${props.className || "size-4"}\`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">`;
        });

        fs.writeFile(filePath, updatedData, "utf8", (err) => {
          if (err) {
            console.error("Error writing file:", err);
          } else {
            console.log(`Updated ${file}`);
          }
        });
      });
    }
  });
});
