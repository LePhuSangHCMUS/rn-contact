import React from 'react'
import { Button, Text, View } from "react-native"
export default function HomeScreen({ navigation ,route }) {

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);
  return (<View>
    <Text>Home Screen {route.params?.post}</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
  )
}
