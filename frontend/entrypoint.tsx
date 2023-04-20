import { UIX } from "uix/uix.ts";
import "../common/components/SettingsView.tsx";
import AccountView from "../common/components/AccountView.tsx";

export default {

	// return account view (contains internal routing, e.g. http://localhost/account/profile)
	'/account*': new AccountView(),

} satisfies UIX.Entrypoint;