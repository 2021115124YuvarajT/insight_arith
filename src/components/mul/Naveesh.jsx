import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Naveesh.css"
export default function Naveesh(){
    const navigate = useNavigate();
    return(
        <> 
            <div>
            
                <div>
                      <h1>Navasesh</h1>
                      <div className="top-p">
                       <p>  Here is a method for checking your answers after multiplication. But before getting into the method you should know what navasesh means and how to obtain the navasesh of a number.</p>      
                        <h2>What is Navasesh?</h2>
                        <h3>Example:</h3>
                        <p style={{'margin-left':'50px'}}>
                            <p style={{'font-size':'x-large'}}>navasesh of 24 is 6</p>
                            <p style={{'font-size':'x-large'}}>navasesh of 63 is 0</p>
                            <p style={{'font-size':'x-large'}}>navasesh of  110 is 2</p>
                        </p>
                        <p style={{'font-size':'x-large'}}>Now, it is easier to calculate the navasesh of smaller numbers by dividing the number by 9. In the case of larger numbers this may be a time consuming process. So here is a method of finding the navasesh of a number without dividing the number.</p>
                        <h2>Method to find Navasesh without dividing the Number.</h2>
                        <p style={{'font-size':'x-large'}}>All you've to do is to sum the digits of the number to a single digit. This single digit is the navasesh of the number.</p>
                        <h2>Example:</h2>
                        <p style={{'font-size':'x-large'}}>navasesh of 24 is 2+4=6</p>
                        <p style={{'font-size':'x-large'}}>navasesh of 233 is 2+3+3=8</p>
                        <p style={{'font-size':'x-large'}}>Looks much simpler! Doesn't it? This process can be carried out mentally. Now,there may be occasions while carrying out the addition process , where   the sum equals or exceeds 9. If the sum equals 9, treat it as 0, and continue adding the other digits. If it exceeds 9, then add the individual digits of the sum, and continue adding the rest of the digits.</p>
                        <h2>Example:</h2>
                        <img src = "http://insight.sabarirb.org/Reading%20Materials/maths/arith/mul/images/navaex1_1.gif"/>
                        <p style={{'font-size':'x-large'}}> The sum 4+5=9 (equals 9). So the sum is 0. Continue adding  0 with 7. 0+7=7.</p>
                        <img src ="http://insight.sabarirb.org/Reading%20Materials/maths/arith/mul/images/navaex1_3.gif"/>
                        <p style={{'font-size':'x-large'}}>6 is the navasesh of 4578.</p>
                        <h2>Need to see some more examples?</h2>
                        <p style={{'font-size':'x-large'}}><NavLink to = "/mul/Naveesh_moreexample">Click here!</NavLink></p>
                        <p style={{'font-size':'x-large'}}>Now that you are familiar with finding navasesh of a given number here comes the method of checking your answers after multiplication.</p>
                        <h3>consider</h3>
                        <p style={{'font-size':'x-large'}}>the multiplication of 789 by 67. If you multiply, you'll get the  answer as 52863. We can check this result as follows:</p>
                        <h3>Step1:</h3>
                        <p style={{'font-size':'x-large'}}>Find the navaseshs of the two multiplicands.
Navasesh of 789 is 6 and that of 67 is 4.</p>
                        <h3>Step2:</h3>
                        <p style={{'font-size':'x-large'}}> Find the product of the two navaseshs.
6 x 4 =24.</p>
                        <h3>Step3:</h3>         
                        <p style={{'font-size':'x-large'}}>Now find the navasesh of this product.
Navasesh of 24 is 6.</p>
                        <p style={{'font-size':'x-large'}}>Let us call this 6 as the <b>product navasesh.</b></p>
                        <p style={{'font-size':'x-large'}}>Now find the navasesh of your answer.  If it is not equal to the product navasesh then your answer is wrong.</p>
                        <p style={{'font-size':'x-large'}}>Navasesh of 52863 is 6, which is equal to product navasesh.
                        <b >Now you think your answer is correct.</b></p>
                        <h3><b>Warning⚠️</b></h3>
                        <p style={{'font-size':'x-large'}}>It is possible that you arrive at a wrong answer whose Navsesh is that of the actual answer. For example,</p>
                        <p style={{'font-size':'x-large'}}>the navasesh of 52863 and that of 51963 are equal! You may be fooled and you think the wrong answer is right. But the possibility of this occuring in an actual multiplication is very low. But, at the same time, if the Navaseshs are not equal the method assures you that your answer is <b>definitely</b> wrong!</p>
                    </div>
               
               
               
               
               
               
                </div>
                <button style={{'marginLeft':'45%'}}onClick={()=>navigate(-1)}>Back</button>
            </div>
        </>
        
    )
}