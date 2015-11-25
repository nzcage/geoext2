Ext.data.JsonP.GeoExt_slider_MapPanelItem({"tagname":"class","name":"GeoExt.slider.MapPanelItem","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"MapPanelItem.js","href":"MapPanelItem.html#GeoExt-slider-MapPanelItem"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.slider.Single","mixins":[],"requires":["GeoExt.Version"],"uses":[],"members":[{"name":"thumbHeight","tagname":"cfg","owner":"GeoExt.slider.MapPanelItem","id":"cfg-thumbHeight","meta":{}},{"name":"thumbWidth","tagname":"cfg","owner":"GeoExt.slider.MapPanelItem","id":"cfg-thumbWidth","meta":{}},{"name":"resizingDelayMS","tagname":"property","owner":"GeoExt.slider.MapPanelItem","id":"property-resizingDelayMS","meta":{"protected":true}},{"name":"addToMapPanel","tagname":"method","owner":"GeoExt.slider.MapPanelItem","id":"method-addToMapPanel","meta":{"protected":true}},{"name":"removeFromMapPanel","tagname":"method","owner":"GeoExt.slider.MapPanelItem","id":"method-removeFromMapPanel","meta":{"protected":true}},{"name":"stopMouseEvents","tagname":"method","owner":"GeoExt.slider.MapPanelItem","id":"method-stopMouseEvents","meta":{"private":true}},{"name":"unbindMap","tagname":"method","owner":"GeoExt.slider.MapPanelItem","id":"method-unbindMap","meta":{"protected":true}}],"code_type":"ext_define","id":"class-GeoExt.slider.MapPanelItem","short_doc":"A base class for sliders that can be rendered as items of a GeoExt.panel.Map. ...","component":false,"superclasses":["Ext.slider.Single"],"subclasses":["GeoExt.slider.LayerOpacity","GeoExt.slider.Zoom"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.slider.Single<div class='subclass '><strong>GeoExt.slider.MapPanelItem</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.Version' rel='GeoExt.Version' class='docClass'>GeoExt.Version</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/GeoExt.slider.LayerOpacity' rel='GeoExt.slider.LayerOpacity' class='docClass'>GeoExt.slider.LayerOpacity</a></div><div class='dependency'><a href='#!/api/GeoExt.slider.Zoom' rel='GeoExt.slider.Zoom' class='docClass'>GeoExt.slider.Zoom</a></div><h4>Files</h4><div class='dependency'><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem' target='_blank'>MapPanelItem.js</a></div></pre><div class='doc-contents'><p>A base class for sliders that can be rendered as items of a <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a>.</p>\n\n<p>Usually you will not create instances of this class but rather of the\nsubclasses <a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.slider.LayerOpacity</a> and <a href=\"#!/api/GeoExt.slider.Zoom\" rel=\"GeoExt.slider.Zoom\" class=\"docClass\">GeoExt.slider.Zoom</a>.</p>\n\n<p>This class mostly provides subclasses with the method <a href=\"#!/api/GeoExt.slider.MapPanelItem-method-addToMapPanel\" rel=\"GeoExt.slider.MapPanelItem-method-addToMapPanel\" class=\"docClass\">addToMapPanel</a> and\nthe method <a href=\"#!/api/GeoExt.slider.MapPanelItem-method-removeFromMapPanel\" rel=\"GeoExt.slider.MapPanelItem-method-removeFromMapPanel\" class=\"docClass\">removeFromMapPanel</a>, which take care of the dimensions of the\nsliders DOM-elements and register/unregister appropriate eventlisteners.</p>\n\n<p>Subclasses may implement <a href=\"#!/api/GeoExt.slider.MapPanelItem-method-unbindMap\" rel=\"GeoExt.slider.MapPanelItem-method-unbindMap\" class=\"docClass\">unbindMap</a>, which will be called when a slider is\nbeing removed from the map panel.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-thumbHeight' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.MapPanelItem'>GeoExt.slider.MapPanelItem</span><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-cfg-thumbHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-cfg-thumbHeight' class='name expandable'>thumbHeight</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The height in pixels of the slider thumb. ...</div><div class='long'><p>The height in pixels of the slider thumb. Will be used when we need to\nmanually resize ourself in case we are added to a mappanel. This will\nbe the height of the element containing the thumb when we are rendered\nhorizontally (see #vertical).</p>\n\n<p>This value shouldn't usually be adjusted, when the default stylesheet of\nExtJS is used.</p>\n<p>Defaults to: <code>14</code></p></div></div></div><div id='cfg-thumbWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.MapPanelItem'>GeoExt.slider.MapPanelItem</span><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-cfg-thumbWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-cfg-thumbWidth' class='name expandable'>thumbWidth</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The width in pixels of the slider thumb. ...</div><div class='long'><p>The width in pixels of the slider thumb. Will be used when we need to\nmanually resize ourself in case we are added to a mappanel. This will\nbe the width of the element containing the thumb when we are rendered\nvertically (see #vertical).</p>\n\n<p>This value shouldn't usually be adjusted, when the default stylesheet of\nExtJS is used.</p>\n<p>Defaults to: <code>15</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-resizingDelayMS' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.MapPanelItem'>GeoExt.slider.MapPanelItem</span><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-property-resizingDelayMS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-property-resizingDelayMS' class='name expandable'>resizingDelayMS</a> : Number<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>The number of milliseconds to wait (after rendering the slider) before\nresizing of the slider happens in case this sl...</div><div class='long'><p>The number of milliseconds to wait (after rendering the slider) before\nresizing of the slider happens in case this slider is rendered as child\nof a <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a>.</p>\n\n<p>This defaults to 200 milliseconds, which is not really noticeable, and\nalso rather conservative big.</p>\n<p>Defaults to: <code>200</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addToMapPanel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.MapPanelItem'>GeoExt.slider.MapPanelItem</span><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-method-addToMapPanel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-method-addToMapPanel' class='name expandable'>addToMapPanel</a>( <span class='pre'>panel</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Called by a MapPanel if this component is one of the items in the panel. ...</div><div class='long'><p>Called by a MapPanel if this component is one of the items in the panel.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>panel</span> : <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeFromMapPanel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.MapPanelItem'>GeoExt.slider.MapPanelItem</span><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-method-removeFromMapPanel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-method-removeFromMapPanel' class='name expandable'>removeFromMapPanel</a>( <span class='pre'>panel</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Called by a MapPanel if this component is one of the items in the panel. ...</div><div class='long'><p>Called by a MapPanel if this component is one of the items in the panel.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>panel</span> : <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stopMouseEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.MapPanelItem'>GeoExt.slider.MapPanelItem</span><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-method-stopMouseEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-method-stopMouseEvents' class='name expandable'>stopMouseEvents</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Stops the event from propagating. ...</div><div class='long'><p>Stops the event from propagating.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-unbindMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.MapPanelItem'>GeoExt.slider.MapPanelItem</span><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-method-unbindMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-method-unbindMap' class='name expandable'>unbindMap</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Will be called when the slider is being removed from the mappanel. ...</div><div class='long'><p>Will be called when the slider is being removed from the mappanel.\nSubclasses may implement custom event unlistening logic in this method.</p>\n</div></div></div></div></div></div></div>","meta":{}});