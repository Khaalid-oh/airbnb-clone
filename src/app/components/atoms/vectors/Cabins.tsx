import * as React from "react";
import { SVGProps } from "react";
const Cabins = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M.81 0h24v24h-24z" opacity={0.643} />
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN1SURBVHgB7ZyNcdNAFIQXhgJCBy4hJbgD0kFKIFSAqAA6uEclLgGo4KCClCCkiQ+S2CeddO/+pP1mdphx4Hzaz4rEi2OAEEIIIUV4gzY5DDme/xyxQ34N+QmSlOOQ05Dekx9D7kGSYOAv/nW+gqiypHwXA6LCmvIpQYmY8ikhkrny7ZBv51hQgipz5cuQm2d//+b8WCkJvudskpDyfQjKSNiMgJjyHYL8EjYhQKN8hyCvhOYFaJbvEOST0LSAFOU7BHkkNCsgZfkOQXoJTQrIUb5DkFZCcwJylu8QpJPQlIAS5TsEaSQ0I6Bk+Q6BvoQmBNRQvkOgK6F6AXPl1xiDcKoWMB5I7WXHSqhWwHgAtZesIaFKAQbtlBwroToBBm0VHCuhKgEG7ZUbK6EaAQbTByCoH8FyCVUI2EL5DsEyCcUFbKl8hyBcQlEBWyzfIQiTUEzAlst3COYlFBGwh/IdguljzS5gT+U7BJUI2GP5DkFhAXsu3yEoJGCufCahAAOgZ8oIMAB6ZlUMIjFAkY1TAlh+UQkGKLrhXUswCxfu8PKXJfbCeMwPUJawtPwHkA5KEpaWP2aPr/zXjB1EfztaU34P4lh9TXh7XuDPxOLfQdYy1d1F5x0uLcn5azwDppnqR3D9xuUqHS7Ln3oC7WvAuN5nTH8gx9qk+iCPqWuAQxBQvqPD5VTTep6ggx4HzP/CtUYs/n/MjQYf4Rf+HEFEXwL/AY23ohpnQo7yn0uI3bM7W33PYaDIEfnK2Uo+QJkTgJ4JikUCDkMeAfTMZB6x4BrzDnWj9Zl2PTaARf5Xkxa5932CMncA+gLRosTejwH7+jeKmONu4mtfhrzH07eLtSlFzJ7HY/40sfY9FBn/U3HNstY4utQZoEHnWdtCEd8BaI0iWhYQMorwEnr695H/nut7CL0GkERQQGFiBfBHkpEdhAr47XmcP5T3326qfpK7wH+l1xhHt3gXtItxtBYl9r6JcbQWufdtkYAD8o+jtci550XjaN6GNoRF3ldSq2fAmBOU4Th6eY4B++I4OiIcR1eyfudZ20IR3wFwHM1xdNvr8za0MBRQGI6j4+E4ujD3nsc5jk68Pt8dXXn47uiCsUjAAXx3dEgWjaOXcgtKmCv/Fok5oMxouvackPCVf41xQirwD+r2EIunu50jCCGEEELIAv4CnRUcMAGic6sAAAAASUVORK5CYII="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default Cabins;
