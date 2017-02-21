# iNCTU+

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
