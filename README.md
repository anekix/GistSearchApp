# GistSearchApp 

## Stack
* Vuejs


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

## Potential improvements

* tests for components
* better error handling
* loading screens/loaders could be displayed while gists are being fetched.
