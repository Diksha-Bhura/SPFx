import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IVaultProps {
  context: WebPartContext;
  //sp: any;
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}
