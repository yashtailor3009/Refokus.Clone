import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto py-20 px-12 flex justify-between items-start gap-20'>
        <div className='basis-1/2 flex items-center justify-center'>
        <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
        </div>
        <div className="flex gap-10 basis-1/2">

        <div className="basis-1/3">
            <h4 className="mb-6 text-zinc-400 uppercase text-xs">Socials</h4>
            {["instagram","twitter (x?)","LinkedIn"].map((item,index) => (
            <a key={index} className="block mt-2 text-zinc-500 capitalize">{item}</a>
            ))}
        </div>


        <div className="basis-1/3">
            <h4 className="mb-6 text-zinc-400 uppercase text-xs">Socials</h4>
            {["instagram","twitter (x?)","LinkedIn"].map((item,index) => (
            <a key={index} className="block mt-2 text-zinc-500 capitalize">{item}</a>
            ))}
        </div>


        <div className="basis-1/3 flex flex-col items-end text-right text-sm opacity-80 leading-relaxed">
        <p>
            Refokus is a pioneering digital agency driven by design and empowered by technology
        </p>
        <img
            src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
            className="w-30 mt-6"
        />
        </div>
        </div>
    </div>
    )
}

export default Footer 
