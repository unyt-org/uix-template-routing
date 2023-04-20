import { UIX } from "uix/uix.ts";
import SettingsView from "../common/components/SettingsView.tsx";
import AccountView from "../common/components/AccountView.tsx";

export default {

	// display some pages on /home/*
	'/home/*': {
		'/welcome': <div><h1>Welcome to this Page!</h1><p>Nullam tristique ut risus eget viverra. Aenean lacinia ultrices tempus. Pellentesque pellentesque.</p></div>,
		'/news': <div><h1>This is the news page</h1><p>Nullam tristique ut risus eget viverra. Aenean lacinia ultrices tempus. Pellentesque pellentesque.</p></div>
	},
	
	// display settingsView with color depending on route (e.g. http://localhost/settings/green)
	'/settings/:color': ctx => <SettingsView color={ctx.match?.pathname.groups['color']}/>,
	
	// display static HTML (UIX library not loaded)
	'/about': UIX.renderStatic(<div><h1>About</h1><p>Nullam tristique ut risus eget viverra. Aenean lacinia ultrices tempus. Pellentesque pellentesque.</p></div>),
	
	// display dynamic HTML (no SSR)
	'/help': UIX.renderDynamic(<div><h1>Help</h1><p>Nullam tristique ut risus eget viverra. Aenean lacinia ultrices tempus. Pellentesque pellentesque.</p></div>),

	// return account view (includes internal routing, e.g. http://localhost/account-from-backend/profile)
	'/account-from-backend*': UIX.renderStatic(new AccountView()),

	// wildcard (*) as fallback route - display loading preview
	// further route resolution happens on the frontend entrypoint
	'*': UIX.renderPreview(<div>Loading...</div>),

} satisfies UIX.Entrypoint;