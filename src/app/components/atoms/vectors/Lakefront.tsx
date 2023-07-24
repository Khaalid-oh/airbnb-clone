import * as React from "react";
import { SVGProps } from "react";
const LakeFront = (props: SVGProps<SVGSVGElement>) => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQvSURBVHgB7ZyBVdswEIZ/OgHd4DpB6QYagQ2gE5QN4g1gg2SDdoOwAe0EYQO6AbWe7RLybOtOlizH/N9793hAfHfWSafLRQ5ACCGEEPIRuQAJ8Trw9yRj9wnzcVnLppYDmpvy8tT+7RIkK4L3A38qh/Y1S2TI57OZNK6WFwzfSCcv7WuXxBWG/b3CGfAD4YE/lTssB+/LOfjZywb2we9kg2Wwx7CPeywUnxu3iB/8TrYom2cFYR8Xl4YETWWjSTN3itc9odzmvEPYv59YEILxSqdvo71SXHPA/EG4hX6lOiwAh3ClMzSQAnvgciIKf059ExREU+mEUolAn7py4qArmfsml0MBNgg7t4N+M31Q6NsgPd6/e8A88KeyxUyrQVvpVLBTQXejsRWStHKNZvXugajBHpN9q9uh2ecECRHkTxc5K6TXQpIEwXwbZq4K6WwD4BBf6cQi0AXB8oZIO2DdRBr6/zVs1dIkUlQ6sQjSpjzNYG3xtseMDahA94ZtUgA2CuU75G8bpKqQxma8tyHK1x/jr9lhfEVEsUX4pivMR4WwP/cBHYdW/Kry99dVK0NYB9S1On2bYn9kz4ymLi7RktVUSBXSMWQje6NwbMMt/eFJqEJ6QRrGPpARZGbI8GEO4woEGXLuCWNZoEJmikXegCBfAAThVSbISM6ZlZIcfvr8ril9n5BxL/ioARDoBv84CIIMfLQAdOeWYtvRN4gIxNjprteIa0oQ66e08hVNW8FXPCnSya9aHmv5U8tzK1FMnVmxs8lfE3ozNcXP10JiZoqiFB9uVEpbZx2AXCnIz+Kpy/lvLZ8Vr7P6GTUbE9DrT67DuSlyaemzl4+1fBv5/xc0+T4bU1JQ1mWrtBXjW9cRdQb9fvPeIbzf9ZIrBaVa5lNshVLQM5o097sVX7U8jrxeo9+hqar8T7+CBW+l6YVWSYzhqdfOactKVv1zPqBBemAACsMAFIYBKAwDUBgGoDAMQGEYgMIwAIVhAArDABQmphdE4pj18wCihAEoDANQGAagMAwAIYQQQggpwNSzLQ7N0W5/GEnwdgipO/DkDzt1x7VT4FZuz+TYHvojhgc0DzDQ3kQuMe3rXbawPUWydnsmBLYvpxibLUJ7eqY8OzUkXtfNzPbuFmLvHWOb8BZNJFM9O9VHt5k9t7/Liu19hxHLkvNfTiFH1/qbukWaJb0We2Y0Sh8UeirAdMNrtWdmTJk6x7VovuFk7fbMDCnaI+47kwVxJd5a7Jk5nRFeucN0HMLPVK3RXi9jVdBt+7N7hioHDk0FclyFrNXeDoQQsizYjl6WPZNjlhLvALajk8B2dFp7JgRsR6e0p4bt6LT23sF2NNvRUUuc7ehWHhR6KsB0w2u1Z2ZMGdvRdntmhhTtwXZ0jD0zpzPCK3eYjgPb0f9hO5rtaEIIIYSQAvwD0R5R+u0IzpcAAAAASUVORK5CYII="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default LakeFront;
