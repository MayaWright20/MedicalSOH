import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from "./navigation/BottomTabsNavigator";
import LoadingOverlay from './components/Background/LoadingOverlay';
import {init} from "./utils/database";
import { COLORS } from './constants/COLORS';

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(()=>{
    init().then(()=>{
      setDbInitialized(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  if(!dbInitialized){
    return <LoadingOverlay backgroundColor={COLORS.DARK_PURPLE} color={COLORS.GREEN}/>
  }

  return (
    <NavigationContainer>
      <BottomTabsNavigator/>
    </NavigationContainer>
  );
}



