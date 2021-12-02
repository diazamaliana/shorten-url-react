import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import API_BASE from './API';

const useShorten = () => {
  const [appError, setAppError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useLocalStorage('results');

  const getShortenUrl = async (url: string) => {
    setIsLoading(true);
    try {
      setAppError('');
      const { data } = await API_BASE.get('/shorten', {
        params: {
          url: url.trim(),
        },
      });
      setIsLoading(false);
      setResults((results: any) => [data, ...results]);
    } catch (e) {
      setIsLoading(false);
      setAppError(
        'Something went wrong. Check if URL is correct and try again.'
      );
    }
  };

  return { appError, isLoading, results, getShortenUrl, setResults };
};

export default useShorten;
