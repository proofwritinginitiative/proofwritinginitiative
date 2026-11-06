import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
const pages = ['index.html', 'courses.html', 'about.html', 'register.html', 'contact.html'];
const redirects = { 'classes.html': 'courses.html', 'know.html': 'courses.html', 'mission.html': 'about.html' };
const read = (path) => readFileSync(path, 'utf8');
const vite = read(resolve(root, 'vite.config.js'));
const base = vite.match(/\bbase:\s*['"]([^'"]+)['"]/)?.[1];
assert(base, 'Vite must declare a deployment base path.');
assert(existsSync(resolve(output, 'index.html')), 'Build first: pnpm build');

const content = [];
for (const page of pages) {
  const source = read(resolve(root, 'src/pages', page));
  const built = read(resolve(output, page));
  assert.equal(read(resolve(root, page)), built, `${page}: root deployment copy is stale.`);
  assert.match(built, /<html\s+lang="en"/, `${page}: missing document language.`);
  assert.match(built, /<meta name="viewport"/, `${page}: missing responsive viewport.`);
  assert.match(built, /<title>[^<]*Proofs 4 All[^<]*<\/title>/, `${page}: outdated title.`);
  assert.match(built, /property="og:site_name" content="Proofs 4 All"/, `${page}: outdated social brand.`);
  const canonical = source.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert(canonical?.startsWith('https://'), `${page}: canonical must use HTTPS.`);
  assert(built.includes(`rel="canonical" href="${canonical}"`), `${page}: canonical changed during build.`);
  assert(built.includes(`property="og:url" content="${canonical}"`), `${page}: social URL differs from canonical.`);
  assert(built.includes('<noscript>'), `${page}: missing JavaScript-disabled fallback.`);
  const assetRefs = [...built.matchAll(/(?:src|href)="([^"]+\/assets\/[^"?#]+)"/g)].map((match) => match[1]);
  assert(assetRefs.some((path) => path.endsWith('.js')), `${page}: no compiled application entry.`);
  assert(assetRefs.some((path) => path.endsWith('.css')), `${page}: no compiled stylesheet.`);
  for (const asset of assetRefs) {
    assert(asset.startsWith(base), `${page}: ${asset} does not use the configured Vite base.`);
    assert(existsSync(resolve(output, asset.slice(base.length))), `${page}: missing asset ${asset}.`);
  }
  for (const [, target] of built.matchAll(/href="([^"#:/]+\.html)(?:#[^"]*)?"/g)) {
    assert(pages.includes(target), `${page}: broken local page link ${target}.`);
  }
  content.push(built);
}

for (const [legacy, destination] of Object.entries(redirects)) {
  const html = read(resolve(root, legacy));
  assert.equal(read(resolve(output, legacy)), html, `${legacy}: redirect missing from preview build.`);
  assert(html.includes(`content="0; url=${destination}"`), `${legacy}: redirect destination changed.`);
  assert(html.includes(`href="${destination}"`), `${legacy}: fallback link missing.`);
  content.push(html);
}

const assetNames = readdirSync(resolve(output, 'assets'));
for (const name of assetNames) {
  const builtAsset = readFileSync(resolve(output, 'assets', name));
  assert.deepEqual(readFileSync(resolve(root, 'assets', name)), builtAsset, `assets/${name}: root deployment copy differs.`);
  if (/\.(?:js|css)$/.test(name)) content.push(builtAsset.toString('utf8'));
}

const publishedText = content.join('\n');
for (const oldCopy of [/Proof Writing Initiative/i, /Fall 2026/i, /Oct(?:ober)?\s*26/i, /Nov(?:ember)?\s*23/i, /9:30\s*p\.?m/i, /90[- ]minute/i]) {
  assert(!oldCopy.test(publishedText), `Outdated branding or session copy remains: ${oldCopy}`);
}
assert(!/docs\.google\.com\/spreadsheets\//i.test(publishedText), 'A private spreadsheet URL is present in public build output.');
assert(publishedText.includes('bZZeDZ'), 'Existing CMR form pathway was removed.');
assert(publishedText.includes('yXX4Rg'), 'Existing contact form pathway was removed.');
assert(publishedText.includes('Elementary Mathematics'), 'Elementary course is missing.');
assert(publishedText.includes('Communication of Mathematical Reasoning'), 'CMR course is missing.');

console.log(`Verified ${pages.length} pages, ${Object.keys(redirects).length} legacy redirects, ${assetNames.length} assets, metadata, deployment copies, retained form IDs, and absence of stale copy/private spreadsheet links.`);
console.log('This verifies static output only. Browser accessibility and live form-to-spreadsheet submissions require separate checks.');
