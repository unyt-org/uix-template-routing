import {SettingsView} from "common/components/SettingsView.tsx";
import {AccountView} from "common/components/AccountView.tsx";
import { Entrypoint } from "uix/html/entrypoints.ts";
import { renderBackend, renderStatic } from "uix/base/render-methods.ts";

export default {
	// Backend rendered index page
	'/': renderBackend(<div style={{display: "flex", "flex-direction": "column"}}>
		<h1>Overview</h1>
		<h2>Home</h2>
		<a href="/home/welcome">/home/welcome</a>
		<a href="/home/news">/home/news</a>

		<h2>Settings</h2>
		<a href="/settings/blue">/settings/blue</a>
		<a href="/settings/red">/settings/red</a>
		
		<h2>Account</h2>
		<a href="/account-from-backend/unyt">/account-from-backend/unyt</a>
		<a href="/account">/account</a>
		<a href="/account/profile">/account/profile</a>
		<a href="/account/settings">/account/settings</a>
		<a href="/account/advanced">/account/advanced</a>
		
		<h2>Error</h2>
		<a href="/404">/404</a>
		<a href="/account/404">/account/404</a>
	</div>),

	// Nested routes for /home/*
	'/home/*': {
		'/welcome': <div><h1>Welcome to this Page!</h1><p>Nullam tristique ut risus eget viverra. Aenean lacinia ultrices tempus. Pellentesque pellentesque.</p></div>,
		'/news': <div><h1>This is the news page</h1><p>Nullam tristique ut risus eget viverra. Aenean lacinia ultrices tempus. Pellentesque pellentesque.</p></div>
	},
	
	// Display settingsView with color depending on route (e.g. http://localhost/settings/green)
	'/settings/:color': (ctx, {color}) => <SettingsView color={color}/>,
	
	// Display static HTML (UIX library not loaded)
	'/about': renderStatic(<div><h1>About</h1><p>Nullam tristique ut risus eget viverra. Aenean lacinia ultrices tempus. Pellentesque pellentesque.</p></div>),
	
	// Display dynamic HTML (no SSR)
	'/help': <div><h1>Help</h1><p>Nullam tristique ut risus eget viverra. Aenean lacinia ultrices tempus. Pellentesque pellentesque.</p></div>,

	// Return account view (includes internal routing, e.g. http://localhost/account-from-backend/profile)
	'/account-from-backend*': <AccountView/>,

	// Let the /account pass to frontend routing
	'/account*': null,

	// wildcard (*) as fallback route - 
	'*': () => {
		throw new Error("This route does not exist");
	}

} satisfies Entrypoint;