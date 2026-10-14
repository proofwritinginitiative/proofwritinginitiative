import { cpSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, '../dist');

for (const page of ['index.html', 'courses.html', 'about.html', 'register.html', 'contact.html']) {
  cpSync(resolve(output, page), resolve(root, '../', page));
}

cpSync(resolve(output, 'assets'), resolve(root, '../assets'), { recursive: true });
