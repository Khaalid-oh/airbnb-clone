import * as React from "react";
import { SVGProps } from "react";
const Treehouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M.38 0h24v24h-24z" opacity={0.643} />
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANJSURBVHgB7ZztcaMwFEXv7mwBW8IrISWok9DBpgPTQdKB08GW4BK2BJeQErzWxJ4hDiA9ffAQ3DOjXzYgvWPQNRYGCCGEKPl9bYdr+7i147UJSHWGhb+MNP+agBQnVPhhO1/bM0gxOnwW9aJsFJGJu7YT9IWniEwcyhT+sfl9CsgkAn3h/fvfldscQRFf8BPsK/SFd4N9CPTydi9Ck2ymCv9IB/2E7fsg2BEphfdFfUY8HXQitPtvlg66wnhJPT6lLXG8zYpw0F2jcws/RG770lyWNiPCQT85vqFM4R8R6BPTCY3OD4K0SCmoj2DD0bVEpFwKwYaia41IGeJ+PN9ekU6HhqPrEpFyjLGzrEceHRpLTB2WjZRDPib2X4IOKxfhYBcp79QU4BGsMLo6pN2lrBEp+5HjvKE8Av14Tyg8Pwjybg/Xwhf8Pgn3qEfquI8oIMJldKC2gKXIHb9DJqeIg8y9p3XmrvmhupxRAIe4iWdvAjwd5kU4FOL0sOOxZLNHAXc6fBfxFwVxmC68pqMtEjsuwdd0JihMh/lIuXcBdwSK7wM/UI7LAsewoOq4foKYQgHGtCDgAN3d1mFSy7lN3Rw1JmHtjztjrUcezYSLGh1N+eSPnQk5VBWw9hRUaqA1+sAUtAUowJhfaJOp03+Vk+McPAOMoQBjKMAYCjCGAoyhAGMowBgKMIYCjKEAYyjAGAowhgKMoQBj5n7Vae7W7soZrTXPAGMowBgKMIYCjKGADdIjvFgqdsmgdlFU6iIqv+z+iPqr7BbjBeHB/EP4IYYlBMitL6H+vqAxnhB+kM2/LjP7qC1AIvrolzY6NIogTsLTxPY1BTiE156GPiBNIEg/xWsJ+BPRn5hLZFP4J9tDgz48bFNDwCGiH++o8xcL5vQID36YkC6FmmdzSScVTUIqJUCw0aSTSmxCKiUgtK+mk04qgrJFzpEj2CmCuEtDrba5pJNKTEIq3d6x0aSTSo/44k0Ru30PMkpMQsoVsJukk0pMQppibptdJp1UBPMSpph6/xmcbNUIygkQrJS1/5XMVLG1T0mudpytPqZ6wUbgb8LGUIAxFGAMBRhDAcbwzzqM4RlgDAUYQwHGUIAxFEAIIYQQQgz4D/D8nNmLnajBAAAAAElFTkSuQmCC"
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default Treehouse;
