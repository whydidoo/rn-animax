import fetch from 'node-fetch';

const regFill = /fill="#.+"/gm;
const regStroke = /stroke="#.+"/gm;

export const downloadSVGsData = async <T extends {}>(data: ({ url: string; name: string } & T)[]) => {
  return Promise.all(
    data.map(async (dataItem) => {
      const downloadedSvgResponse = await fetch(dataItem.url);
      const svg = await downloadedSvgResponse.text();
      return {
        ...dataItem,
        data: svg.replace(regFill, 'fill="fillColor"').replace(regStroke, 'stroke="strokeColor"'),
      };
    }),
  );
};
