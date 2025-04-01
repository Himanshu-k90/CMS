import { FC } from "react";

import FormControl from "../FormControl";

const StageTwo: FC<ComplaintFormStageProps> = ({ onHandleFormStageChange }) => {
  return (
    <>
      <strong className="ds-u-font-size--base">
        Do you want to remain anonymous during this process?
        <span className="ds-u-font-size--base ds-u-color--error">*</span>
      </strong>

      <p>
        Disclaimer: If you select yes, CMS will not share your Information with
        the Filed Against Entity (FAE) during the investigation process.
        However, information provided in this complaint is subject to rules and
        policies under the Freedom of Information Act (FOIA).
      </p>

      <FormControl
        onSubmitCallback={onHandleFormStageChange}
        fields={[
          {
            type: "radio-button",
            required: true,
            choices: [
              {
                id: "submitYes",
                name: "anonymousSubmission",
                value: "Yes",
                label: "Yes",
                defaultSelected: true,
              },
              {
                id: "submitNo",
                name: "anonymousSubmission",
                value: "No",
                label: "No",
              },
            ],
          },
          {
            type: "text",
            required: true,
            id: "organizationName",
            name: "organizationName",
            label: "Complainant Organization Name",
          },
          {
            type: "select",
            required: true,
            id: "complainantOrganizationType",
            name: "complainantOrganizationType",
            label: "Complainant Organization Type",
            options: [
              {
                value: "Health Care Clearinghouse",
                text: "Health Care Clearinghouse",
              },
            ],
          },
          {
            type: "text",
            required: true,
            id: "complainantOrganizationOther",
            name: "complainantOrganizationOther",
            label: "Complainant Organization Type (Other)",
          },
          {
            type: "text",
            required: true,
            id: "complainantOrganizationRole",
            name: "complainantOrganizationRole",
            label: "Complainant Organization Role",
          },
          {
            type: "tel",
            required: true,
            id: "complainantOrganizationPhone",
            name: "complainantOrganizationPhone",
            label: "Complainant Organization Phone Number",
          },
          {
            required: true,
            type: "select",
            id: "complainantTitle",
            name: "complainantTitle",
            label: "Complainant Title",
            options: [
              {
                value: "mr",
                text: "Mr",
              },
              {
                value: "ms",
                text: "Ms",
              },
            ],
          },
          {
            type: "text",
            required: true,
            id: "complainantFirstName",
            name: "complainantFirstName",
            label: "Complainant First Name",
          },
          {
            required: true,
            type: "text",
            id: "complainantMI",
            name: "complainantMI",
            label: "Complainant MI",
          },
          {
            required: true,
            type: "text",
            id: "complainantLastName",
            name: "complainantLastName",
            label: "Complainant Last Name",
          },
          {
            required: true,
            type: "text",
            id: "complainantAddressLine1",
            name: "complainantAddressLine1",
            label: "Complainant Address Line 1",
          },
          {
            required: true,
            type: "text",
            id: "complainantAddressLine2",
            name: "complainantAddressLine2",
            label: "Complainant Address Line 2",
          },
          {
            required: true,
            type: "text",
            id: "complainantCityTown",
            name: "complainantCityTown",
            label: "Complainant City/Town",
          },
          {
            required: true,
            type: "select",
            id: "complainantStateTerritory",
            name: "complainantStateTerritory",
            label: "Complainant State/Territory",
            options: [
              {
                value: "alaska",
                text: "Alaska",
              },
            ],
          },
          {
            required: true,
            type: "email",
            id: "complainantEmailAddress",
            name: "complainantEmailAddress",
            label: "Complainant Email Address",
          },
          {
            required: true,
            type: "tel",
            id: "complainantCellPhoneNumber",
            name: "complainantCellPhoneNumber",
            label: "Complainant Cell Phone Number",
          },
        ]}
      />
    </>
  );
};

export default StageTwo;
