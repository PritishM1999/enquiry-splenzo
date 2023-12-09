'use client'


const ThankYou = () => {
  return (
    <>
      <section className="py-5">
        <div className="thank-you !border-8  rounded shadow-lg m-auto  border-[#13274b] p-10 text-center w-[500px] h-[400px] flex flex-col justify-center items-center" style={{borderStyle:'inset'}}>
          <h1 className='text-[80px] text-[#13274b] font-Butler mb-0'>Thank You</h1>
          <p className="font-poppise mb-0 text-md text-[#333] font-normal">Thank you for your inquiry! We will get back to you shortly.</p>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
