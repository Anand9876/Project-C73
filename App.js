import React,{Component} from 'react';
import { Text,View,Image} from 'react-native';
import TransactionScreen from './screens/CycleTransactionScreen';
import Searchscreen from './screens/SearchScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }

}
const TabNavigator = createBottomTabNavigator({
  TransactionScreen:{screen:TransactionScreen},
  Searchscreen:{screen:Searchscreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName;
      if(routeName==='TransactionScreen'){
        return(
          <Image source={require('./assets/booklogo.jpg')} style={{width:40,height:40}} />
        )
      }
      else if(routeName==='Searchscreen'){
        return(
          <Image source={require('./assets/searchingbook.png')}  style={{width:40,height:40}} />
        )
      }
    }
  })
}
)
const AppContainer = createAppContainer(TabNavigator)