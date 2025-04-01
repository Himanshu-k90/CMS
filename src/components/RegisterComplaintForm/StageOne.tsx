import { FC } from "react";

import FormControl from "../FormControl";

const StageOne: FC<ComplaintFormStageProps> = ({ onHandleFormStageChange }) => {
  return (
    <FormControl
      onSubmitCallback={onHandleFormStageChange}
      fields={[
        {
          type: "radio-button",
          choices: [
            {
              id: "transactions",
              name: "complaintType",
              value: "Transactions",
              label: "Transactions",
              defaultSelected: true,
              description:
                "Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment.",
            },
            {
              id: "codeSets",
              name: "complaintType",
              value: "Code Sets",
              label: "Code Sets",
              description:
                "Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, diagnoses, and drugs.",
            },
            {
              id: "uniqueIdentifiers",
              name: "complaintType",
              value: "Unique Identifiers",
              label: "Unique Identifiers",
              description:
                "Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).",
            },
            {
              id: "operatingRules",
              name: "complaintType",
              value: "Operating Rules",
              label: "Operating Rules",
              description:
                "Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).",
            },
          ],
        },
      ]}
    />
  );
};

export default StageOne;
