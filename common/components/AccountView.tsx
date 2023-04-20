import { UIX } from "uix/uix.ts";

@Component
export default class AccountView extends UIX.ShadowDOMComponent<UIX.BaseComponent.Options> {

	protected tabs = {
		settings: <div class="settings">Settings</div>,
		profile:  <div class="profile">Profile</div>,
		advanced: <div class="advanced">Advanced</div>
	}

	@layout titleView = <h1>My Account</h1>
	@layout subPage = <p>...</p>

	// show different subpage depending on route
	override onRoute(identifier: 'settings'|'profile'|'advanced') {
		console.log("new route: " + identifier);
		if (this.tabs[identifier]) this.subPage = this.tabs[identifier];
	}

	// route returned from getRouteIdentifier must match the requested identifier in onRoute
	override getRouteIdentifier() {
		return this.subPage.className;
	}
}