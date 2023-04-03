import { useErrorHandler } from 'react-error-boundary';

import { AxiosError } from 'axios';
import { SWRConfig } from 'swr';

type Props = {
  children: React.ReactNode;
};

export const SWRConfigComponent = (props: Props) => {
  const { children } = props;
  const errorHandler = useErrorHandler();

  return (
    <SWRConfig
      value={{
        onError(err) {
          if (err instanceof AxiosError) errorHandler(err);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
