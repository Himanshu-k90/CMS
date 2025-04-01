import { FC, useState } from "react";

import { StepList } from "@cmsgov/design-system";

import Card from "@/components/Card";
import StageOne from "@/components/RegisterComplaintForm/StageOne";
import StageTwo from "@/components/RegisterComplaintForm/StageTwo";

const RegisterComplaintPage: FC = () => {
  const [steps, setSteps] = useState<
    {
      id: FormStage;
      heading: string;
      href: string;
      started: boolean;
      completed: boolean;
      component: () => JSX.Element;
    }[]
  >([
    {
      id: "step-1",
      heading: "Complaint Type",
      href: "#step-1",
      started: true,
      completed: false,
      component: () => (
        <StageOne
          onHandleFormStageChange={() => onHandleFormStageChange("step-1")}
        />
      ),
    },
    {
      id: "step-2",
      heading: "Complainant Details",
      href: "#step-2",
      started: false,
      completed: false,
      component: () => (
        <StageTwo
          onHandleFormStageChange={() => onHandleFormStageChange("step-2")}
        />
      ),
    },
    {
      id: "step-3",
      heading: "FAE Details",
      href: "#step-3",
      started: false,
      completed: false,
      component: () => <></>,
    },
    {
      id: "step-4",
      heading: "Complaint Details",
      href: "#step-4",
      started: false,
      completed: false,
      component: () => <></>,
    },
    {
      id: "step-5",
      heading: "Review Complaint",
      href: "#step-5",
      started: false,
      completed: false,
      component: () => <></>,
    },
    {
      id: "step-6",
      heading: "Submitted",
      href: "#step-6",
      started: false,
      completed: false,
      component: () => <></>,
    },
  ]);

  const onHandleFormStageChange = (currentStage: FormStage) => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) => {
        if (step.id === currentStage) {
          return { ...step, completed: true, component: () => <></> };
        }
        if (prevSteps[index - 1]?.id === currentStage) {
          return { ...step, started: true };
        }
        return step;
      })
    );
  };

  return (
    <div className="ds-u-margin-y--2">
      <Card title="Administrative Simplification Enforcement and Testing Tool (ASETT)">
        <StepList steps={steps} />
      </Card>
    </div>
  );
};

export default RegisterComplaintPage;
