const fs = require("fs");
const path = require("path");

// Read the TypeScript source file
const sourceFile = path.join(__dirname, "../src/useSessionStorage.ts");
const source = fs.readFileSync(sourceFile, "utf8");

// Extract JSDoc comments and interface definitions
function extractDocumentation(source) {
  const docs = {
    interfaces: [],
    hook: null,
  };

  // Extract interfaces with their JSDoc comments and properties
  const interfaceRegex =
    /\/\*\*([\s\S]*?)\*\/\s*export interface (\w+)(<[^>]+>)?\s*\{([\s\S]*?)(?=\n\})/g;
  let match;

  while ((match = interfaceRegex.exec(source)) !== null) {
    const [, comment, name, genericParams, body] = match;

    // Clean up the comment
    const cleanComment = comment
      .split("\n")
      .map((line) => line.replace(/^\s*\*\s?/, ""))
      .filter((line) => line.trim())
      .join("\n");

    // Extract properties and methods from the interface body
    const properties = [];

    // Improved regex to match both simple properties and method signatures
    const lines = body.split("\n").filter((line) => line.trim());
    let currentComment = "";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // If this is a comment block
      if (line.includes("/**")) {
        // Extract multi-line comment
        currentComment = "";
        let commentLines = [];
        let j = i;
        while (j < lines.length) {
          const commentLine = lines[j].trim();
          if (commentLine.includes("/**")) {
            commentLines.push(commentLine.replace(/\/\*\*\s*/, ""));
          } else if (commentLine.includes("*/")) {
            commentLines.push(commentLine.replace(/\*\/\s*/, ""));
            break;
          } else if (commentLine.startsWith("*")) {
            commentLines.push(commentLine.replace(/^\*\s?/, ""));
          }
          j++;
        }
        currentComment = commentLines.filter((l) => l.trim()).join(" ");
        i = j; // Skip past the comment
        continue;
      }

      // If this is a single-line comment
      if (line.startsWith("/**") && line.includes("*/")) {
        currentComment = line.replace(/\/\*\*\s*/, "").replace(/\s*\*\//, "");
        continue;
      }

      // If this is a property or method definition
      if (
        line.includes(":") &&
        !line.startsWith("//") &&
        !line.startsWith("*")
      ) {
        const propMatch = line.match(/(\w+)(\?)?\s*:\s*([^;,]+)/);
        if (propMatch) {
          const [, propName, optional, propType] = propMatch;

          properties.push({
            name: propName,
            type: propType.trim().replace(/,$/, ""),
            optional: !!optional,
            description: currentComment || `Property ${propName}`,
          });

          currentComment = ""; // Reset comment
        }
      }
    }

    docs.interfaces.push({
      name: name + (genericParams || ""),
      description: cleanComment,
      properties,
    });
  }

  // Extract the main hook documentation
  const hookRegex =
    /\/\*\*([\s\S]*?)\*\/\s*export\s+const\s+useFetchWithCallbacks/;
  const hookMatch = source.match(hookRegex);

  if (hookMatch) {
    const cleanComment = hookMatch[1]
      .split("\n")
      .map((line) => line.replace(/^\s*\*\s?/, ""))
      .filter((line) => line.trim())
      .join("\n");

    docs.hook = {
      name: "useFetchWithCallbacks",
      description: cleanComment,
    };
  }

  return docs;
}

// Generate the documentation
const documentation = extractDocumentation(source);

// Create docs directory if it doesn't exist
const docsDir = path.join(__dirname, "../docs");
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Write the documentation as JSON
fs.writeFileSync(
  path.join(docsDir, "api.json"),
  JSON.stringify(documentation, null, 2),
  "utf8"
);

// Also create a markdown version
const markdownContent = generateMarkdown(documentation);
fs.writeFileSync(path.join(docsDir, "api.md"), markdownContent, "utf8");

function generateMarkdown(docs) {
  let markdown = "# API Documentation\n\n";

  if (docs.hook) {
    markdown += `## ${docs.hook.name}\n\n`;
    markdown += `${docs.hook.description}\n\n`;
  }

  if (docs.interfaces.length > 0) {
    markdown += "## Interfaces\n\n";

    docs.interfaces.forEach((interface) => {
      markdown += `### ${interface.name}\n\n`;
      markdown += `${interface.description}\n\n`;

      if (interface.properties.length > 0) {
        markdown += "#### Properties\n\n";
        interface.properties.forEach((prop) => {
          markdown += `- **${prop.name}${prop.optional ? "?" : ""}**: \`${
            prop.type
          }\`\n`;
          if (prop.description) {
            markdown += `  ${prop.description}\n`;
          }
          markdown += "\n";
        });
      }
    });
  }

  return markdown;
}

console.log("Documentation generated successfully!");
console.log(
  `- docs/api.json: ${documentation.interfaces.length} interfaces documented`
);
console.log(`- docs/api.md: Markdown documentation created`);
