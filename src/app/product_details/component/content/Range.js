'use client'

const Range = ({ label, item }) => {
  return (
    <div className='range border text-center transition-colors cursor-pointer border-[#29549F] p-2 rounded bg-blue-50 hover:bg-[#29549F]'>
      <h4 className='text-lg text-[#333] font-medium'>{label}</h4>
      <p className='text-lg text-[#333] font-normal'><b>Item </b> - {item}</p>
    </div>
  );
}

export default Range;
