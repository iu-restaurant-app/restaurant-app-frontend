import {CONSTANTS} from "@/api/constants";
import ByteArrayToImage from "@/utils/byte-array-to-image";
import Image from "next/image";

export default function Home() {
  return (
      <div>
        <Image
            src={ByteArrayToImage(CONSTANTS.imageByteArray)}
            alt=""
            width={100}
            height={100}/>
      </div>
  )
}