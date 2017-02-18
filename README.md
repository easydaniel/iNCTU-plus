# RNTemplate

## This is a basic react-native template using redux

First, clone the project:

```bash
$ git clone https://github.com/easydaniel/RNTemplate.git <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works.

```bash
$ npm install
```

To start the application, use either ```react-native run-ios``` or ```react-native run-android``` depending on your development

## Application Structure
```
.
├── android                  # Android Studio project directory
├── ios                      # XCode project directory
├── app.json                 # React-Native application meta
├── package.json             # node modules dependicies
├── index.ios.js             # IOS application entry point
├── index.android.js         # Android application entry point
├── app                      # Express application that provides webpack middleware
│   ├── actions              # redux action definition
│   ├── api                  # custom application utilities
│   ├── components           # component for application
│   ├── reducers             # redux reducer definition
│   ├── stores               # redux store configuration
│   └── styles               # component style directory
└── __tests__                # Unit tests
```

### Examples
* [Tab, Navigation](https://github.com/easydaniel/RNTemplate/tree/simple-navigation)
* [Todo](https://github.com/easydaniel/RNTemplate/tree/todo-app)
* [Counter](https://github.com/easydaniel/RNTemplate/tree/counter-app)
