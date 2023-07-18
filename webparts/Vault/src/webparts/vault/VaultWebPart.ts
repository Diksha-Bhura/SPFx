import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import * as strings from 'VaultWebPartStrings';
import Vault from './components/Vault';
import { IVaultProps } from './components/IVaultProps';
//import { getSP } from './IVaultWebpartContext';
//import { SPFI } from '@pnp/sp';
import { Log } from '@microsoft/sp-core-library';
import { setup as pnpSetup } from "@pnp/common";

export interface IVaultWebPartProps {
  description: string;
}
const LOG_SOURCE: string = 'ItemHistoryCommandSet';
export default class VaultWebPart extends BaseClientSideWebPart<IVaultWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';
  //private sp: SPFI;

  public render(): void {
    const element: React.ReactElement<IVaultProps> = React.createElement(
      Vault,
      {
        context: this.context,
        //sp: this.sp,
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {

    Log.info(LOG_SOURCE, 'Initialized ItemHistoryCommandSet');
    pnpSetup({
      spfxContext: this.context
    });
    return Promise.resolve();
  }

  
  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
