import * as React from "react";
import { SVGProps } from "react";
const BeachFront = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M.2 0h24v24H.2z" opacity={0.643} />
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATgSURBVHgB7ZyBcds6DIb/13sD5E3wuEE9gt4EL53A6gTNBlEnqDuB3QnaDdQNmk4gb+B0Apc8W42iMyCCoiSaxneH61WhAYogQQiWCSiKoizGX7gdCiv3Vt5aWVm5O19/tvJk5aeVb1a+z6TnZnCDVVs5ekpjZT2hnpvBzUzJgPVla8VE1HNTGJxm4HGkNBH1GNwIbsbGGLTY0uBlv0gK1ymDeHxCeoPfyickRGFlY+WAeLHSYHgWfsBrOy6TKSFbNWP0LL4KCvCb2hhHbBi9G4/PVxge/LF6KixEAVk2EeKImtHly26gT2P11JgZg/nSuAOhYwV/CvCh5ytO+b0Z0LMidBy6jaZ8Enax7tHKA+Kws/LRyp5pUwmvd7k7t1vDP07vwPepEl6PhtugqNk4RtwMXCM+Y/o7VZ+CMJCFG3fTFU4zqRF8rka81PVRYJeTRyyMZBa1A99d6uZ8rRHoGBveYg3+ok5wg/gV4QPfx8AvHWxli7DVUAJBgzwksfY8Lwz8Z6wbKMlDiAGfEnalgcwJBuHlih8YnmSzPGzdwy/k1DildqEY+A3W4dwnH3bgnelSSOqhbuPRpwoTs4bfgMRcjpWHzSOGMxIDv5VUMm1aPZQTJl0FH+C3TA3iY+C3GjgnlMznTKfdHdOuHdwV02aSvWCN4Zv3qZWMpfLoB+UEKmHYXmjbEG27T9Y7gb5RGPAx3/2txHw8YDgEXipBUJtocaEt5ayy06YAH6qiYMAvfepmp2Y10C/3t34sHgorXaiNuOq0oULVAR78DT8q0DF9b+U/8DWaqXg6265xuX/u2tbKu861j4SuZ0L/Jf7tfY7SGYUS6c38Pq4PXHgsEMY9oa/GjDSQb3RLUIIPRSFQWc4PzESJZbMdKdw3Yv9DjkFch4qp4b+5pQD3RkRI2DBY0AEG1xF6+pSg+20gh9I1OSUWXn4joDbkkKfTSR3whvkbFTO/I32+ENff4ooYKrteozSQs9gKMMiP5BIHzgFJvsc4Euk9GeL6MyLxBgoH5TB1wExQDtgjEuoAHqrO9QuR4Kqh1FtzR2H7qZmyP4a4/oRI6ArgoZ4bZivGXWLSvDiAqfrDfSdsEAldATRU/N9DN+FZoN4x+omFuZUQ1CDRSnCsG05NTxfufR+DhbkFB+wInYtmPy234IAGiYYfR+4OKJFw+HHk7oCG0PcNiZCzA0pGX8hbFZNwvBIJoSF0NUiI1Ac+1AElo2uNhEh94EMd0GCB2R9Ssp3tN1AjcN9Y/YMrIKQW9Bnp8wWZ0z1mJiVpfwarKIqiKIqiJM3Yd2cKvJyjbPBSrp3qHOUic3uijtXwz88bjKunFJnb82buc5RztyfCYN5zlHO35017+mHM0oPTtZ7Z3kMi9l7BbcJbnDy5wnTVz3Yz25//bzK29x5CJEsuxnnMudsT46N046GnAkQ3nKs9MZwy6XFkQ2f7DEkO9sRQimqEnZBiEJbi5WJPTH9GOOUFxlPg9Orf0Olbudm7CJcFled/nxDxJzk9CpwykG4Wkqu9HRRFUdJCy9Fp2RN1TJLiNdBydBS0HB3XnggDLUfHtOeNlqPj2nuFlqO1HB20xLUcfZaNh54KEN1wrvbEcMq0HC23J4ZSVEPL0SH2xPRnhFNeYDwFtBz9By1HazlaURRFURRlAX4D28joVW4K/i8AAAAASUVORK5CYII="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default BeachFront;
