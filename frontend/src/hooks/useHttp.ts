import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const request = useCallback(
    async (url: string, method = 'GET', body: null | string | any = null, headers: any = {}) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, { method, body, headers }).then(response => {
          return response;
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Something is wrong..');
        }
        setLoading(true);
        return data;
      } catch (error) {
        setLoading(false);
        let errorMessage = 'Failed to request';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        setError(errorMessage);
        throw error;
      }
    },
    []
  );

  const clearError = () => setError('');

  return {
    loading,
    request,
    error,
    clearError,
  };
};
