import fs from 'fs';
import path from 'path';

const legacyFolders = [
  'creation',
  'game',
  'portfolio',
  'portfolio2019',
  'research'
];

const distDir = path.resolve('dist');

console.log('--- Syncing Legacy Experiments to dist/ ---');

// 1. Copy legacy experiment folders
for (const folder of legacyFolders) {
  const src = path.resolve(folder);
  const dest = path.join(distDir, folder);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, {
      recursive: true,
      filter: (srcPath) => {
        // Exclude node_modules, .git, etc.
        const base = path.basename(srcPath);
        return base !== 'node_modules' && base !== '.git' && !base.endsWith('.map');
      }
    });
    console.log(`✓ Copied /${folder}`);
  }
}

// 2. Also ensure /portfolio2020/dist/ assets (css, js) are copied for legacy links
const p2020DistSrc = path.resolve('portfolio2020', 'dist');
const p2020DistDest = path.join(distDir, 'portfolio2020', 'dist');
if (fs.existsSync(p2020DistSrc)) {
  fs.mkdirSync(p2020DistDest, { recursive: true });
  fs.cpSync(p2020DistSrc, p2020DistDest, {
    recursive: true,
    filter: (srcPath) => !srcPath.endsWith('.map')
  });
  console.log('✓ Copied /portfolio2020/dist/ legacy assets');
}

console.log('--- Sync Completed Successfully ---');
