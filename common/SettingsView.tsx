import { template } from "uix/html/template.ts";
import { Component } from "uix/components/Component.ts";

@template(function () {
  return (
    <button
      type="button"
      style={{ background: this.properties?.color ?? "white" }}
      onclick:frontend={() => this.handleSettings()}
    >
      Apply settings
    </button>
  );
})
@standalone
export class SettingsView extends Component<{ color?: string }> {
  handleSettings() {
    console.log("handling settings...");
  }
}
