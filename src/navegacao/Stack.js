import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import PassoStack from "../components/PassoStack";
import telaB from "../views/TelaB";

const Stack = createStackNavigator();

export default props => (
  <Stack.Navigator
    initialRouteName="TelaA"
    screenOptions={{ headerShown: true }}
  >
    <Stack.Screen
      name="TelaA"
      options={{ title: "Informações Principais" }}>
      {props => (
        <PassoStack
          {...props}
          avancar="TelaB"
          avancarParams={{ numero: 1007 }}>
          <TelaA />
        </PassoStack>
      )}
    </Stack.Screen>
    <Stack.Screen name="TelaB">
      {props => (
        <PassoStack
          {...props}
          avancar="TelaC"
          voltar
          avancarParams={{ numero: 1007 }}
        >
          <TelaB />
        </PassoStack>
      )}
    </Stack.Screen>
    <Stack.Screen name="TelaC">
      {props => (
        <PassoStack {...props} voltar>
          <TelaC {...props} />
        </PassoStack>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);
