# BCoder-react-auth - MSAL React Authentication Utility


BCoder-react-auth is a lightweight utility that simplifies authentication and token management in your React application using MSAL (Microsoft Authentication Library) for authentication with Azure AD.


## Features


- Seamless integration with MSAL React for secure authentication.

- Simplified API for acquiring access tokens and managing user sessions.

- Encapsulates authentication flows, token storage, and renewal.

- Easily configure authentication settings for your application.


## Installation


You can install BCoder-react-auth using npm or yarn:


```bash

npm install BCoder-react-auth

# or

yarn add BCoder-react-auth

```


## Getting Started


1. **Configuration**: Set up your MSAL configuration by providing the required settings and scopes in your app.


```javascript

const msalConfig = {

  auth: {

    clientId: 'your-client-id',

    authority: 'https://login.microsoftonline.com/your-tenant-id',

  },

  // Other MSAL configuration options

};

```

1. **Create MSALInstance**: in your index.tsx file setup the code as follow
    
```javascript


import {AuthProvider, msalPublicClientApplicationFactory} from 'BCoder-react-auth'


const msalInstance =  new msalPublicClientApplicationFactory(msalConfig);


 root.render(
  <React.StrictMode> 
    <AuthProvider msalInstance={msalInstance} loginScopes={loginRequest.scopes}>
          <App /> 
    </AuthProvider>
  </React.StrictMode>
);

```
3. **Authentication Utility**: Utilize the `acquireToken` function for get the access token to call api.


```javascript

import { acquireToken } from 'BCoder-react-auth';

const token=await acquireToken(loginRequest.scopes)   


```


3. **Acquire Access Tokens**: Use the `getAccessToken` function to acquire tokens for your API calls.


```javascript

import { acquireToken } from 'BCoder-react-auth';

const callApi = async () => {

  try {

    const token = await acquireToken(loginRequest.scopes);

    // Make API requests with the acquired token. passing the token in Authorize header

  } catch (error) {

    console.error('Failed to acquire access token:', error);

  }

};

```


4. **Enjoy Secure Authentication**: BCoder-react-auth handles token management, renewal, and session management seamlessly.


## Contributing


Contributions and feedback are welcome! If you encounter issues, have suggestions, or want to contribute, please open an issue or submit a pull request on our GitHub repository.


## License


This project is licensed under the [MIT License](LICENSE).


## Acknowledgments


- Built with MSAL React for secure authentication.

- Inspired by the need for a simplified authentication utility.


---
