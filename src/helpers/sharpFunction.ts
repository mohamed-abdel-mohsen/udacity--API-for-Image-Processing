import sharp from 'sharp';

const size = async (
  inPut: string,
  outPut: string,
  width: number,
  height: number
) => {
  await sharp(`${__dirname}/../../images/full/${inPut}`)
    .resize(width, height)
    .toFile(`${__dirname}/../../images/thumb/${outPut}`);
};

export default size;
