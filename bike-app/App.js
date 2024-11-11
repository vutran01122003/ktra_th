import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./redux/store";
import Bike from "./screens/Bike";
import CreateBike from "./screens/CreateBike";
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Bike"
                        component={Bike}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="CreateBike" component={CreateBike} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
