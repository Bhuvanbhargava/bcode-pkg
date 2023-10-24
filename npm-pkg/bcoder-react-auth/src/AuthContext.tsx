import { createContext, useContext, useEffect } from "react";
import ParentComponent from "./ParentComponent";
import {
  AuthenticationResult,
  EventMessage,
  EventType,
} from "@azure/msal-browser";

const AuthContext = createContext({});
export function AuthProvider({ children, msalInstance, loginScopes }: any) {
  // useEffect(() => {
  //   const login = async () => {
  //     try {
  //       await msalInstance
  //         .handleRedirectPromise()
  //         .then((tokenResponse:any) => {
  //           console.log("in the then")
  //           if (!tokenResponse) {
  //             console.log("in the if")
  //             const accounts = msalInstance.getAllAccounts();
  //             if (accounts.length === 0) {
  //               // No user signed in
  //               console.log("in the login")
  //                msalInstance.loginRedirect(loginScopes);

  //             }
  //           } else {
  //             // Do something with the tokenResponse
  //           }
  //         })
  //         .catch((err:any) => {
  //           // Handle error
  //           console.error(err);
  //         });
  //     } catch (error) {
  //       console.error("Error signing in:", error);
  //     }
  //   };

  //   login(); // Automatically call login if no user is signed in
  // }, [loginScopes, msalInstance]);
  
  useEffect(()=>{
    const callbackId= msalInstance.addEventCallback((event: EventMessage) => {
      if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        const payload = event.payload as AuthenticationResult;
        const account = payload.account;
        msalInstance.setActiveAccount(account);
      }
    });
    return () => {
      // This will be run on component unmount
      if (callbackId) {
        msalInstance.removeEventCallback(callbackId);
      }
  }
  },[])
    // // Account selection logic is app dependent. Adjust as needed for different use cases.
    // const accounts = msalInstance.getAllAccounts();
    // if (accounts.length > 0) {
    //   msalInstance.setActiveAccount(accounts[0]);
    // }

    // msalInstance.addEventCallback((event: EventMessage) => {
    //   if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    //     const payload = event.payload as AuthenticationResult;
    //     const account = payload.account;
    //     msalInstance.setActiveAccount(account);
    //   }
    // });

    return (
      <AuthContext.Provider value={{}}>
        <ParentComponent msalInstance={msalInstance} loginScopes={loginScopes}>
          {children}
        </ParentComponent>
      </AuthContext.Provider>
    );

}

export function useAuth() {
  return useContext(AuthContext);
}
