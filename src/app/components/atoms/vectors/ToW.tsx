import * as React from "react";
import { SVGProps } from "react";
const Tow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M.95 0h24v24h-24z" opacity={0.643} />
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUeSURBVHgB7Z2/VxNBEMcnYEFHoLKMVJbYYSedpXba6V9g7LQyqXxWwF8gdFqhnVbQaQc9jx92dsFOG3AGNz7gZe5272Z3dsl83rtHCHvhbmf3+92dvbsAGIZhqNGBQllaWnqDP/q4daE5p7htHh0dvQQlZqFAsPLX8Mcr3OagHbT/ysLCQmc0Gu2CAjNQJs9AlhegRJEShD3gHHQQl6xSe4AW5Dd9bAADEMIC0AwxyboFNwiUhlpJFZKvNiOvK1gPUMYCoMyNkqA2cPIVe8RlPUAZC4AyFgBlLADKWACUsQAoYwFQxgKgzI2aiCmmqRtjPUAZC4AylgtyaMmX9QBlLADKTOOK2Ajar2idghDT2AM2oD1bIMTUBQB7yQD+BaFJK6Z9hvgZfRDiRl0X5CNBuWEmrIwFQBkLgDIWAGUsAMpYAJSxAChjAVDGAqCMBUCZ4gKAaYgXFX8Ty9GkoqjcSQ+ZmZnZAz6dfHp2dnbvBIFCKCYAWPddV/m9mqInLghiOfuYFCNBWPl0Y3bPo2jPlS2CIm7Udro/CNiFbr7+NRqNvkPmZC9BHrrPUYQfZB0AD90fLy9yI6Ps/SBrD6jRfarcAW3n5+cnTJns/SDbADjd58b1JC+r1LJpwwCsAr/G2895fpClCZPudzqdD8A/DeX18fHxl/Evpwia7h98+ZApvzI/P/+RykFmZOcBPrrPXZWALX0dCvOD7CTIR/e5fUv0g6wC4Kv73P4l+kE2HhCq+xyl+UEWHtBG9zlK8YMsJKiN7nOU4gfqAWir+xyl+IGqB0jpPkcJfqDmATF0nyNnP1CToBi6z5GzH6gEIJbuc+TsB8k9ILbuc+TqB0k9IJbuCz1HmkjuB0klKIbuu+dID0DmUZLJ/SCZBNWs65Lu38eW9xPCPpMq6xXIknQ9OYkEeazrvkTpWYcA8CMf4GfuQBySrSdHD0Cd7qMhbx4eHj6HAFxAd8DvMpWmJPGD6B5Qdz0PnuQyBQk8cQGNXfkX/yqFH0S9U75mvH8B9oBl3MhIvXqBh5GvhkhHjTzS/OBHqDyGEM2EPcb7l1n2Mb4608XKf4x1vw8BaM8PonhAwHWcV3Ctd5f5zDrTHbq74BuhlS+K4gEB13Fe32+bes71951MvK/YdaNN5RNa+SLxANTleWZnZ+/hiXIy0UXZ2r5syh6mK5K408oXiQbAtd5BRZHhwcHBPp7oY2BOlEwZK3xt/Lun6YpIgzPvYUWRN5N6aBvEPCA0z+Oh6fRFOfNQEdAqz2hDSj8QGwUtLi6+BX4kQQf9FAcSv8dv4OsTGvlU7EPvPwCeIWZNNyECOOqh0dgT7I2ThqYkk3M4YvsKAogEoGmeh4ad3W73DskOhEG9SToH9B9qKHhcn/G4nsHkYbRYvqi1B/joftXECP2gX2HKkxBdLWP/SSI/aBWASyMULpWwUTeLdKMP1pSvF5deLavCHTv3iLOLcw9Jo0yiVQCk8vvU2mgWW1cOyzxPfcdL7PlBYw+Qzu97mHI0060ith80CkCsdd0KU45qunXEzBcFB8Dp/jd8eZsp0iotgOfwCU92AV/exY2Gre80K38MNQ53XCsT/jyHjeYRBmHr8lDbh+CJmFuD5abkRd0kHQo1PqzoPdx6TJH10G9aDTLh1Nfz5EaMfJG3BMXS/dKQ9gMvCYp1PU/JSOWLvCQo5XWcpSA1P6gNwLTrPoeUH1R6gOl+NRJ+wHqA6b4/bfyAlSDTfX9Kf16FYRhTy1/132cmRh6b6AAAAABJRU5ErkJggg=="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default Tow;
