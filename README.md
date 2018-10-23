# GistSearchApp 
![dd](http://i68.tinypic.com/28vsh1s.jpg)
## Stack
* Vuejs

## Starting Development server
* `git clone https://github.com/anekix/GistSearchApp.git`
* `cd GistSearchApp`
* `npm install`
* `npm run serve`

## Design 

App uses components based design , has following main components
* `<User/>`
* `<Search/>`
* `<GistItem/>`
* `<Tag/>`

* `<Tag>` &`<User>` components are used by the the `<GistItem>` component.
`<Search>` component is used in the home view (`home.vue`) to render a generic search component.

* All  informations regarding gists are fetched asynchronously.

* Api calls to the github are abstracted as services.
* **file names** are tagged `blue`
* **file types** are tagged `grey`


## organisation of components
```
+---------------------------------------------------------+
|              +---------------------+                    |
|              |      <Search/>      |                    |
|              +---------------------+                    |
|                                                         |
|  +--------------------------------------------------+   |
|  |              <GistItem/>                         |   |
|  |  +--------------------------------------------+  |   |
|  |  |               <Tag/>                       |  |   | 
|  |  |              <User/>                       |  |   |
|  |  +--------------------------------------------+  |   |
|  +--------------------------------------------------+   |                                               |
|                                                         |
|                                                         |
+---------------------------------------------------------+
```

## Features

* displays a list of public gists of a user
* on clicking the gist link , it opens the the gist in a new tab.
* three users who have recently forked the gist are displayed.
* on clicking the user name, it opens the forked gist .


## Potential improvements

* tests for components
* better error handling
* loading screens/loaders could be displayed while gists are being fetched.

