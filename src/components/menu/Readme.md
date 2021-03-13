Menu-komponentissa on määritelty reititys eri sivujen välillä. 
Tästä komponentista löytyy kuvake jokaiselle sovelluksen eri 
sivulle, josta painamalla, käyttäjä siirtyy sovelluksessa aina 
uudelle sivulle.

Malliesimerkki käytöstä: 
```js 

import { Link, BrowserRouter as Router } from 'react-router-dom';
import ViewListIcon from '@material-ui/icons/ViewList';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

<Router>
<Link><ViewListIcon/></Link>
<Link><SettingsIcon/></Link>
<Link><PersonIcon/></Link>
<Link><TrendingUpIcon/></Link>
</Router>
```