# Notify
Notify is a minimal notification plugin for vue built using vuetify snackbars.
## Setup
```bash
npm install --save @nosth/notify
```
import the plugin in your `main.js`:
```javascript
import Vue           from 'vue'
import Notify from '@nosth/notify'

Vue.use(Notify)
```
Add the global component to your `app.vue` or default layout :
```html
<Toast/>
```
Call the `$notify` method in your `.vue` files to trigger a normal notification, `$warn` for a warning notification and `$error` for erros:
```javascript
//normal notification
this.$notify({message : 'Saul goodman !'})

//warning
this.$warn({message : 'Tread lightly!'})

//error
this.$error({message : 'Oh no !'})

```

Other optional parameters for the source of the notification are availible :

```javascript
//bottom center (default)
this.$notify({message : 'Hello world'})

//bottom left
this.$notify({message : 'Hello world', left : true})

//bottom right
this.$notify({message : 'Hello world', right : true})


//top center
this.$notify({message : 'Hello world', top : true})

//top left
this.$notify({message : 'Hello world', top : true, left : true})

//top right
this.$notify({message : 'Hello world', top : true, right : true})


```