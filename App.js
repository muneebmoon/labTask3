import React from 'react';
import { SafeAreaView } from 'react-native';
import DiscountCalculatorApp from './components/DiscountCalculatorApp';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DiscountCalculatorApp />
    </SafeAreaView>
  );
};

export default App;
