import { useEffect, useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import ColorChanger from './components/ColorChanger';
import Generatednumber from './components/Generatednumber';
import ToggleSwitch from './components/ToggleSwitch';
import Calcultor from './components/Calcultor';
import Temperatureconverter from './components/Temperatureconverter';
import Parent from './components/using_choldren_prop/Parent';
function app(){
   

  return(
    <div>
      {/* <Counter/> */}
    {/* < Greeting/> */}
    {/* <ColorChanger/> */}
    {/* <Generatednumber/> */}

    {/* <ToggleSwitch/> */}
    {/* <Calcultor/> */}
    {/* <Temperatureconverter/> */}
    <Parent/>
    </div>
    
  );
}

export default app;

