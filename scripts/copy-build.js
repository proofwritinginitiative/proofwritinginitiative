import { cpSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, '../dist');

for (const page of ['index.html', 'courses.html', 'about.html', 'register.html', 'contact.html']) {
  cpSync(resolve(output, page), resolve(root, '../', page));
}

// Distribute the font license alongside the bundled font.
cpSync(resolve(root, '../src/fonts/OFL.txt'), resolve(output, 'assets/dm-sans-OFL.txt'));
cpSync(resolve(output, 'assets'), resolve(root, '../assets'), { recursive: true });

for (const page of ['classes.html', 'know.html', 'mission.html']) {
  cpSync(resolve(root, '../', page), resolve(output, page));
}
