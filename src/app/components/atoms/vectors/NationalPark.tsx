import * as React from "react";
import { SVGProps } from "react";
const NationalPark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M.42 0h24v23.75h-24z" opacity={0.643} />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.0103 .01042)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABgCAYAAAANWhwGAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVjSURBVHgB7Z3Blds2EIb/l+SQ46aCTDqwO0AqiDvYpAJvKiBSgTcVSK7A2wGVW262jz5RrmC3A5vzSNgUlwABEiQHFL735u1KhCAQPzAAByAFZDKZTCaTyWSWQ9f2ZcA05HNT2+va3tVWtfa+fX2LhNBIUwSu/EcMl90Yi5KEGPcYPoF7yOUN3JXftwLC4a47VPAHyIQr9MsEEy2ErUs/Qh4K0wQwpiCQV0in0DwIV5gnQtXmIwqeSbgKXUIOrnGAz0PVRu1fl1hvIAieXfi0njtsj4K7dVMv/VivURDAC4xP77pjwwtsx1iF3lo+pyDYLSn4C9AVQmEbXG7oMPLZdxDmlm4QPr8eKjhhPRTC3FAfPmdXg1NYAUIzA7pHeOt39YpDmy9hOaa6oT6uGeBibkkjTmWHmkZc5rihPqu7JY30RVCY54b6jLml4InHD4jHGfbwxEN7fAsOjmMa4eV6qu0vTPu+QWKJcKztZW0fLcf5/d9re4t1KWBv6UdML88D7A2Oe4JGRDTcbqPE5azAll530hCaCljaHRHiuqGh/KO4pZCewN3wA5oK5O74C5rWfeqksc0Ouu+fa/uztt/afN62+T4hLqXjmMZ893iu7R/H8WC3FAspoewCcWZD3JpLyJhgeCMhlE2I44Y4XYzroVXDNFJC2ZWjDLeeecQIdRt7jxWREMouRsrgezE1NyTTt1WixxJC2RSpDL7nEmKPWDhOJiWUXWF+hRDixcVW8wQKMkLZRWAZKjyfTo+NA747Rkqs5AkkhbJpxvd3cZ1PBf8IKcE9SyTMgCAzlF058tcjZTUt8/VIGQlh3CGiW9KIU9mhpuFH4cjj0KZxVYhxjT5ChVLGylNDrgjk+HyFy9Z7P7Ecc3YOEuziHhCAhn+B+cRtYQuzyTamCK78bntpp1x8VZi/UtbvhSzKKwSi4VfgQ1tgW3p+nzAePfUVoRgpyxCEsKk0IQ4lvjfESaJquAvLX6A80utOGsK8UDbB3w31uYOfCDGnkoQJrb+LxmXr4NDEAU0o+mYk/VilUpvPsc33EX4iVPB3Q0OMjQ9zxgERaIS37BAKhLuhPq7xoYLA/aWhaCwnAmG6GxrKqz8+LB7fsRFzoX9pSscxjbCVMk7Lq4If2ten9vUZG/AT0oDdEFmOHTFtwZ4FeAkBpNATCHZ3doZ7nTcJUhAhphsSiXQRlnBD4pAsAmHnbsggWYTduyGDVBGuwg0ZJIpAuBI3ZJAowtW4IYM0EVxuiLdS7soNGSSJQLC7oafa/sZOkSSCyw3xOHDGTpEigssNnbCDGL8LCSIQ3G7IdWvSLpAgwtW6IcPWIly1GzJsKQLhyt2QYUsRrt4N+aLht0Uk23PjNesSzQ4QgoOU1phTg3dtKDQBRxajsCXMIqwDofEqg7drZRHWhXf2PRMii7A+LITqvpFF2IYCC6Kx3A681OAbJCvYZ09kEuaesBxmc5ntmR3K/JNFWBYWwLYQReafLIIAsgjLwhdsf1iOfXvmRRZhORSaK2WyHP/2lLRUdmUPwa2M4zIKzUyEkA48aJ/Ni1RF4Ju/NdK9q+ZinSQ1EbjS+S5IhXT5Fwlv3WEBxp6pJN2OSJzYD4Jae21hlQdPLQkPvClVuqn4EmmPXRe4nk/NJ6qwkxOVClfubn1sKvAjCYYEqJDWtYGVVO7eHOKEnezISEEEm6//jJ2Qggi2ePyvyKyGbUzgKWCeEa2Ea3Z0QGY1+FrAJoT5hcDMwihsfwU8ZBoRSGVR54Qm+rhLUlpZ0/j+fKJdkZIIPFXt/3zMLkhtjdkIwbfTnrETfkSa/I9mdepT+/pnbHPN8B922DMzmczV8hVWed01CuwyhAAAAABJRU5ErkJggg=="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default NationalPark;
