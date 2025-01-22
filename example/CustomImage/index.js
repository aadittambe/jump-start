import Image from "next/image";
import { useState } from "react";
import {
  getContentApiImageUrl,
  imageResizeUrl,
} from "@washingtonpost/custom-template-utils";

const CustomImage = ({ element }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Box
      css={{
        position: "relative",
        width: "100%",
        aspectRatio: "3/2",
        // borderRadius: 'inherit',
        overflow: "hidden",
        img: {
          maxHeight: "none !important",
          objectPositon: "50% 50%",
          objectFit: "cover",
          borderTopLeftRadius: "$025",
          borderTopRightRadius: "$025",
        },
      }}
    >
      <Box
        css={{
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          transition: "opacity .2s ease-in-out",
          zIndex: 1,
          opacity: imageLoading ? 1 : 0,
        }}
      >
        {imageLoading && <Spinner hasLabel={false} />}
      </Box>
      <Image
        onLoad={() => setImageLoading(false)}
        loader={({ src }) => imageResizeUrl({ src, width: 2400 })}
        src={getContentApiImageUrl({ element: element })}
        fill
        sizes="100wv"
        alt=""
      />
    </Box>
  );
};

export default CustomImage;
