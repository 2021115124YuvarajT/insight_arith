import React from "react";
import Navbar from "../navbar/Navbar";
import {  Routes, Route } from 'react-router-dom';
import Homepg from '../home/Homepg.js';
import Place_val from '../place_val/place_val';
import Mul from '../mul/Mul';
import Naveesh from '../mul/Naveesh';
import Div from '../division/Div';
import Divs from "../divs/Divs";
import Squar from '../squar/Squar';
import Squar_root from '../sqr_root/Squar_root';
import Code from '../code/Code';
import Misc from '../misc/Misc';
import Nomatch from '../Nomatch'
import Intro from '../mul/MulIntro';
import Nikhilam from '../mul/Nikhilam';
import Naveesh_moreexample from "../mul/Naveesh_moreexample";
import Urdvha from "../mul/Urdvha";
import Quick from "../mul/quickrecap";
import More from "../mul/moreexample";
import TryN from "../mul/try_nikh";
import SmallStory from "../place_val/smallstory";
import M_behind from "../place_val/M_behind";
import Mishrank from "../place_val/Mishrank";
import Try_pv from "../place_val/try_place_val";
import Stepbystep from "../place_val/stepbystep";
import More_p from "../place_val/moreproblems";
import Squar_intro from "../squar/squar_intro";
import Dwanda from "../squar/dwanda"
import Squar_method from "../squar/squar_method"
import Squar_examples from "../squar/squar_examples";
import Squar_exercises from "../squar/squar_exercises";
import Squar_stepbystep from "../squar/squar_stepbystep";
import Divs_intro from "../divs/divs_intro";
import Divs_eka from "../divs/divs_eka";
import Divs_better from "../divs/divs_better";
import Divs_negative from "../divs/divs_negative";
import Divs_exercise from "../divs/divs_exercise";
import Divs_how from "../divs/divs_how";
import Nik_great from "../mul/nik_greater";
import Nik_fmexamples from "../mul/nik_fmexamples";
import Nik_otherbase from "../mul/nik_otherbase";
export default function App() {    return (
        <div>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Homepg />} />
                    <Route path='/place_val' element={<Place_val />}>
                        <Route index element={<SmallStory/>}/>
                        <Route path='/place_val/smallstory' element={<SmallStory/>}/>
                        <Route path='/place_val/M_behind' element={<M_behind/>}/>
                        <Route path='/place_val/Mishrank' element={<Mishrank/>}/>
                        <Route path='/place_val/try_place_val' element={<Try_pv/>}/>
                    </Route>
                    <Route path="/place_val/stepbystep" element={<Stepbystep/>}/>
                    <Route path='/mul' element={<Mul />} >
                        <Route index element={<Intro />} />
                        <Route path='/mul/MulIntro' element={<Intro />} />
                        <Route path='/mul/Nikhilam' element={<Nikhilam />} />
                        <Route path = '/mul/Urdvha' element = {<Urdvha/>}/>
                    </Route>
                    <Route path='/mul/nik_otherbase' element ={<Nik_otherbase/>}/>
                    <Route path= '/mul/nik_fmexamples' element = {<Nik_fmexamples/>}/>
                    <Route path='/mul/nik_greater' element={<Nik_great/>}/>
                    <Route path='/place_val/moreproblems' element={<More_p/>}/>
                    <Route path='/mul/try_nikh' element={<TryN/>}/>
                    <Route path='mul/moreexample' element={<More/>}/>
                    <Route path='/mul/Naveesh' element={<Naveesh />} />
                    <Route path = '/mul/Naveesh_moreexample' element = {<Naveesh_moreexample/>}/>
                    <Route path ='mul/quickrecap' element ={<Quick/>}/>
                    <Route path='/division' element={<Div />} />





                    <Route path='/divs' element={<Divs />} >
                        <Route index element={<Divs_intro/>}/>
                        <Route path='/divs/divs_intro' element={<Divs_intro/>}/>
                        <Route path='/divs/divs_eka' element={<Divs_eka/>}/>
                        <Route path='/divs/divs_better' element={<Divs_better/>}/>
                        <Route path='/divs/divs_negative' element = {<Divs_negative/>}/>
                        <Route path='/divs/divs_exercise' element = {<Divs_exercise/>}/>
                        <Route path='/divs/divs_how' element = {<Divs_how/>}/>
                    </Route>

                    
                    
                    
                    
                    <Route path='/squar' element={<Squar />} >
                        <Route index element = {<Squar_intro/>}/>
                        <Route path='/squar/squar_intro' element = {<Squar_intro/>}/>
                        <Route path='/squar/dwanda'element={<Dwanda/>}/>
                        <Route path='/squar/squar_method' element={<Squar_method/>}/>
                        <Route path='/squar/squar_examples' element={<Squar_examples/>}/>
                        <Route path='/squar/squar_exercises' element={<Squar_exercises/>}/>
                    </Route>
                    <Route path='/squar/squar_stepbystep' element={<Squar_stepbystep/>}/>
                    
                    
                    
                    <Route path='/squar_root' element={<Squar_root />} />
                    <Route path='/misc' element={<Misc />} />
                    <Route path='/code' element={<Code />} />
                    <Route path="*" element={<Nomatch/>} />
                </Routes>
        

        </div>
    )
}