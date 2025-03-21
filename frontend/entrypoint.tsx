import "common/SettingsView.tsx";
import { AccountView } from "common/AccountView.tsx";
import { Entrypoint } from "uix/providers/entrypoints.ts";

export default {
  // return account overview page
  "/account": (
    <div style={{ display: "flex", "flex-direction": "column" }}>
      <h1>Account Overview</h1>
      <a href="/account/profile">/account/profile</a>
      <a href="/account/settings">/account/settings</a>
      <a href="/account/advanced">/account/advanced</a>
    </div>
  ),

  // return account view (contains internal routing, e.g. /account/profile)
  "/account/*": <AccountView />,
} satisfies Entrypoint;
