import * as React from "react";
import { SVGProps } from "react";
const Trending = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h24v24H0z" opacity={0.643} />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01042)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default Trending;
