import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:9001', // <-- Address of our Spring Authorization Server
  redirectUri: window.location.origin + '/login/callback', // <-- Where Auth Server sends us back
  clientId: 'eazypublicclient', // <-- Matches the ID we registered on the server
  responseType: 'code', // <-- We're using Authorization Code flow
  scope: 'openid email offline_access', // <-- Permissions we're asking for
  strictDiscoveryDocumentValidation: false, // Set to true for production!
  showDebugInformation: true,
  requireHttps: false, // Set to true for production!
  disableAtHashCheck: false,
  useSilentRefresh: false, // Can be true for smoother UX (advanced)
  disablePKCE: false // ✅ THIS IS KEY! PKCE IS ENABLED!
};