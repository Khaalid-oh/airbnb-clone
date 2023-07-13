import React from 'react'

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t-[0.1px] border-gray-300 text-xs p-4 px-16 flex justify-between z-20">
      <div className="flex gap-1">
        <p>&copy; Airbnb, Inc.</p>
        <p>Terms</p>
        <span>.</span>
        <p>Sitemap</p>
        <span>.</span>
        <p>Privacy</p>
        <span>.</span>
        <p>Your Privacy Choices</p>
        <div></div>
      </div>

      <div className="flex gap-3">
        <span>
          {" "}
          <p>English (US)</p>
        </span>
        <span className="flex">
          {" "}
          <p>$ USD</p>
        </span>
        <span>Support & resources</span>
        <span></span>
      </div>
    </div>
  );
}

export default Footer
