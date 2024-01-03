import React from "react";
import { Text, View } from "react-native"

function HomeScreen ({navigation}: any){
    // React.useEffect(() => {
    //     const unsubscribe = navigation.addListener('tabPress', (e) => {
    //       // Prevent default behavior
    //       e.preventDefault();
    
    //      console.log('Default behavior prevented');
    //       // Do something manually
    //       // ...
    //     });
    
    //     return unsubscribe;
    //   }, [navigation]);
return (
    
    <View>
        <Text>Homee</Text>
    </View>
)
}
export default HomeScreen