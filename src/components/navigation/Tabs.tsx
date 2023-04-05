import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import Movies from 'pages/Movies';
import Search from 'pages/Search';
import Tv from 'pages/Tv';
import { colors } from 'styles/colors';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: isDark ? colors.black : '#fff' }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? colors.black : 'white',
        },
        tabBarActiveTintColor: isDark ? colors.yellow : colors.black,
        tabBarInactiveTintColor: isDark ? colors.darkGrey : colors.lightGrey,
        headerStyle: {
          backgroundColor: isDark ? colors.black : 'white',
        },
        headerTitleStyle: {
          color: isDark ? 'white' : colors.black,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600', marginBottom: 3 },
      }}
    >
      <Tab.Screen
        name='Movies'
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'film' : 'film-outline'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='TV'
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='tv' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='search' color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
