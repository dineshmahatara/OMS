import { useState } from 'react';
import { Switch } from 'antd';
import {Register} from './index';
import {LoginUser} from '../SectionAdmin/index';

import styles from '@/styles/Home.module.css'
const App = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const onSwitchChange = (checked) => {
    setIsSwitchOn(checked);
  };

  return (
    <>
      <p className={styles.formcontainer} style={{textAlign:'justify'}}>
      <Switch checked={isSwitchOn}  size='Extralarge' onChange={onSwitchChange} /> Switch From this Button
      </p>
      {isSwitchOn ? (
        <div>
          <p><Register/></p>
        </div>
      ) : (
        <div>
          <LoginUser/>
        </div>
      )}
    </>
  );
};

export default App;
