import { getMsalInstance} from './PCAFactory'

export const acquireToken = async (scopes:any) => {
    const instance =getMsalInstance();
    console.log(instance)
    const activeAccount = instance.getActiveAccount(); // This will only return a non-null value if you have logic somewhere else that calls the setActiveAccount API
    const accounts = instance.getAllAccounts();
  
      if (!activeAccount && accounts.length === 0) {
          /*
          * User is not signed in. Throw error or wait for user to login.
          * Do not attempt to log a user in outside of the context of MsalProvider
          */   
      }
    
  
      const authResult = await instance.acquireTokenSilent(scopes);
  
      return authResult.accessToken
    
    
};