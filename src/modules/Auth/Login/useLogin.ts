import { useCallback, useEffect, useState } from 'react';

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  const handleSubmit = useCallback((values: FormData) => {
    // console.log('>> values', values);
    setLoading(!!values);
  }, []);

  return {
    loading,
    handleSubmit,
  };
};
export default useLogin;
