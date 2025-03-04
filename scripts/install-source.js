require('dotenv').config();
const fs = require('fs-extra');

const source = process.env.BUILD_DIR_NAME ? 'external/hues-a339x-vre/' + process.env.BUILD_DIR_NAME : 'external/hues-a339x-vre';
console.log('installManifest source is: ' + source);

const installManifest = fs.readJSONSync('./hues-a339x-vre/out/hues-livery-a339x-aircotedivoire-package/install.json');
installManifest.source = source;
fs.writeJSONSync('./hues-a339x-vre/out/hues-livery-a339x-aircotedivoire-package/install.json', installManifest);
