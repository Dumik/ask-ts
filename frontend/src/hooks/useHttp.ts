import { useState, useCallback } from 'react';

type BodyType = {
  email: string | null | undefined;
  password: string | null | undefined;
};

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const request = useCallback(
    async (url: string, method = 'GET', body: BodyType | null | string, headers: any = {}) => {
      console.log('%c jordan body', 'color: lime; font-weight: bold; font-size: 16px; text-transform: uppercase', body);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, { method, body, headers }).then(response => {
          return response;
        });
        const data = await response.json();
        console.log(
          '%c jordan data',
          'color: red; font-weight: bold; font-size: 16px; text-transform: uppercase',
          data
        );
        if (!response.ok) {
          throw new Error(data.message || 'Something is wrong..');
        }
        setLoading(true);
        return data;
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    },
    []
  );

  const clearError = () => setError(null);

  return {
    loading,
    request,
    error,
    clearError,
  };
};
