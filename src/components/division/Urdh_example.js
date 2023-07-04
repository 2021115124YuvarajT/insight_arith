import React from 'react'
import './nik_div.css'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import { useNavigate } from "react-router-dom";
const Urdh_example = () => {
  const navigate=useNavigate();
  return (
    <div>
      <Sidenavbar/>
      <div class= 'body'>
      <h3 class='main_heading'>MORE EXAMPLES ON URDHVA TIRYAKA</h3>
      <table>
        <tr>
          <td class='table-header'>
            <h4>EXAMPLE 1 : 42915 ÷ 83</h4>
            <p>and get the answer od quotient and remainder.</p>
          </td>
          <td class='table-header'>
            <h4>EXAMPE 2 : 69546 ÷ 57</h4>
            <p>and get the answer to a precision of one digit as decimal.</p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>STEP 1:</h3>
            <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/div/examples/exam04.gif'/></p>
          </td>
          <td>
            <h3>STEP 1:</h3>
            <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/div/examples/exam105.gif'/></p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>STEP 2:</h3>
            <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/div/examples/exam03.gif'/></p>
          </td>
          <td>
          <h3>STEP 2:</h3>
            <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/div/examples/exam104.gif'/></p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>STEP 3:</h3>
            <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/div/examples/exam02.gif'/></p>
          </td>
          <td>
          <h3>STEP 3:</h3>
            <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/div/examples/exam103.gif'/></p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>STEP 4:</h3>
            <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/div/examples/exam01.gif'/></p>
          </td>
          <td>
          <h3>STEP 4:</h3>
            <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/div/examples/exam102.gif'/></p>
          </td>
        </tr>
        <tr>
          <td>
            <p>The Remainder is 25 - 3 x 7  = 4 
              <br/>The Quotient is 517.</p>    
          </td>
          <td>
          <h3>STEP 5:</h3>
            <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/div/examples/exam101.gif'/></p>
            <p>Instead of calculating the remainder,<br/>we'll proceed further to get an <br/>answer after the decimal point</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Thus we got the the answers</p>   
          </td>
          <td>
          <h3>STEP 6:</h3>
            <p class='img-wrapper'><img src='http://insight.sabarirb.org/Reading%20Materials/maths/arith/div/examples/exam106.gif'/></p>
          </td>
        </tr>
      </table>
      <button className="back" onClick={()=>navigate(-1)}>Back to URDHVA TIRYAKA page</button><br/>
      <br/>
    </div>
  </div>
   
  )
}

export default Urdh_example
