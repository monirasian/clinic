import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');
const sourceDir = resolve(projectRoot, 'dist', 'clinic', 'browser');
const targetDir = projectRoot;

if (!existsSync(sourceDir)) {
  console.error(`Build output not found: ${sourceDir}`);
  process.exit(1);
}

cpSync(sourceDir, targetDir, { recursive: true, force: true });

// Ensure subfolder hosting works under http://localhost/clinic/
try {
  const targetIndexPath = resolve(targetDir, 'index.html');
  const html = readFileSync(targetIndexPath, 'utf8');
  const patched = html.replace(/<base href="\/?">/i, '<base href="/clinic/">');
  writeFileSync(targetIndexPath, patched, 'utf8');
} catch {
  // ignore
}

console.log('XAMPP deploy complete: copied dist/clinic/browser to project root');
