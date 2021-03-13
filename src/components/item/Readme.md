Item-komponentilla renderöidään yksittäinen merkintä sivulle.
Komponentti saa kutsun yhteydessä tulostettavan merkinnän tiedot 
data-ominaisuuden kautta. 

Malliesimerkki käytöstä: 
```js 
import { BrowserRouter as Router } from 'react-router-dom';

const data = {
        id: "123",
        type: "Maastaveto",
        repeats: "3x15",
        trainDate: "2021-03-12",
        kilos: "30"
};

<Router>
    <Item data={data} />
</Router>

```