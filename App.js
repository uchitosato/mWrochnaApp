import React from 'react';

//import all the components we are going to use
import { SafeAreaView } from 'react-native';

import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://tracking.onepartners.io/click?o=567&a=3307&link_id=1698' }}
        style={{ flex: 1, marginTop: 20 }}
      />
    </SafeAreaView>
  );
};

export default App;
