import { FC } from "react";

import Header from "../Header";

import containerStyles from "./styles/index.module.css";

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className={`ds-u-padding-x--3 ds-u-overflow--hidden ds-u-margin-x--auto ${containerStyles.container_max_width}`}
    >
      <Header />
      {children}
    </div>
  );
};

export default Container;
