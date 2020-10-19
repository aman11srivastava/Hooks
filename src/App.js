import React from 'react';
import './App.css';
import ClassCounterConditional from './Components/useEffect/ClassCounterConditional';
import ClassCounterEffect from './Components/useEffect/ClassCounterEffect';
import ClassMouseMove from './Components/useEffect/ClassMouseMove';
import CounterConditionaluseEffect from './Components/useEffect/CounterConditionaluseEffect';
import HookCounterEffect from './Components/useEffect/HookCounterEffect';
import IntervalClassCounter from './Components/useEffect/IntervalClassCounter';
import IntervalHookCounter from './Components/useEffect/IntervalHookCounter';
import UseEffectCleanUp from './Components/useEffect/UseEffectCleanUp';
import UseEffectRunOnce from './Components/useEffect/UseEffectRunOnce';
import ClassCounter from './Components/useState/ClassCounter'
import HookCounter from './Components/useState/HookCounter'
import HookCounterWithPrevState from './Components/useState/HookCounterWithArray';
import HookCounterWithObject from './Components/useState/HookCounterWithObject'
import HookCounterWithArray from './Components/useState/HookCounterWithPrevState';
import DataFetching from './Components/useEffect/DataFetching'

function App() {
  const underlineStyle = {
    textDecoration: 'underline'
  }
  return (
    <div className="App">
      <h1 style={underlineStyle}>useState</h1>
      {/* <ClassCounter/>
      <HookCounter/>
      <HookCounterWithPrevState/>
      <HookCounterWithObject/>
      <HookCounterWithArray/> */}
      <h1 style={underlineStyle}>useEffect</h1>
      {/* <ClassCounterEffect/> */}
      {/* <HookCounterEffect/> */}
      {/* <ClassCounterConditional/> */}
      {/* <CounterConditionaluseEffect/> */}
      {/* <ClassMouseMove/> */}
      {/* <UseEffectRunOnce/> */}
      {/* <UseEffectCleanUp/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      <DataFetching/>
    </div>
  );
}

export default App;
