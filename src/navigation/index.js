import * as React  from "react";
import Home from "../screens/homescreen";
import Settings from "../screens/settings";
import contact from '../screens/contactus';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

  
  // function CustomDrawerContent(props) {
  //   return (
  //     <DrawerContentScrollView {...props}>
  //       <DrawerItemList {...props} />
  //       <DrawerItem
  //         label="Close drawer"
  //         onPress={() => props.navigation.closeDrawer()}
  //       />
  //       {/* <DrawerItem
  //         label="Toggle drawer"
  //         onPress={() => props.navigation.toggleDrawer()}
  //       /> */}
  //     </DrawerContentScrollView>
  //   );
  // }

function Navigation(){
    const navigationRef = React.useRef(null);
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" >
          <Drawer.Screen name="Home" component={Home}  options={{ title: "Home Title", icon: "home-outline" }} />
          <Drawer.Screen name="Settings" component={Settings}  options={{ title: "Settings", icon: "home-outline" }} />
          <Drawer.Screen name="Contact Us" component={contact}  options={{ title: "Contact Us", icon: "home-outline" }} /> 
        </Drawer.Navigator>
      </NavigationContainer>
      );
    }
    export default Navigation;


