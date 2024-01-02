import Image from "next/image";
import img from "../../../public/image.jpg";

export default function Static() {
  return (
    <>
      <h1 className="text-3xl w-full mb-10 text-center">Static Images</h1>
      <div className="flex w-full justify-between">
        <div>
          <h1 className="m-2">Without Blur</h1>
          <Image src={img} alt="without-blur" width={300} height={300} />
        </div>
        <div>
          <h1 className="m-2">With Blur</h1>
          <Image
            src={img}
            alt="with-blur"
            width={300}
            height={300}
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
}
