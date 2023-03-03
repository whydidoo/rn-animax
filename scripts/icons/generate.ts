import path from 'path';
import { downloadSVGsData } from './utils';
import { writeFile } from 'fs';

const figmaApiExporter = require('figma-api-exporter').default;

const token = '';
const fileId = '';

const exporter = figmaApiExporter(token);
const pathProject = __dirname.split('/scripts/icons')[0];
const SVG_DIRECTORY_PATH = path.resolve(pathProject, './src/components/Icons');

const getDataFileFromFigma = async () => {
  try {
    const response = await exporter.getSvgs({
      fileId,
      canvas: 'Icons',
    });

    const downloadedSVGsData = await downloadSVGsData(response.svgs);

    downloadedSVGsData.forEach((item) => {
      const [_, type, name] = item.name.split('/');
      const fileName = `${type.replace(/ /g, '').replace(/-/g, '')}${name.replace(/ /g, '').replace(/-/g, '')}.svg`;
      writeFile(path.resolve(SVG_DIRECTORY_PATH, fileName), item.data, (error) => {
        if (error) {
          console.log(error);
        }
      });
    });
  } catch (e) {
    console.log('FETCH ERROR', e);
  }
};

getDataFileFromFigma();
