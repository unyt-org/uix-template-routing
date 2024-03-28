import { Component } from "uix/components/Component.ts";

@template(function() {
	return <>
		<h1>My Account</h1>
		<p id="subPage">...</p>
	</>
})
export class AccountView extends Component {
	@id subPage!: HTMLDivElement;

	protected tabs = {
		settings: <div class="settings">Settings</div>,
		profile:  <div class="profile">Profile</div>,
		advanced: <div class="advanced">Advanced</div>
	}

	// show different subpage depending on route
	override onRoute(identifier: 'settings'|'profile'|'advanced') {
		console.log("new route: " + identifier);
		if (this.tabs[identifier])
			this.subPage.replaceChildren(this.tabs[identifier])
	}

	// route returned from getRouteIdentifier must match the requested identifier in onRoute
	override getRouteIdentifier() {
		return this.subPage.className;
	}
}