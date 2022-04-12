import React from react;
import { Stylesheet, Text, view } from 'react-native';
export default function App() {
  return (
    <view style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </view>
  );
}
const styles = Sstylesheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});