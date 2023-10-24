
import {Configuration, IPublicClientApplication, PublicClientApplication} from "@azure/msal-browser";

const storageKey = 'msalInstancebhuvan';


let msalInstance:IPublicClientApplication  ;


function saveMsalInstance() {

  sessionStorage.setItem(storageKey, JSON.stringify(msalInstance));

}


function loadMsalInstance() {

  const instanceData = sessionStorage.getItem(storageKey);

  if (instanceData) {

    msalInstance = new PublicClientApplication(JSON.parse(instanceData));

  }

}


export function msalPublicClientApplicationFactory(config:Configuration) {

  if (!msalInstance) {

    msalInstance = new PublicClientApplication(config);

    saveMsalInstance();

  }
  return msalInstance;

}


export function getMsalInstance() {

  if (!msalInstance) {

    loadMsalInstance();

  }

  return msalInstance;

}
// export const msalPublicClientApplicationFactory = (config:IConfig) => {
//   config.

// }


// const msalConfig = {
//     auth: {
//         clientId: 'your_client_id',
//         authority: "https://tenant.b2clogin.com/tenant.onmicrosoft.com/b2c_1_susi",
//         knownAuthorities: ["tenant.b2clogin.com"],
//     }
// };

// const scopes = [
//     'your_client_id'
// ]

// const loginRequest: RedirectRequest = {
//     scopes: scopes
// }

//  msalInstance = new msal.PublicClientApplication(msalConfig);

// export {msalInstance, loginRequest, scopes}