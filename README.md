# React component running in a LWC (not using Lightning Container)

This is an example of a React app that has been bundled with webpack and imported into a LWC as a library.
React is running inside the LWC rather than running in an iframe in an aura component

## Building and deploying the app


```sfdx force:auth:web:login --setdefaultdevhubusername --setalias my-hub-org
sfdx force:org:create -f ./config/project-scratch-def.json -a webcomponent7test
sfdx force:config:set defaultusername=webcomponent7test
npm install
npm run deploy
sfdx force:org:open
```
The component will be running in a tab called 'test'

