import {   MsalProvider } from "@azure/msal-react"
import {ChildComponent} from "./ChildComponent";



const ParentComponent = ({children,loginScopes,msalInstance}:any) =>{    

    return (        
        <MsalProvider instance={msalInstance}>
            <ChildComponent loginScopes={loginScopes}>
                {children}
            </ChildComponent>
        </MsalProvider> 
        
      )
}
export default ParentComponent