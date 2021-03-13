Uibuttons-komponentissa on tehtynä komponenttikirjasto, 
joka sisältää sovelluksessa hyödynnettävät, erilaiset napit. 
Sovelluksessa on monta nappia eri määrityksillä, koska eri sivuille
piti saada nappi asettumaan eri kohtaan näytöllä, jolloin yksi ja sama 
nappi ei toiminut jokaisella sivulla. 

Malliesimerkki perusnapin käytöstä, kun napilla ei ole mitään erillisiä määrityksiä: 
```js 
<Button />
```

Malliesimerkki napin käytöstä, kun napilla määrittely "primary" ja sen mukanaan
tuomat tyylimääritteet: 
```js 
<Button primary/>
```

Malliesimerkki napin käytöstä, kun napilla määrittely "secondary" ja sen mukanaan
tuomat tyylimääritteet: 
```js 
<Button secondary/>
```

Malliesimerkki napin käytöstä, kun napilla määrittely "success" ja sen mukanaan
tuomat tyylimääritteet: 
```js 
<Button success/>
```

Malliesimerkki napin käytöstä, kun napilla määrittely "info" ja sen mukanaan
tuomat tyylimääritteet: 
```js 
<Button info/>
```

Malliesimerkki napin käytöstä, kun napilla määrittely "light" ja sen mukanaan
tuomat tyylimääritteet: 
```js 
<Button light/>
```

Malliesimerkki napin käytöstä, kun napilla määrittely "dark" ja sen mukanaan
tuomat tyylimääritteet: 
```js 
<Button dark/>
```

Malliesimerkki napin käytöstä, kun napilla määrittely "disabled" ja sen mukanaan
tuomat tyylimääritteet: 
```js 
<Button disabled/>
```

Malliesimerkki FloatingButton- napin käytöstä:
```js 

import { FloatingButton  } from './uibuttons.js';

<FloatingButton secondary/>
```


