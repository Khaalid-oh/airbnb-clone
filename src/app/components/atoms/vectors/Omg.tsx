import * as React from "react";
import { SVGProps } from "react";
const Omg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M.11 0h24v24h-24z" opacity={0.643} />
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQOSURBVHgB7Z3Lkdw2EECfPwGMM0AG2qNvRgjKYCYDKwPSEUgZzPjok6SbbxxHYDsCKoO1b77J7NrZKmlrQPZwAAIg+1V1ScXdBZv9QwPg7IJhGIZhGIZhGIZhGIaxFb6hDvwgrwZ5uMhuEPfiez5d5J9BzoP8ffnXmIkf5DjI4yCfZ8rjZQyPoUIiu+E+o4ekH2SPEeRn0hjeHDGBG6QjveGvOcKxcZaK+rE54g0bpeE2Q3U8Oew1T5G7+2Is+b90R36QltszqmFjHNEZ5tnoO25HfuYwyJ/Kex3ZCBrji+E98fA81fzNO0FSPWdNfsP0nLPaciSlZOzBJUId6XFMZ8PqJmbHeORJnZ5T5+/RZ2xueGRlLepYxC1t/Gd2jDuhYyUcyF92QuwYD45VlKLQA5aS5o5weZTrObIzGgfqiC7RJaRnS8WEor+nPDrCWVAlnnBUecrDU5e+k5wIdz2lEsqCIxUSmtj2lEtoLqiuDHnC6VxyVyG6hQLHk4BvScND4PqZp0PzUhHd/gp87YEEpHLAT4Hrf1A+HwPXX5GAVA4IlZkz5fMpcD1JBnxPGlzgeke9VLEiFiXfMr7VW7O8pWAc+uO/mqWnwK1qT963G3I44TWF0FCX8WJKQ0ak3nfUZ7TY8p4MJUlasp5p5U7UvZ8uup+Yfk6xhWMhtG+zrelgu0WXDUmfWdtiSjQkWbRkRpv1SVpVh67F7Fj3C68OnR2iliSPruS8Yzu06Jxwd6vaKG4kzjmwPQ7oArNhBtoWc06qNRfFRe6plyWM49DNCze1qilbzGuTeMvtlDRO9FZVY/y57da1lJ1z3FfaOEKLrlx/xcvzgB3TUS2nRh8wXiInaVOnfarTQE0JmvsaeUuc7qktbJwGXQlSr48culLUcDvygM+TXst8ShhHqoVMsFN2krWD40a0g7+n8vcnZ+LQBend66NWcZOebX3kc8/0GmBumb7KQXFDcYJn/TRErvdaHOnmhRrQLk7lexyJcOg2o4o+vJ6BY6F6r+WdQplZM3+B7Fm43mtpmXbCFqQn4/mHdt9ordJRQJY7tumEos4/tIu2NYknAt8Rh/8G+W2QHwb5kW3w7yC/cyep3o7eAnsK3ILpWaZehspCCnYkLkOx8IQVdcRlSQcIXeB+HQVxYjkll3aAH7lnEWVoLE33xGdpB4x9eK+lAA4sGyFLO0AIbb90FIAocU25I2nI4QBPoZOxY3nFcjhACAVa1lVxKDV70pHLAW3gvll/rU3P8lGRywHZ1gSfZ4gjHbkcIHTcbos2NFiqrYgz4Q88184vRCSVA06sF80bcGpSOeAj60WM/yuRSOGAE2X/RpQYfCASKRwQLToK5oz9fRrDMAzDMAzDMAzDMAzDMAyjHv4HIqkMIh5hfK4AAAAASUVORK5CYII="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default Omg;
