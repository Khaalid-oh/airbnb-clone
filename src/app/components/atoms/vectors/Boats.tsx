import * as React from "react";
import { SVGProps } from "react";
const Boats = (props: SVGProps<SVGSVGElement>) => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO2SURBVHgB7Z3LcdRAFEUvnwVLEwFiyQqzY/kywERgEwHOAGVgiMAiA7ashgwGIpghAnvJbtCrmcFTQt1qSf19eqeqy2VZpdb0VZ9u/caAoihKtpy15a4tu4wL79/NYV+L48nA3/+05VVbzpEvz9ry9vDzOwRCyLsHnBaCQErQ0LFsUJiKhhTElKChI9z4IlVEKKMHiFWRTUOE+IhTkQsN+j/sLeLj0gtuIAxC/wflnhH7aFukinLSkNhZ0RAN8tDQmAFZlIoIeWhIzKzoMcZha+R75Av30CxVNDaAC8Pyb8iDL4blVVs+QQCmQfgd4mJSDR/lGxSoIhf46Df5PzamBmYIQmdFDfKYAQH2AJjPEDgrykU/wHAA4lRk0k9u5RSCIBU1yL/xdz37LUZFpdyQ6SJCRaXoZ2fYf7Ksv0EBKmpQRuPvLJ+haBWVoh9bAKJP0FIwNgCGULiKcmJKAIzIE7QUTA1AVeSJqQEwBFXRbOYEwKiKZjI3AFXRTOYGwBBURZPxEQCjKpqIrwBURRPxFQBDUBWNxmcAjKpoJL4DUBWNxHcADEFV5EyIABhVkSOhAlAVORIqAIagKhokZACMqmiA0AGoigYIHQBDUBUZiREAoyoyECsAVZGBWAEwBFXRf8QMgFEVdYgdgKqoQ+wAGIKq6B8pAmBURQdSBaAqOpAqAIagKkoaALN4FaUOYPEq2mVeNnBU0dg35RU3qrZcu6z4CGUSUzdTuW/L86GVtAckRgMIx1cIJucBmN+pq+HIU8iiuDFNFZQYDSAxGkBiNIDEaACJcZ01lHDmmSOD7as9IDEaQGI0gMS4BpDzt+IWjQYQjq3LSq4B/DQs/4D9SL/k8t7QNls44BrAb8PycyhkWP4LHrmC+d7n0uE26Gsbr19oe4YFPwFggQ1gapcKnlkZKrrFcmnQ3yZrBOAaEdMugArm9rhEAGz/xGeF5dEgwQFZWyp1eg5GCB9hboegSrb1Al6+hGlpBfuX2VYITA37EwF3nd9ZT/wwK2E+dNjWOmE9tsavEYk1xj+ucTxvuMR4rmB/GDZVPd06o0GYtpOng3blUE8F8/Q3p3p2iHg+RJh+lIw5Si+E1dOL6y3Jui0vDjvr+w2QLfYX+47XTiTVUw+trPeEwxL1njCnzucCL/FwqfYN9pest/CHtHqcGPJf7bCNGpjl2BLr8YZt4CH3zUwewEutxxvdDa8w74LTFdymfaXXM8iYWRCfAfKdsR/wd4+YZyB8+eI1Hl7nkVRPDSVv/gKxfhyU55k/+AAAAABJRU5ErkJggg=="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default Boats;
