import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import Drawer from 'expo-router/drawer';

const _layout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
        drawerActiveTintColor: '#fff',
        // drawerLabelStyle: { marginLeft: -20 },
      }}>
      <Drawer.Screen
        name="home"
        options={{
          title: 'Movies',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="favourites"
        options={{
          title: 'Movies',
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default _layout;
