


const Form = () => {
  return (
    <>
      <div className='w-[100%]  lg:w-[75%] m-auto !border rounded p-4'>
        <form>
            <div className='block sm:flex gap-5'>
                <div className='mb-3 flex-1'>
                   <label className='text-[#666] text-sm'> Profession<span className=" text-red-500 ">*</span></label>
                    <select className='p-[12px] !border w-100 bg-gray-100 rounded  focus:outline-none'>
                        <option>Select</option>
                        <option>Architect</option>
                        <option>Interior Designer</option>
                        <option>Engineer</option>
                        <option>Developer</option>
                        <option>Dealer</option>
                        <option>Contractor</option>
                    </select>
                </div>

                <div className='mb-3 flex-1'>
                  <label className='text-[#666] text-sm'> Name <span className=" text-red-500 ">*</span></label>
                  <input type="text" className='p-[14px] !border w-100 rounded bg-gray-100  focus:outline-none' placeholder='Name'/>
                </div>
            </div>

            <div className='block sm:flex gap-5'>

                <div className='mb-3 flex-1'>
                <label className='text-[#666] text-sm'> Phone <span className=" text-red-500 ">*</span></label>
                 <input type="text" className='p-[14px] !border w-100 rounded bg-gray-100  focus:outline-none' placeholder='phone'/>
                </div>
              
                <div className='mb-3 flex-1'>
                 <label className='text-[#666] text-sm'> Email<span className=" text-red-500 ">*</span></label>
                  <input type="text" className='p-[14px] !border w-100 rounded bg-gray-100  focus:outline-none' placeholder='Email'/>
                </div>
            </div>

            <div className='block sm:flex gap-5'>
                <div className='mb-3 flex-1'>
                <label className='text-[#666] text-sm'> City<span className=" text-red-500 ">*</span></label>
                 <input type="text" className='p-[14px] !border w-100 rounded bg-gray-100  focus:outline-none' placeholder='City'/>
                </div>
               
                <div className='mb-3 flex-1'>
                <label className='text-[#666] text-sm'> State<span className=" text-red-500 ">*</span></label>
                 <input type="text" className='p-[14px] !border w-100 rounded bg-gray-100  focus:outline-none' placeholder='State'/>
                </div>
            </div>

            <div className='block sm:flex gap-5'>
                <div className='mb-3 flex-1'>
                <label className='text-[#666] text-sm'> Postal Code <span className=" text-red-500 ">*</span></label>
                 <input type="text" className='p-[14px] !border w-100 rounded bg-gray-100  focus:outline-none' placeholder='Postal Code'/>
                </div>

                <div className='mb-3 flex-1'>
                <label className='text-[#666] text-sm'> Country <span className=" text-red-500 ">*</span></label>
                 <input type="text" className='p-[14px] !border w-100 rounded bg-gray-100  focus:outline-none' placeholder='Country'/>
                </div>
            </div>

            <div className='block sm:flex gap-5'>
                <div className='mb-3 flex-1'>
                 <label className='text-[#666] text-sm'> Address <span className=" text-red-500 ">*</span></label>
                  <textarea className='!border w-100 bg-gray-100 rounded p-[14px] focus:outline-none' rows="3" placeholder='Address...'></textarea>
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

export default Form
