const fs = require("fs");

const files = [
  "src/components/home/ContactCTA.tsx",
  "src/pages-old/Blog.tsx",
  "src/pages-old/Pricing.tsx",
];

const replacements = [
  ["â€”", "—"],
  ["â€¢", "•"],
  ["â‚¹", "₹"],
  ["Â·", "·"],
  ["â€“", "–"],
  ["â†’", "→"],
  ["Ã—", "×"],
];

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  fs.writeFileSync(file, content, "utf8");
}