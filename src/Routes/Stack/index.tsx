import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import CadastroRO from "../../Pages/CadastroRO";
import { propsNavigationStack } from "./Models";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function () {
    return(
        <Navigator initialRouteName="Login"  screenOptions={{headerShown : false}}>
            <Screen name="Home" component={Home}/>
            <Screen name="Login" component={Login}/>
            <Screen name="CadastroRO" component={CadastroRO}/>
        </Navigator>
    )
}