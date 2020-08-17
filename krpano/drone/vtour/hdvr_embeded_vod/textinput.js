/*
	krpano - super simple html5 text input plugin
*/

var krpanoplugin = function()
{
	var local = this;

	var krpano = null;
	var plugin = null;
	
	var inputelement = null;

	local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
	{
		krpano = krpanointerface;
		plugin = pluginobject;

		inputelement = document.createElement("input");
		inputelement.type = "text";
		inputelement.style = "width:100%; height:100%; text-align:center;";
		
		plugin.registerattribute("text", "", text_set, text_get);
		plugin.registerattribute("onchanged", null);
		
		inputelement.addEventListener("change", text_changed, true);
		inputelement.addEventListener("focus", text_clear, true);

		plugin.sprite.appendChild(inputelement);
	}

	local.unloadplugin = function()
	{
		plugin = null;
		krpano = null;
	}
	
	function text_set(newtext)
	{
		inputelement.value = newtext;
	}
	
	function text_get()
	{
		return inputelement.value;
	}
	
	function text_changed()
	{
		krpano.call(plugin.onchanged, plugin);
	}

	function text_clear()
	{
		this.value = '';
	}
};
