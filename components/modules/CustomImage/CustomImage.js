import Image from "next/image";
import { useState } from "react";
import posterPlaceHolder from "@/app/files/images/poster-placeholder.png";
import personPlaceHolder from "@/app/files/images/poster-placeholder.png";

function CustomImage(props) {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      onError={() => setSrc(props.type == 'poster' ? posterPlaceHolder.src : personPlaceHolder.src)}
      placeholder="blur"
      blurDataURL={props.type == 'poster' ? posterPlaceHolder.src : personPlaceHolder.src}
      {...props}
      src={src}
    />
  );
}

export default CustomImage;
