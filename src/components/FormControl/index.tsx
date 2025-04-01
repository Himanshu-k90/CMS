import { FC, FormEvent, useCallback, Children } from "react";

import { Button } from "@cmsgov/design-system";
import { GrLinkNext } from "react-icons/gr";

import ChoicesList from "../ChoicesList";

const FormControl: FC<FormControlProps> = ({ fields, onSubmitCallback }) => {
  const onFormSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget as HTMLFormElement);

    const formData = {} as { [key: string]: string };

    [...form.keys()].forEach((key) => {
      formData[key as keyof typeof formData] = form.get(key) as string;
    });

    console.log({
      formData,
    }); /* This object can now be consumbed to do multiple things
     such as validation or pushing to form
    */

    onSubmitCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={onFormSubmit}>
      {Children.toArray(
        fields.map((field) => {
          switch (field.type) {
            case "text":
              return (
                <div className="ds-u-display--flex ds-u-flex-direction--column">
                  <label htmlFor={field.id} className="ds-u-font-size--base">
                    {field.label}{" "}
                    {field.required ? (
                      <span className="ds-u-font-size--base ds-u-color--error">
                        *
                      </span>
                    ) : (
                      <></>
                    )}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    id={field.id}
                    required={field.required || false}
                    className="input-field-height ds-u-radius ds-u-margin-top--1"
                  />
                </div>
              );

            case "radio-button":
              return (
                <ChoicesList
                  choices={field.choices}
                  required={field.required || false}
                />
              );

            case "select":
              return (
                <div className="ds-u-display--flex ds-u-flex-direction--column">
                  <label htmlFor={field.id} className="ds-u-font-size--base">
                    {field.label}

                    {field.required ? (
                      <span className="ds-u-font-size--base ds-u-color--error">
                        *
                      </span>
                    ) : (
                      <></>
                    )}
                  </label>
                  <select
                    name={field.name}
                    id={field.id}
                    required={field.required || false}
                    className="input-field-height ds-u-radius ds-u-margin-top--1"
                  >
                    <option value="">--None--</option>
                    {Children.toArray(
                      field.options.map((li) => (
                        <option value={li.value}>{li.text}</option>
                      ))
                    )}
                  </select>
                </div>
              );

            case "tel":
              return (
                <div className="ds-u-display--flex ds-u-flex-direction--column">
                  <label htmlFor={field.id} className="ds-u-font-size--base">
                    {field.label}

                    {field.required ? (
                      <span className="ds-u-font-size--base ds-u-color--error">
                        *
                      </span>
                    ) : (
                      <></>
                    )}
                  </label>
                  <input
                    type="tel"
                    name={field.name}
                    id={field.id}
                    pattern="^\d{10}$"
                    required={field.required || false}
                    className="input-field-height ds-u-radius ds-u-margin-top--1"
                  />
                </div>
              );

            case "email":
              return (
                <div className="ds-u-display--flex ds-u-flex-direction--column">
                  <label htmlFor={field.id} className="ds-u-font-size--base">
                    {field.label}

                    {field.required ? (
                      <span className="ds-u-font-size--base ds-u-color--error">
                        *
                      </span>
                    ) : (
                      <></>
                    )}
                  </label>
                  <input
                    type="email"
                    name={field.name}
                    id={field.id}
                    required={field.required || false}
                    className="input-field-height ds-u-radius ds-u-margin-top--1"
                  />
                </div>
              );

            default:
              return <></>;
          }
        })
      )}

      <Button
        type="submit"
        className="ds-u-margin-top--4"
        style={{ width: "fit-content" }}
      >
        Save & Proceed to Next Step <GrLinkNext fontSize={16} />
      </Button>
    </form>
  );
};

export default FormControl;
