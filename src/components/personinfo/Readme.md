PersonInfo-komponentilla renderöidään käyttäjän sovellukseen määrittelemät profiilitiedot
nimi, ikä, pituus ja paino. Tämän lisäksi sivulle on määritelty profiilikuva.
Komponentti saa kutsun yhteydessä tulostettavien profiilitietojen tiedot 
data-ominaisuuden kautta. 

Malliesimerkki käytöstä: 
```js 
import { BrowserRouter as Router } from 'react-router-dom';

const data = {
        name: "Niina",
        age: "29",
        height: "160",
        weight: "59"
};

<Router>
    <PersonInfo data={data} />
</Router>

```