import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import NavigatorWrapper from './src/navigations/NavigatorWrapper';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';


function App(): JSX.Element {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigatorWrapper />
      </ApplicationProvider>
    </>
  );
}
export default App;