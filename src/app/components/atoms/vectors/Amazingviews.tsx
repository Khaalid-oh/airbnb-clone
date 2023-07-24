import * as React from "react";
import { SVGProps } from "react";
const AmazingViews = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M.3 0h24v23.75H.3z" />
    <defs>
      <pattern
        id="a"
        width={100}
        height={100}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.0103 .01042)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABgCAYAAAANWhwGAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATiSURBVHgB7ZyNcdQwEIUfDAVABYgOoAJMBUAFHBUQKohSAVABRwVABTEVJFQQUUGgArgdWZOQWLIsa+W9y34zmhvL9tqnp9XPWjagKIoimqe7dLpLfxuks+F6yjXMLl2ijQAh0fUe4o5yfyTvFdoXCF1vgzvKmAhr1Uj1BGU9VAShWIx3nhZ1sGjb6UtNNhSIeoIAVAQBqAgCUBEEoCIIQJIIJ7t070DSScZ/tCFTPUEAKoIAVAQBqAgCUBEEoCIIQEUQgIoggLsuAj3NO4Zf1BCeq18O2+/gn7ezs4YIUh5jUiFfwM9cO1zd18Nh++Ow/xjMrCHC40i+Qzs+wxdyToWww/FsSPIEhzZ8wPyVHZvhPBbWEKGL5P8GP5tdOkIZdF4HBlqL0EXySYBz8PMOy2DpH1qL8CqS30IAg/hyS7r+C/gQ8zPE76cDw4iptQgvI/nfwU9MAAcvQD9sB0FizWOHyrQUgbzARPZ9Az8xEagC3Cxw2v4SOd6gMi1FiLXHPdoOT8XRSoQN4m68RRtcJP8Nbg+baTvWdJ6hMi1ECKGBMRzibl+bPpJP90dhitBcdcO2iRz/E5V5AH5IABPZZ9EOBy9EN7KPBMip4edgaDq5PYEEiE2OHNp5QeAEy/gIBjhFoLbWJvan9nHR79InlEHnsVQaLhFIgG1iP9sfyuCo4NpfUB7umIRDBGqCton9Dut4wXU2yGuaaL7wHsyvctXsmA18yLdLHOOQno22xMJXFhqK0kSSOmcaKYU41g/4PoD9XmuIQDdOE7EjpOPz9GdeQ9bEzME3jaX9RBWWiNDB16Cxyc5NSADygBaBur1jjgj0RGwD77bkwibzPAcvgIMyyhwRNpjfQfW79BYqQBKuIWoYVagHZMARtqCwNAngoGRRWwQqfJap/SFTuzmiFQns63QODY4+wYJxecghMqc5orb+F/KGp2Hi9jayP6xye4mr1W9hrnE+pB7l8aW17U/NmyaxmP6sQoe8j1KNeQTNrnO/p0TLEN9gHpLsp8owiZ1hYAP/R1IXDtFHg/KviZ1h2vsk22cVIdzcWeLCVGsovHEx42ZjtTb23LfbA/vRMqwxRHXwk7JTjC8rofbxK5Zj4Pslh6tlKmT7Oep8Q88w249Sa54QAnQ5br0Ug+XLGde0f4uaQ9QgxJz4ew8f3n4EvwSRfmlEVSva2o/Yf93AvsNCLJZ1KrHz59rLtSPRvi28p2oGqB1NDeEukL+es6RDl2DfYkYZcsyYqTmKPaly8Kuee+RBHeUT5DVRPfxzY0n2s+Ba/NVjPIZkUMZ2SAZ+pBJGK+Rxf7B8PeuW2X4SThHCEO8mBuUdoxvSN/DgmO2Pwrn4q4/ks4659xFOEX5F8hcHtw4NThFi8wUV4QYtVmWPoaHsCSwWTjQm7FBoQ0PZE9ilBibslKSDDmXvywdGaERFBZAKNZ+i/M1KbvtJ1uoTSjDQULYYDDSUXZUeGsoexaJNx2wXnl/UCTayb+ecs4YnOPiHP3biONpfUqucEPvZrCECTZD6zGM1lC2ILTSULQYHDWUrHKgIAlARBLCGCMdYNj7fh3Sc8d9tyFRPEICKIAAVQQAqggBUBKFY8I4cLJT/UE8QgIoggDER5rzkUQK3/YNg6v2CJYnsGihZUDw99UZmSTqFLgZWFEWRzD8yxKVblfsEOgAAAABJRU5ErkJggg=="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default AmazingViews;
