// import React, { useEffect, useState } from 'react'
import { useEffect, useState } from 'react';
import './Counter.css'
import { useInView } from "react-intersection-observer";

const Counter = () => {
  
  const [count,setCount] = useState(0);
  
  const { ref, inView } = useInView({
    threshold: 0
  });
  console.log(inView);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);
    }, 1);
    if (count === 6000) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (

    <div  ref={ref} className='bg-img'>
       <h2>
          Element is inside the viewport: <strong>{inView.toString()}</strong>
        </h2>
    <div className='backgroundimg'>

       <p className='vision-text1'>SUCCESS IS NOT FINAL;FAILURE IS NOT A FATAL: IT IS THE COURAGE TO CONTINUE THAT COUNTS.</p>
       <div className='client'>
           <div className='amount1'>
               <div  data-number="2000" class="counter-numbers">{count}+</div>
               <div className='b2b'>B2B</div>
           </div>
           <div className='amount2'>
                 <div  data-number="6000" class="counter-numbers">8500+</div>
               <div className='b2b'>B2C</div>
           </div>
           <div className='amount3'>
                 <div  data-number="8000" class="counter-numbers">7000+</div>
               <div className='b2b'>SUPPLIER</div>
           </div>
           <div className='amount4'>
                 <div  data-number="7000" class="counter-numbers">9500+</div>
               <div className='b2b'>DISTRIBUTER</div>
           </div>
       </div>
    </div>
</div>
  )
}

export default Counter