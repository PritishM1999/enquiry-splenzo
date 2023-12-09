'use client'
const Counter = () => {
  const counters = [
    { count: '+1000', label: 'products' },
    { count: '+2500', label: 'pan india clients' },
    { count: '+8', label: 'countries' },
    { count: '+5', label: 'manufacturing units' },
  ];


  return (
    <div className='number_counter'>
      <ul className='flex flex-wrap md:flex md:flex-wrap gap-3 md:gap-5 mb-0'>
        {counters.map((counter, index) => (
          <li key={index} className="flex-1 border-r last:border-r-0">
            <h3 className="text-[30px]  px-3 sm:px-4 md:px-0 sm:text-[36px] md:text-[48px] lg:text-[55px] xl:text-[60px] 2xl:text-[72px] text-[#333] font-bold text-center mb-0 "  style={{textShadow: '0px 2px 12px #929498c2'}}>{counter.count}</h3>
            <p className='text-sm md:text-[14px]  text-[#333] font-medium  text-center mb-0 capitalize'>{counter.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
