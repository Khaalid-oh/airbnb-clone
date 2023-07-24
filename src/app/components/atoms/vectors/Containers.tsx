import * as React from "react";
import { SVGProps } from "react";
const Contianers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M.09 0h24v24h-24z" opacity={0.643} />
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgB7dwxagJRFEDRN4lFyiwnS0uXJWSpyQ7MDElpRFDmCp4DDwSx+ZcvOsWbAQAAAACA3Xys87XO0ewy21l/bgf//PfifZ2XYS/bWb+tsyzzW+N1KHxvAY5D5mlICRA7nHlvGW7p5Fe9GxATICZATICYALHDXOe/P3GX/IJ6tM+e5AbEBIgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYADEBYgLEBIgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmQEyAmAAxAWICxASICRATIHZua6KVZbdlZdk9EiAmQEyAmAAxu6NjbkBMgJgAMQFiAsSsr9+PZ0H3SICYADEBYgIAABD4ATr+a2YK5j1pAAAAAElFTkSuQmCC"
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default Contianers;
