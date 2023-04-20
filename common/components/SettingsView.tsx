import { UIX } from "uix/uix.ts";

@Component
export default class SettingsView extends UIX.BaseComponent<UIX.BaseComponent.Options & {color?:string}> {
	@layout button1 = <button style={{background:this.options?.color??'white'}} onclick={()=>this.handleSettings()}>Apply settings</button>

	handleSettings() {
		console.log("handling settings...")
	}
}