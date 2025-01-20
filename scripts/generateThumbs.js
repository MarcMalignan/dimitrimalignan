const chalk = require('chalk');
const fs = require('fs');
const jimp = require('jimp');
const sgf = require('staged-git-files');

const DIR_FULLRES = './public/images/gallery/fullres';
const DIR_HIGHRES = './public/images/gallery/highres';
const DIR_THUMBS = './public/images/gallery/thumbs';

const HIGHRES_SIZE = 1920;
const THUMB_SIZE = 720;
const IMG_QUALITY = 99;

const customFiles = process.argv.filter((arg) => arg.endsWith('.jpg'));

const overwrite = customFiles.length > 0 || process.argv.includes('--overwrite') || process.argv.includes('-o');
const verbose = process.argv.includes('--verbose') || process.argv.includes('-v');
const staged = process.argv.includes('--staged') || process.argv.includes('-s');

const cachedJpegDecoder = jimp.decoders['image/jpeg'];
jimp.decoders['image/jpeg'] = (data) => {
  const userOpts = { maxMemoryUsageInMB: 1024 };
  return cachedJpegDecoder(data, userOpts);
};

const resize = async (filename, type) => {
  let img = null;
  try {
    img = await jimp.read(`${DIR_FULLRES}/${filename}`);
  } catch (err) {
    if (err) {
      console.error(chalk.red('ERR\t', 'Read error:', filename));
      // throw err;
    }
  }
  if (!img) return;

  const newDir = type === 'highres' ? DIR_HIGHRES : DIR_THUMBS;
  const newSize = type === 'highres' ? HIGHRES_SIZE : THUMB_SIZE;

  const w = img.bitmap.width;
  const h = img.bitmap.height;
  const ratio = Math.max(w, h) / Math.min(w, h);
  const newImgSize = Math.max(newSize, Math.round(Math.max(w, h) / 3));
  const newW = w > h ? newImgSize : newImgSize / ratio;
  const newH = h > w ? newImgSize : newImgSize / ratio;

  img
    .resize(newW, newH, jimp.RESIZE_BICUBIC, (err) => {
      if (err) {
        console.error(chalk.red('ERR\t', 'Resize error:', type, filename));
        // throw err;
      }
    })
    .quality(IMG_QUALITY)
    .write(`${newDir}/${filename}`, (err, newImg) => {
      if (err) {
        console.error(chalk.red('ERR\t', 'Write error:', type, filename));
        // throw err;
      }
      verbose &&
        console.log(
          chalk.green(
            'GEN\t',
            type,
            filename,
            `${w}x${h}`,
            '>>>',
            `${newImg.bitmap.width}x${Math.round(newImg.bitmap.height)}`
          )
        );
    });
};

const handleImg = (filename, type) => {
  const newDir = type === 'highres' ? DIR_HIGHRES : DIR_THUMBS;
  let resizedImg = null;
  if (!overwrite) {
    try {
      resizedImg = fs.readFileSync(`${newDir}/${filename}`);
    } catch {}
  }
  if (!resizedImg) {
    try {
      resize(filename, type);
    } catch {}
  } else {
    verbose && console.log(chalk.yellow('SKP\t', type, filename));
  }
};

const generateThumbs = async () => {
  if (staged) {
    const files = await sgf();
    files
      .map(({ filename }) => filename.split('/').slice(-1)[0])
      .filter((filename) => filename.endsWith('.jpg'))
      .forEach((filename) => {
        handleImg(filename, 'highres');
        handleImg(filename, 'thumb');
      });
  } else if (customFiles.length > 0) {
    customFiles.forEach((filename) => {
      handleImg(filename, 'highres');
      handleImg(filename, 'thumb');
    });
  } else {
    fs.readdir(DIR_FULLRES, (err, files) => {
      if (err) throw err;
      files
        .filter((filename) => filename.endsWith('.jpg'))
        .forEach((filename) => {
          handleImg(filename, 'highres');
          handleImg(filename, 'thumb');
        });
    });
  }
};

generateThumbs();
