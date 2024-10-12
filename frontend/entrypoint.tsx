import "common/SettingsView.tsx";
import { AccountView } from "common/AccountView.tsx";
import { Entrypoint } from "uix/providers/entrypoints.ts";

export default {
	// return account view (contains internal routing, e.g. /account/profile)
	'/account*': <AccountView/>,
} satisfies Entrypoint;