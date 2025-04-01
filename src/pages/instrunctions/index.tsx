import { FC } from "react";

import { Link } from "react-router";
import { Button } from "@cmsgov/design-system";

import Card from "@/components/Card";

import { intrunctionsList, ROUTE_PATHS } from "@/constants";

const IntrunctionPage: FC = () => {
  return (
    <div className="ds-u-margin-y--2">
      <Card title="Administrative Simplification Enforcement and Testing Tool (ASETT)">
        <p className="ds-u-font-size--base">
          The following is the list of steps you will take in order to file a
          complaint regarding HIPAA Transactions and Code Sets, Unique
          Identifiers, and/or Operating Rules. If you wish to file a Health
          Insurance Privacy complaint, please visit the{" "}
          <Link
            to="/Office for Civil Rights
        (OCR)"
          >
            Office for Civil Rights (OCR)
          </Link>{" "}
          website.
        </p>

        <ul className="ds-u-display--flex ds-u-flex-direction--column ds-u-padding-left--0">
          {intrunctionsList.map((intrunction, i) => (
            <li
              key={intrunction}
              className="ds-u-display--flex ds-u-flex-direction--row ds-u-align-items--center"
            >
              <span
                className="ds-u-fill--black ds-u-color--white ds-u-display--flex ds-u-align-items--center ds-u-justify-content--center ds-u-radius--circle"
                style={{
                  width: "32px",
                  height: "32px",
                  minWidth: "32px",
                  minHeight: "32px",
                }}
              >
                {i + 1}
              </span>
              <p className="ds-u-font-size--base ds-u-margin--0 ds-u-margin-left--1">
                {intrunction}
              </p>
            </li>
          ))}
        </ul>

        <p className="ds-u-font-size--base">
          You can review all information entered before submitting your
          complaint to CMS. Once the complaint is submitted, CMS will review all
          information and respond to your complaint.
        </p>

        <p className="ds-u-font-size--base">
          Click the Complaint Type button below to begin filing your complaint.
        </p>

        <p className="ds-u-color--error ds-u-font-size--base">
          <strong>Disclaimer: </strong>
          If you file a complaint without registration, you will not be able to
          view your complaints,upload supporting documents, correspond
          electronically, or test transactions.
        </p>

        <div className="ds-u-display--flex ds-u-justify-content--between ds-u-margin-top--2">
          <Button>Cancel</Button>

          <Link
            to={ROUTE_PATHS.REGISTER_COMPLAINT}
            className="ds-u-color--white ds-u-text-decoration--none"
          >
            <Button
              type="button"
              className="ds-u-fill--background-inverse ds-u-color--white"
            >
              Complaint Type
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default IntrunctionPage;
