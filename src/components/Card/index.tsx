import { FC } from "react";

import cardStyles from "./styles/index.module.css";

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className="ds-u-display--flex ds-u-flex-direction--column ds-u-border--1 ds-u-radius ds-u-padding--2">
      <h2 className="ds-u-font-size--2xl ds-u-font-weight--bold ds-u-margin--0">
        {title}
      </h2>

      <div className={cardStyles.content_break}></div>

      {children}
    </div>
  );
};

export default Card;
