import React from 'react'
import '../division/nik_div.css'
const Mishrank = () => {
  return (
    <div class='body'>
    <h3 class='main_heading'>MISHRANK - SQUARE ROOT TECHNIQUE</h3>
    <hr/>
    <p>We'll work out the same example dealt before, now  using mishrank. At one stage, our working sheet would have looked like this :</p>
    <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/sqrt/images/mish3.gif'/></p>
    <p class='center-para'> 43  =  8 x 5 + 3  Hence, quotient = 5, remainder = 3
    <br/>New P.D = 30 -  D ( 4125) =  -14</p> 
    <p>This is the place when the P.D becomes negative. In the previous method, we went on to make corrections to the partial dividend. 
        However, we may proceed without making corrections at this stage. This is done by using mishrank.
        The negative partial dividend is kept as such, and the quotient and remainder are calculated.  i.e.</p>
    <p class='center-para'>-14 =  8 x -2  + 2  Hence quotient = -2 , remainder = 2.</p>
    <p>This negative quotient is represented using mishrank as <span class='complement'>2</span></p>
    <p class='center-para'>The new   P.D  becomes 20 - D(<img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/sqrt/images/bar2.gif'/>) = 22</p>
    <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/sqrt/images/mish2.gif'/></p>

    <p class='center-para'>Now, 22 =  8x 2  + 6  Hence, quotient = 2, remainder = 6<br/>New P.D = 60 - D(<img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/sqrt/images/bar3.gif'/>) = 28.</p>
    <p>The new P.D is positive and we've also got a precision of 4 decimal places. Hence we stop. 
    How easy is the working using mishrank! We didn't go back and make corrections at all. 
    There can be situations where corrections become unavoidable even using mishrank. 
    However, mishrank minimizes the number of corrections. Do you now appreciate the use of mishrank!
    </p>
    </div>
  )
}

export default Mishrank
