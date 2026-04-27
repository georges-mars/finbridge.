/**
 * Post-build: Generate index.html AND patch the client bundle
 * to use createRoot instead of hydrateRoot for static deployment.
 */
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const clientDir = join(process.cwd(), "dist", "client");
const assetsDir = join(clientDir, "assets");

const files = readdirSync(assetsDir);
const allJs = files.filter(f => f.endsWith(".js"));
const mainCss = files.filter(f => f.endsWith(".css"));

// Find index JS files (entry bundles)
const indexJs = allJs.filter(f => f.startsWith("index-"));
const sortedJs = indexJs.sort((a, b) => {
  return readFileSync(join(assetsDir, b)).length - readFileSync(join(assetsDir, a)).length;
});

// Patch the main bundle to replace hydrateRoot(document,...) with createRoot
for (const jsFile of allJs) {
  const filePath = join(assetsDir, jsFile);
  let content = readFileSync(filePath, "utf-8");

  // Match the TanStack Start entry pattern: XX.hydrateRoot(document,
  // Replace with: XX.createRoot(document.getElementById("root")).render(
  if (content.includes(".hydrateRoot(document,")) {
    content = content.replace(
      /(\w+)\.hydrateRoot\(document,/g,
      '$1.createRoot(document.getElementById("root")).render('
    );
    writeFileSync(filePath, content);
    console.log(`✓ Patched ${jsFile}: hydrateRoot(document,...) → createRoot(#root).render(...)`);
  }
}

// Generate index.html
const jsLinks = sortedJs
  .map(f => `    <script type="module" crossorigin src="/assets/${f}"></script>`)
  .join("\n");
const cssLinks = mainCss
  .map(f => `    <link rel="stylesheet" crossorigin href="/assets/${f}">`)
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FinBridge Solutions — Engineering that ships</title>
    <meta name="description" content="A two-person engineering team building production-ready mobile, backend, IoT, and full-stack systems end-to-end." />
    <meta name="author" content="FinBridge Solutions" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" />
${cssLinks}
  </head>
  <body>
    <div id="root"></div>
${jsLinks}
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
console.log("✓ Generated dist/client/index.html");
