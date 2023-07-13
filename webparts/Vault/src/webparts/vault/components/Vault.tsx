import * as React from 'react';
//import styles from './Vault.module.scss';
import { IVaultProps } from './IVaultProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import { ICommandBarItemProps, CommandBar, IContextualMenuItem } from 'office-ui-fabric-react';

export default class Vault extends React.Component<IVaultProps, {}> {
  public render(): React.ReactElement<IVaultProps> {
    const _items: ICommandBarItemProps[] = [
      {
        key: 'newItem',
        text: 'New',
        cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
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
      <div>
        <CommandBar
        items={_items}
        ariaLabel="Inbox actions"
      />
      </div>
      
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
