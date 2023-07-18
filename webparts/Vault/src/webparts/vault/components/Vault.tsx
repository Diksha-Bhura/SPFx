import * as React from 'react';
//import styles from './Vault.module.scss';
import { IVaultProps } from './IVaultProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import { ICommandBarItemProps, CommandBar, IContextualMenuItem } from 'office-ui-fabric-react';
import { SPHelpers } from '../../../helpers/SPHelper';

export default class Vault extends React.Component<IVaultProps, {}> {
  componentDidMount(): void {
    try
    {
      SPHelpers.GetVault( this.props.context).then((data) => {
        console.log(data);
      });
      
    }
    catch(error)
    {
      console.log("Error while getting list data.");
    }
  }
  
  public render(): React.ReactElement<IVaultProps> {
    const _items: ICommandBarItemProps[] = [
      {
        key: 'newItem',
        text: 'New',
        cacheKey: 'myCacheKey',
        iconProps: { iconName: 'Add' },
        subMenuProps: {
          items: [
            {
              key: 'folder',
              text: 'Folder',
              iconProps: { iconName: 'Folder' },
              onClick: this.onSelectedCaptured.bind(this)
            },
            {
              key: 'record',
              text: 'Record',
              iconProps: { iconName: 'Record' },
              onClick: this.onSelectedCaptured.bind(this)
            },
          ],
        },
      }]

    return (
      <>
        <CommandBar
        items={_items}
        ariaLabel="Inbox actions"
      />
      </>
      
    );
  }

  private onSelectedCaptured(ev?: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> , item?: IContextualMenuItem):void {
    console.log(item);
    console.log("test");
    if(item.key == "record")
    {

    }
    else
    {

    }
  }
}
