import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from "./navigation/BottomTabsNavigator";
import AppLoading from 'expo-app-loading';
import {init} from "./utils/database";

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
    return <AppLoading/>
  }

  return (
    <NavigationContainer>
      <BottomTabsNavigator/>
    </NavigationContainer>
  );
}



