import { Component } from "uix/components/Component.ts";
import { template } from "uix/html/template.ts";

@template(function () {
  return (
    <>
      <h1>My Account</h1>
      <p id="subPage">...</p>
    </>
  );
})
@standalone
export class AccountView extends Component {
  @id
  subPage!: HTMLDivElement;

  protected tabs = {
    settings: <div class="settings">Settings</div>,
    profile: <div class="profile">Profile</div>,
    advanced: <div class="advanced">Advanced</div>,
  };

  // show different subpage depending on route
  override onRoute(identifier: "settings" | "profile" | "advanced") {
    this.subPage.childNodes.forEach((e) => this.subPage.removeChild(e));
    if (this.tabs[identifier]) {
      this.subPage.append(this.tabs[identifier]);
    } else this.subPage.append("Not found!");
  }

  // route returned from getRouteIdentifier must match the requested identifier in onRoute
  override getRouteIdentifier() {
    return this.subPage.className;
  }
}
