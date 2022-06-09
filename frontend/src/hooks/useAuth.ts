import { useCallback, useEffect, useState } from 'react';
import { useHttp } from './useHttp';
export const useAuth = () => {
  const [token, setToken] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [me, setMe] = useState<any | string | null>(null);
  const { request } = useHttp();

  const login = useCallback((jwtToken?: string, id?: string) => {
    setToken(jwtToken || '');
    setUserId(id || '');
    localStorage.setItem('token', JSON.stringify({ userId: jwtToken, token: id }));
  }, []);

  const logout = useCallback(() => {
    setToken('');
    setUserId('');
    localStorage.removeItem('token');
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('token') || '{}');
    if (!token && data && data.token) {
      login(data.token, data.userId);
    }
  }, [login, token]);

  const handlerLogin = async (userId: string | undefined | null) => {
    try {
      const data = await request(`/api/user/${userId}`, 'GET', null, {
        authorization: `Bearer ${token}`,
      });
      setMe(data);
      console.log('%c jordan USER', 'color: lime; font-weight: bold; font-size: 16px; text-transform: uppercase', data);
    } catch (e) {
      console.log('%c jordan ERROR', 'color: red; font-weight: bold; font-size: 16px; text-transform: uppercase', e);
    }
  };

  useEffect(() => {
    if (!!token) {
      handlerLogin(userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, userId]);

  return { logout, login, userId, token, me };
};
