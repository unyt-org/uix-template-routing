import "common/components/SettingsView.tsx";
import {AccountView} from "common/components/AccountView.tsx";
import { Entrypoint } from "uix/html/entrypoints.ts";

export default {
	// return account view (contains internal routing, e.g. http://localhost/account/profile)
	'/account*': <AccountView/>,
} satisfies Entrypoint;