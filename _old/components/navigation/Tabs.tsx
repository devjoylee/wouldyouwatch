import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import Movies from 'pages/Movies';
import Search from 'pages/Search';
import TV from 'pages/TV';
import { COLORS } from '@styles/index';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: isDark ? COLORS.BLACK : '#fff' }}
      screenOptions={{
        unmountOnBlur: true,
        tabBarStyle: {
          backgroundColor: isDark ? COLORS.BLACK : 'white',
        },
        tabBarActiveTintColor: isDark ? COLORS.YELLOW : COLORS.BLACK,
        tabBarInactiveTintColor: isDark ? COLORS.DARKGREY : COLORS.LIGHTGREY,
        headerStyle: {
          backgroundColor: isDark ? COLORS.BLACK : 'white',
        },
        headerTitleStyle: {
          color: isDark ? 'white' : COLORS.BLACK,
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
        component={TV}
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
