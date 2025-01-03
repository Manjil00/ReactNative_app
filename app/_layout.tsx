import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'


const Stack = createStackNavigator();

const Layout = () => (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
);

export default Layout;
