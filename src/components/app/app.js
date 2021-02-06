import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import Settings from '../../routes/settings';
import Person from '../../routes/person';
import Stats from '../../routes/stats';
import Menu from '../menu';
import { ButtonAppContainer } from '../../shared/uibuttons';
import testdata from '../../testdata';

function App() {
  return (
    <ButtonAppContainer>
      <div className={styles.app}>
        <Router>
          <Header />
          <Content>
            <Route exact path="/">
            <Items data={testdata} />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/person">
              <Person />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
          </Content>
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
  );
}

export default App;
