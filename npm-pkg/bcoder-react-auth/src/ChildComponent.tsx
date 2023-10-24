import {  InteractionType } from "@azure/msal-browser";
import {  MsalAuthenticationTemplate,AuthenticatedTemplate,UnauthenticatedTemplate } from "@azure/msal-react"



const ChildComponent = ({children,loginScopes}:any) =>{    
    const authRequest = {
        scopes: [...loginScopes]
    };
    function ErrorComponent({error}:any) {
        return <p>An Error Occurred: {error}</p>;
    }
    
    function LoadingComponent() {
        return <p>Authentication in progress...</p>;
    }

    return (
        // authenticationRequest, errorComponent and loadingComponent props are optional
        <MsalAuthenticationTemplate 
            interactionType={InteractionType.Redirect} 
            authenticationRequest={authRequest} 
            errorComponent={ErrorComponent} 
            loadingComponent={LoadingComponent}
        > 
            {children}
        </MsalAuthenticationTemplate>
      )
}
export  {ChildComponent ,AuthenticatedTemplate,UnauthenticatedTemplate }