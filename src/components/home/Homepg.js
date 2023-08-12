import React from 'react';
import "./homepg.css";
import { useNavigate } from 'react-router-dom';
export default function Homepg()
{
    const navigate = useNavigate();
    return(
        <div> 
            <div className="main-container-Home">
                <div className="Content-home">
                <p className="home-para">Numbers have always been a fascination for the Indians. The speedy methods developed by them for arithmetic calculations stand as  good examples for that. The techniques used in these methods  are very simple yet their power is amazing. These methods for fast calculation are available for a wide range of  operations from basic multiplication to solving simultaneous equations.
                There are certain salient features about these methods that make them so powerful.</p>
                <h3>Rapid Calculations through Place Value Techniques</h3>
                <img className="home-img" src="https://cdn.pixabay.com/photo/2016/06/13/07/59/pi-1453836_1280.jpg" ></img>
                <ul className="home-ul">
                    <li className="home-li">	
                    The shortcuts used are well suited for mental calculations. At any stage of calculation, it is enough to remember just a few (maximum 3) digits and therefore, it becomes easy for us to work them out mentally.
                    </li>
                    <li className="home-li">
                    These techniques make use of the place value system of  numbers and hence are independent of the base used.
                    </li>
                    <li className="home-li">
                    They are simple, easy to learn, and result in significant improvement of speed in calculations.
                    </li>
                    <li className="home-li">
                    Having spoken about the features of Indian arithmetic, we shall now take a closer look at the methods
                    </li>
                </ul>
                </div>
                <div className="credits">
                <p class="credit-p">Department of IST & CSE, College of Engineering, Guindy, Anna University Chennai</p>
                <button class ="credit-p1" onClick={()=>navigate('/Dev_Team')}>Tech Team</button>&nbsp;&nbsp;
                </div>
            </div>
        </div>
    );
}
