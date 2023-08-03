import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { clientId, authority, scope } from './Config';

function SignIn() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const handleLogin = () => {
    const authEndpoint = `https://login.microsoftonline.com/${authority}/oauth2/v2.0/authorize`;
    const redirectUri = window.location.origin + '/redirect';
    const responseType = 'code';

    const url = `${authEndpoint}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope.join(' ')}`;

    window.location.replace(url);
  };

  const getTokenFromCode = async (code) => {
    const tokenEndpoint = `https://login.microsoftonline.com/${authority}/oauth2/v2.0/token`;

    const formData = new URLSearchParams();
    formData.append('grant_type', 'authorization_code');
    formData.append('client_id', clientId);
    formData.append('scope', scope.join(' '));
    formData.append('code', code);
    formData.append('redirect_uri', window.location.origin + '/redirect');

    try {
      const response = await axios.post(tokenEndpoint, formData);
      const { access_token } = response.data;
      setAccessToken(access_token);
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  const fetchUserData = async () => {
    const api = 'https://graph.microsoft.com/v1.0/me';

    try {
      const response = await axios.get(api, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      getTokenFromCode(code);
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      fetchUserData();
    }
  }, [accessToken]);

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.displayName}</h2>
        </>
      ) : (
        <button onClick={handleLogin}>SignIN</button>
      )}
    </div>
  );
}

export default SignIn;
