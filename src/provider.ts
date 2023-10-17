import {
  Command,
  ExtensionContext,
  TreeDataProvider,
  // commands,
  TreeItemCollapsibleState,
  Uri
} from 'vscode';

const timerCollapsedStateMap: {[key: string]: TreeItemCollapsibleState} = {};

class MyItem {
  id = '';

  label = '';

  description? = '';

  tooltip? = '';

  command?: Command;

  contextValue? = '';

  iconPath?: any;

  children?: MyItem[] = [];

  initialCollapsibleState?: TreeItemCollapsibleState = TreeItemCollapsibleState.Collapsed;
}

class MyTreeItem extends MyItem {
  constructor() {
    super();
  }
}

export class MyProvider implements TreeDataProvider<MyItem> {
  private readonly extensionContext: ExtensionContext;

  constructor(context: ExtensionContext) {
    this.extensionContext = context;
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
        },
        iconPath: Uri.file(this.extensionContext.asAbsolutePath('public/wb.png')),
      },
      {
        label: "掘金",
        id: 'juejin',
        description: 'juejin',
        command: {
          command: 'juejin-vscode.start',
          title: 'juejin'
        },
      },
    ];
    return timerItems;
  }
}
