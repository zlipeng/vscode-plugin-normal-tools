import {
  TreeDataProvider,
  TreeItem,
  // commands,
  TreeItemCollapsibleState,
  EventEmitter,
  Event,
  TreeView,
  window,
  Uri,
  ExtensionContext,
  Command,
} from 'vscode';

const timerCollapsedStateMap: {[key: string]: TreeItemCollapsibleState} = {};

class MyItem {
  id = '';

  label = '';

  description? = '';

  tooltip? = '';

  command?: Command;

  contextValue? = '';

  icon? = '';

  children?: MyItem[] = [];

  initialCollapsibleState?: TreeItemCollapsibleState = TreeItemCollapsibleState.Collapsed;
}

class MyTreeItem extends MyItem {
  constructor() {
    super();
  }
}

export class MyProvider implements TreeDataProvider<MyItem> {
  constructor() {

  }

  public getTreeItem(p: MyItem): MyTreeItem {
    return p;
  }

  public async getChildren(element?: MyItem): Promise<MyItem[]> {
    let timerItems: MyItem[] = [
      {
        label: "微博",
        id: 'weibo',
        description: 'weibo',
        command: {
          command: 'weibo-vscode.start',
          title: "weibo"
        }
      },
      {
        label: "新冠",
        id: 'covid',
        description: 'covid-19',
        command: {
          command: 'covid-vscode.start',
          title: 'covid'
        },
      }
    ];
    return timerItems;
  }
}
