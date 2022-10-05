import React, { useEffect, useState } from 'react'
import './Counter.css'

const Counter = () => {
 
    // const [count, setcount] = useState(0);
    // useEffect(() => {
      
    //     let target = 10000;
    //     if(count <= target){
    //         setTimeout(() => {
    //             setcount(count+200);
    //         }, 100);
    //     }
     
    // }, [])
    

  return (
    <div className='bg-img'>
    <div className='backgroundimg'>

       <p className='vision-text1'>SUCCESS IS NOT FINAL;FAILURE IS NOT A FATAL: IT IS THE COURAGE TO CONTINUE THAT COUNTS.</p>
       <div className='client'>
           <div className='amount1'>
               <div  data-number="2000" class="counter-numbers">6500+</div>
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