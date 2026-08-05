const fs = require("fs");
const path = require("path");

module.exports = () => {
  const baseDir = path.join(__dirname, "ecosystem");
  const categoryDirs = fs.readdirSync(baseDir, { withFileTypes: true }).filter((d) => d.isDirectory());

  const entries = [];
  for (const dir of categoryDirs) {
    const categoryPath = path.join(baseDir, dir.name);
    const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".json"));
    for (const file of files) {
      const data = JSON.parse(fs.readFileSync(path.join(categoryPath, file), "utf8"));
      entries.push({ id: path.basename(file, ".json"), ...data });
    }
  }

  return entries.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
};
