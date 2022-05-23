export const msalConfig = {
    auth: {
      clientId: "5172c4c7-d764-43f4-95ae-7dc773bd1fbb",
      authority: "https://login.microsoftonline.com/f5ed7255-38c4-4862-966f-ad4a32cc989d", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "https://newstocktracker.netlify.app/admin/config",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/User.Read"
  };

  export const logoutRequest = {
    scopes: ["User.Read"]
  }
