import { Component, OnInit } from '@angular/core';
import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  public Editor = InlineEditor;
  constructor() {}

  ngOnInit() {}

  public onReady(editor) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
  }
}
