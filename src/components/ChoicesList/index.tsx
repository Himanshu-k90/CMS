import { FC, Children } from "react";

const ChoicesList: FC<ChoicesListProps> = ({ required, choices }) => {
  return (
    <div className="ds-u-display--flex ds-u-flex-direction--column">
      {Children.toArray(
        choices.map((choice) => (
          <label
            htmlFor={choice.id}
            className="ds-u-margin-top--0 ds-u-display--flex ds-u-align-items--start ds-u-margin-top--2"
          >
            <input
              type="radio"
              value={choice.value}
              name={choice.name}
              id={choice.id}
              className="ds-u-display--block"
              defaultChecked={choice.defaultSelected || false}
              required={required || false}
            />
            <div className="ds-u-display--flex ds-u-flex-direction--column ds-u-margin-left--1">
              <strong className="ds-u-font-size--base">{choice.label} </strong>
              {choice.description && (
                <p className="ds-u-font-size--base">{choice.description}</p>
              )}
            </div>
          </label>
        ))
      )}
    </div>
  );
};

export default ChoicesList;
