interface ContainerProps {
  children: React.ReactNode;
}

interface CardProps {
  title: string;
  children: React.ReactNode;
}

interface IChoicesType {
  name: string;
  id: string;
  label: string;
  description?: string;
  value: string;
  defaultSelected?: boolean;
}

interface ChoicesListProps {
  required?: boolean;
  choices: IChoicesType[];
}

interface ComplaintFormStageProps {
  onHandleFormStageChange: () => void;
}

type FormStage =
  | "step-1"
  | "step-2"
  | "step-3"
  | "step-4"
  | "step-5"
  | "step-6";

interface FormControlProps {
  fields: (
    | {
        type: "text";
        id: string;
        label: string;
        name: string;
        required?: boolean;
      }
    | { type: "radio-button"; choices: IChoicesType[]; required?: boolean }
    | {
        type: "select";
        id: string;
        label: string;
        name: string;
        options: { value: string; text: string }[];
        required?: boolean;
      }
    | {
        type: "tel";
        id: string;
        label: string;
        name: string;
        required?: boolean;
      }
    | {
        type: "email";
        id: string;
        label: string;
        name: string;
        required?: boolean;
      }
    | {
        type: "radio-button-simple";
        label: string;
        name: string;
        choices: { id: string; value: string };
        required?: boolean;
      }
  )[];
  onSubmitCallback: () => void;
}
