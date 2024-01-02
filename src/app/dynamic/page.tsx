import Image from "next/image";
import blurImgJSON from "../customBase64Img.json";
import generateBlurImg from "../utils/generateBlurImg";

export default async function Dynamic() {
  const img_url = "https://i.ibb.co/WKR52Db/image.jpg";
  const blurImg = await generateBlurImg(img_url);
  // blurDataURL={blurImgJSON.blurImgBase64} for custom blur image
  return (
    <>
      <h1 className="text-3xl w-full mb-10 text-center">Dynamic Images</h1>
      <div className="flex w-full justify-between">
        <div>
          <h1 className="m-2">Without Blur</h1>
          <Image src={img_url} alt="without-blur" width={300} height={300} />
        </div>
        <div>
          <h1 className="m-2">With Blur</h1>
          <Image
            src={img_url}
            alt="with-blur"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={blurImg}
          />
        </div>
      </div>
    </>
  );
}
