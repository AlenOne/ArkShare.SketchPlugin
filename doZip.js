const path = require('path');
const compressing = require('compressing');

const srcPath = path.join(__dirname, 'ArkShare.sketchplugin');
const targetPath = path.join(__dirname, 'ArkShare.sketchplugin.zip');

compressing.zip.compressDir(srcPath, targetPath)
  .then(() => {
    console.log('compress success');
  })
  .catch(() => {});