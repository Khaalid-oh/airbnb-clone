import * as React from "react";
import { SVGProps } from "react";
const Design = (props: SVGProps<SVGSVGElement>) => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKSSURBVHgB7dzrcdNAFIbhD4b/hEpIB2wJlJAOoIO4g5AS6IAOTAmhAkpwOnBWk3iiaHTb61kp7zNz/sS2LvvZZzWrUSQAAAAADXG+fvg6+jr5ulEBn4QL5+urr+++rn1dDV6/FrJyevsNPy/UfyGJU9iAj9WVsJpT+oAP60aZ7WkOcJrv4akefX1WZh+0XU7lB/zB1x9f/3z9VQFbCsBpBwM+1HIATmUHfGjL3SALp/yTZr9OL9ueet2E5STsZNNSzAZ7TM0AnHbYw1OVDMCJAV+UMwAnBjxYSgBODHiykACcGPCqnMpeFvbLqZ6mLkP7um916evwFk6+2QB+Kv+AH/UcqnvZBwEM9OeAB6Whh0cYrn9039q1k2vMgJ9XHkdJLRzDpK5lLLWWfksJRQtasGYeSEEAA8OfXXcl9E3PLeW48jMhaEEBOy1xoAQw8FEwRQDGCMAYARgjAGMEYIwAjBGAMQIwRgDGWgngXLFqHkO3vH+nSCVWDc/vtA5TA9LKYtzedTevvoy9QAD1jI4bk7AxAjDWyjNie3o4IqjN8gswRgDGCMAYARgjAGMEYIwAjBGAMQIwRgDGCMBYTAApNyZyulX6s2xr71hd9pV0hytUzTtGoe4y7/8QuK+59+c6x6YDyP0U5ylwX3PvDzrHrc4BuR8SL/2/iCYxCS+7H/nbb1XQcguqfQy/9DoJHxR3bKO2+ohSynZKnFf09mlBxgjAGAEYIwBjBGCMANa5VUNrQS1sM2U7oZ9tbi0oxRYDYC1ozwhgWXNrQS1ss2YL6rAWlHE7Jc4revu0IGMEYIwAjBGAMQIwFnMVhDhcBbWIAIzNBfAo5DI5lnMB3Au5RK8dXdZAzlRUrVk7AgAAeIeeAF69NqVaBrr3AAAAAElFTkSuQmCC"
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default Design;
