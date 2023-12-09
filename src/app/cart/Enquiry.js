'use client'

const Enquiry = () => {
  return (
    <>
      <div className=''>
        <form>
            <div className='block sm:flex gap-5'>
                <div className='mb-3 flex-1'>
                  <label className='text-[#666] text-sm'> Name <span className=" text-red-500 ">*</span></label>
                  <input type="text" className='p-[14px] !border w-100 rounded bg-gray-100  focus:outline-none' placeholder='Name'/>
                </div>

                <div className='mb-3 flex-1'>
                <label className='text-[#666] text-sm'> Phone <span className=" text-red-500 ">*</span></label>
                 <input type="text" className='p-[14px] !border w-100 rounded bg-gray-100  focus:outline-none' placeholder='phone'/>
                </div>
            </div>

            <div className='block sm:flex gap-5'>
                <div className='mb-3 flex-1'>
                 <label className='text-[#666] text-sm'> Email<span className=" text-red-500 ">*</span></label>
                  <input type="text" className='p-[14px] !border w-100 rounded bg-gray-100  focus:outline-none' placeholder='Email'/>
                </div>

                <div className='mb-3 flex-1'>
                 <label className='text-[#666] text-sm'> Address <span className=" text-red-500 ">*</span></label>
                  <input type="text" className='p-[14px] !border w-100 rounded bg-gray-100  focus:outline-none' placeholder='Address'/>
                </div>
            </div>           

            <div className='block sm:flex gap-5'>
                <div className='mb-3 flex-1'>
                  <label className='text-[#666] text-sm'> Message <span className=" text-red-500 "></span></label>
                  <textarea className='!border w-100 bg-gray-100 rounded p-[14px] focus:outline-none' rows="8" placeholder='Write Your Query..'></textarea>
                </div>
            </div>

            <div className='flex justify-center'>
                <button className="bg-[#29549F] transition-colors hover:bg-[#054878] py-[14px]  px-5 text-[16px]  uppercase font-semibold text-center block text-white hover:no-underline rounded"> Submit </button>
            </div>

        </form>
      </div>
    </>
  )
}

export default Enquiry
