export type FormsData = {
  submitter: boolean;
  fullName?: string;
  email: string;
  password: string;
  remembering: boolean;
};

export interface Props {
  changeWantLogin: React.Dispatch<React.SetStateAction<boolean>>;
  addFormData: React.Dispatch<React.SetStateAction<FormsData>>;
}
