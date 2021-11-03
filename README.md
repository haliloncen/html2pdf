```bash
npm i @haliloncen/html2pdf
```


```javascript
import { createPDF } from '@haliloncen/html2pdf'
// or const { createPDF } = require('@haliloncen/html2pdf')

const html = '<h1>2b || !2b, that is the question</h1>'
const options = {
  window: { width: '1920px', height: '1080px' },
  margin: '32px'
}

// Promise chain
createPDF(html, options)
  .then(pdfBuffer => {...})
  .catch(err => {...})

// Async-await
async function justDoIt() {
  const pdfBuffer = await createPDF(html, options)
}

```