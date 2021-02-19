import React from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import {increment, decrement} from './Actions/Actions';
import {useSelector, useDispatch } from 'react-redux';

const CounterApp = (props) =>{

  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();

    return(
        <View style={{flex:1 ,
         alignItems:'center', justifyContent:'center'}}>

         <View style={{flexDirection:'row', width:250, justifyContent:'space-around'}}>

        <TouchableOpacity onPress={()=>dispatch(increment())}>
        <Text style={{fontSize:20}}>Increment</Text>
        </TouchableOpacity>

        <Text style={{fontSize:20}}>{data}</Text>

        <TouchableOpacity onPress={()=>dispatch(decrement())}>
        <Text style={{fontSize:20}}>Decrement</Text>
        </TouchableOpacity>

        </View>

        </View>
    ); ;
}

export default CounterApp;
