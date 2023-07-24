import * as React from "react";
import { SVGProps } from "react";
const AmazingPool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M.94 0h24v24h-24z" opacity={0.643} />
    <defs>
      <pattern
        id="a"
        width={24}
        height={24}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01042)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKoSURBVHgB7ZyPcdMwGMVfOQYoG2gDygbZgFFgg4gJgAlSNmCDHhvABM4GZQMjnX1H2qscy5b6+c/vd/fdpan9bOvZqvoiRQIAAAAAAAAI3IY6hnoI1YRq+3rs3/sUyr2izm5w6hqmHVknvdyApXR2Rbwb453ZZlbc53MFnV1xVH6DPa9jQZ1dEe/YdmG1myfBaVp3UbsetZO/CfcabgQf6nCx/d2VfUrqPGjjOKUvvtHwHej0dFhZS+dWGyb2s6kLdyP2j9tc677m6nhtmPiIv3TRpwwNr3Tjl9DZdDeUuuvuMjQOShtQQqdRZW5kR5t4P/eclqaTxVvZYWn+YngjMAUDjMEAYzDAGAwwZspIpBUMkdWmPAHGYIAxGGAMBhiDAcZsIY9ZdRjHE2AMBhiDAcZggDEYYAwGGIMBxmCAMRhgDAYYgwHGYIAxGGAMBhhTempinBD7Ud1kV6f/08P/hvod6pe6hRFnTSOlX5MYU5c6/2o41V0W6jL1x64NuNTP0c49/6pMXRYaa8xiuLXrVyMu3/mqaSd+WVHDbVB/FFM+bvOh3qvrh0uuofoZ6k//es36PmcnZsaVx3xmXBwxfAn1oT+Zm/71j/53tfS/ax36sxnqDxuVWV66Zv3qpA78TeP61LjNvfIbZy361bk8WBy+nfR0FfpYnLoLGRoCrlE/i6mjoHNf8b/DEv3iQd3I5F3/83nF+l4AAAAGxLj4qPS3FHrNSxGv6c/9FsTa+tVwWlYcvTT9qhBHG0EcPaw/CuLo8vo+Zyfi6PIQRy9cfzZD/WEj4ujqpA5MHG1gAHE0cfTi9L0AAAAMII42wok42gziaCOIo4f1R0EcXV7f5+xEHF0e4uiF689mqD9sRBxdndSBiaMNDCCOJo5enL4XAAAAAMCy+QeV85qry4Cr+AAAAABJRU5ErkJggg=="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default AmazingPool;
