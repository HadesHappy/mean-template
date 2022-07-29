import { Component, OnInit } from '@angular/core';
import { Tool } from '../../_interfaces/tool';

@Component({
  selector: 'app-toolmenu',
  templateUrl: './toolmenu.component.html',
  styleUrls: ['./toolmenu.component.css']
})
export class ToolmenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toolItems: Tool[] = [
    { displayName: 'Todo',
      iconName: 'done',
      route: '/todo',
      disabled: false
    },
    { displayName: 'QuickNote',
      iconName: 'directions_run',
      route: '/quicknotes',
      disabled: false
    },
    { displayName: 'test3',
      iconName: 'highlight_off',
      disabled: true
    },
    { displayName: 'test4',
      iconName: 'highlight_off',
      disabled: true
    }
  ]
}