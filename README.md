# Exogenesis

An experiment in react universal components

## Notes

React-native has some issues with yarn workspaces. It requires the `react-native` dependency to be in the `node_modules` directory at the root of the RN project. Yarn's workspace functionality hoists dependencies to the top level of the project. We implemented [this solution](https://github.com/react-community/create-react-native-app/issues/340#issuecomment-388588101) from @robdonn.
