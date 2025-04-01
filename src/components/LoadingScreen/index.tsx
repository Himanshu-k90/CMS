import { FC } from "react";

import { Spinner } from "@cmsgov/design-system";

const LoadingScreen: FC = () => {
  return (
    <div className="ds-u-display--flex ds-u-justify-content--center ds-u-align-items--center h-dvh">
      <Spinner size="big" />
    </div>
  );
};

export default LoadingScreen;
