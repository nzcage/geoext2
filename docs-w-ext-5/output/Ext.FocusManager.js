Ext.data.JsonP.Ext_FocusManager({"tagname":"class","name":"Ext.FocusManager","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true,"singleton":true},"files":[{"filename":"FocusManager.js","href":"FocusManager.html#Ext-FocusManager"}],"author":[{"tagname":"author","name":"Jarred Nicholls","email":"jarred@sencha.com"}],"docauthor":[{"tagname":"docauthor","name":"Jarred Nicholls","email":"jarred@sencha.com"}],"aliases":{},"alternateClassNames":["Ext.FocusMgr"],"extends":"Ext.Base","mixins":["Ext.util.Observable"],"requires":["Ext.Component","Ext.ComponentManager","Ext.ComponentQuery","Ext.util.HashMap","Ext.util.KeyNav"],"uses":[],"members":[{"name":"enabled","tagname":"property","owner":"Ext.FocusManager","id":"property-enabled","meta":{}},{"name":"focusFrameCls","tagname":"property","owner":"Ext.FocusManager","id":"property-focusFrameCls","meta":{"private":true}},{"name":"focusedCmp","tagname":"property","owner":"Ext.FocusManager","id":"property-focusedCmp","meta":{}},{"name":"whitelist","tagname":"property","owner":"Ext.FocusManager","id":"property-whitelist","meta":{}},{"name":"addXTypeToWhitelist","tagname":"method","owner":"Ext.FocusManager","id":"method-addXTypeToWhitelist","meta":{}},{"name":"clearComponent","tagname":"method","owner":"Ext.FocusManager","id":"method-clearComponent","meta":{"private":true}},{"name":"disable","tagname":"method","owner":"Ext.FocusManager","id":"method-disable","meta":{}},{"name":"enable","tagname":"method","owner":"Ext.FocusManager","id":"method-enable","meta":{}},{"name":"focusLast","tagname":"method","owner":"Ext.FocusManager","id":"method-focusLast","meta":{"private":true}},{"name":"getKeyNav","tagname":"method","owner":"Ext.FocusManager","id":"method-getKeyNav","meta":{"private":true}},{"name":"getRootComponents","tagname":"method","owner":"Ext.FocusManager","id":"method-getRootComponents","meta":{"private":true}},{"name":"handleComponentFocus","tagname":"method","owner":"Ext.FocusManager","id":"method-handleComponentFocus","meta":{"private":true}},{"name":"initDOM","tagname":"method","owner":"Ext.FocusManager","id":"method-initDOM","meta":{"private":true}},{"name":"isWhitelisted","tagname":"method","owner":"Ext.FocusManager","id":"method-isWhitelisted","meta":{"private":true}},{"name":"navigateIn","tagname":"method","owner":"Ext.FocusManager","id":"method-navigateIn","meta":{"private":true}},{"name":"navigateOut","tagname":"method","owner":"Ext.FocusManager","id":"method-navigateOut","meta":{"private":true}},{"name":"navigateSiblings","tagname":"method","owner":"Ext.FocusManager","id":"method-navigateSiblings","meta":{"private":true}},{"name":"onComponentBlur","tagname":"method","owner":"Ext.FocusManager","id":"method-onComponentBlur","meta":{"private":true}},{"name":"onComponentDestroy","tagname":"method","owner":"Ext.FocusManager","id":"method-onComponentDestroy","meta":{"private":true}},{"name":"onComponentFocus","tagname":"method","owner":"Ext.FocusManager","id":"method-onComponentFocus","meta":{"private":true}},{"name":"onComponentHide","tagname":"method","owner":"Ext.FocusManager","id":"method-onComponentHide","meta":{"private":true}},{"name":"removeDOM","tagname":"method","owner":"Ext.FocusManager","id":"method-removeDOM","meta":{"private":true}},{"name":"removeXTypeFromWhitelist","tagname":"method","owner":"Ext.FocusManager","id":"method-removeXTypeFromWhitelist","meta":{}},{"name":"setupSubscriberKeys","tagname":"method","owner":"Ext.FocusManager","id":"method-setupSubscriberKeys","meta":{"private":true}},{"name":"shouldShowFocusFrame","tagname":"method","owner":"Ext.FocusManager","id":"method-shouldShowFocusFrame","meta":{"private":true}},{"name":"beforecomponentfocus","tagname":"event","owner":"Ext.FocusManager","id":"event-beforecomponentfocus","meta":{}},{"name":"componentfocus","tagname":"event","owner":"Ext.FocusManager","id":"event-componentfocus","meta":{}},{"name":"disable","tagname":"event","owner":"Ext.FocusManager","id":"event-disable","meta":{}},{"name":"enable","tagname":"event","owner":"Ext.FocusManager","id":"event-enable","meta":{}}],"code_type":"ext_define","singleton":true,"id":"class-Ext.FocusManager","short_doc":"The FocusManager is responsible for globally:\n\n\nManaging component focus\nProviding basic keyboard navigation\n(optiona...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.FocusMgr</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.FocusManager</strong></div></div><h4>Mixins</h4><div class='dependency'>Ext.util.Observable</div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.Component' rel='Ext.Component' class='docClass'>Ext.Component</a></div><div class='dependency'>Ext.ComponentManager</div><div class='dependency'>Ext.ComponentQuery</div><div class='dependency'>Ext.util.HashMap</div><div class='dependency'><a href='#!/api/Ext.util.KeyNav' rel='Ext.util.KeyNav' class='docClass'>Ext.util.KeyNav</a></div><h4>Files</h4><div class='dependency'><a href='source/FocusManager.html#Ext-FocusManager' target='_blank'>FocusManager.js</a></div></pre><div class='doc-contents'><p>The FocusManager is responsible for globally:</p>\n\n<ol>\n<li>Managing component focus</li>\n<li>Providing basic keyboard navigation</li>\n<li>(optional) Provide a visual cue for focused components, in the form of a focus ring/frame.</li>\n</ol>\n\n\n<p>To activate the FocusManager, simply call <code><a href=\"#!/api/Ext.FocusManager-event-enable\" rel=\"Ext.FocusManager-event-enable\" class=\"docClass\">Ext.FocusManager.enable</a>();</code>. In turn, you may\ndeactivate the FocusManager by subsequently calling <code><a href=\"#!/api/Ext.FocusManager-event-disable\" rel=\"Ext.FocusManager-event-disable\" class=\"docClass\">Ext.FocusManager.disable</a>();</code>.  The\nFocusManager is disabled by default.</p>\n\n<p>To enable the optional focus frame, pass <code>true</code> or <code>{focusFrame: true}</code> to <a href=\"#!/api/Ext.FocusManager-method-enable\" rel=\"Ext.FocusManager-method-enable\" class=\"docClass\">enable</a>.</p>\n\n<p>Another feature of the FocusManager is to provide basic keyboard focus navigation scoped to any <a href=\"#!/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>\nthat would like to have navigation between its child <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>'s.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-enabled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-property-enabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-property-enabled' class='name expandable'>enabled</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether or not the FocusManager is currently enabled ...</div><div class='long'><p>Whether or not the FocusManager is currently enabled</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-focusFrameCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-property-focusFrameCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-property-focusFrameCls' class='name expandable'>focusFrameCls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Ext.baseCSSPrefix + 'focus-frame'</code></p></div></div></div><div id='property-focusedCmp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-property-focusedCmp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-property-focusedCmp' class='name expandable'>focusedCmp</a> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>The currently focused component.</p>\n</div><div class='long'><p>The currently focused component.</p>\n</div></div></div><div id='property-whitelist' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-property-whitelist' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-property-whitelist' class='name expandable'>whitelist</a> : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>A list of xtypes that should ignore certain navigation input keys and\nallow for the default browser event/behavior. ...</div><div class='long'><p>A list of xtypes that should ignore certain navigation input keys and\nallow for the default browser event/behavior. These input keys include:</p>\n\n<ol>\n<li>Backspace</li>\n<li>Delete</li>\n<li>Left</li>\n<li>Right</li>\n<li>Up</li>\n<li>Down</li>\n</ol>\n\n\n<p>The FocusManager will not attempt to navigate when a component is an xtype (or descendents thereof)\nthat belongs to this whitelist. E.g., an <a href=\"#!/api/Ext.form.field.Text\" rel=\"Ext.form.field.Text\" class=\"docClass\">Ext.form.field.Text</a> should allow\nthe user to move the input cursor left and right, and to delete characters, etc.</p>\n<p>Defaults to: <code>['textfield']</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addXTypeToWhitelist' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-addXTypeToWhitelist' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-addXTypeToWhitelist' class='name expandable'>addXTypeToWhitelist</a>( <span class='pre'>xtype</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds the specified xtype to the whitelist. ...</div><div class='long'><p>Adds the specified xtype to the <a href=\"#!/api/Ext.FocusManager-property-whitelist\" rel=\"Ext.FocusManager-property-whitelist\" class=\"docClass\">whitelist</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xtype</span> : String/String[]<div class='sub-desc'><p>Adds the xtype(s) to the <a href=\"#!/api/Ext.FocusManager-property-whitelist\" rel=\"Ext.FocusManager-property-whitelist\" class=\"docClass\">whitelist</a>.</p>\n</div></li></ul></div></div></div><div id='method-clearComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-clearComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-clearComponent' class='name expandable'>clearComponent</a>( <span class='pre'>cmp</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cmp</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disables the FocusManager by turning of all automatic focus management and keyboard navigation ...</div><div class='long'><p>Disables the FocusManager by turning of all automatic focus management and keyboard navigation</p>\n<h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ext.FocusManager-event-disable\" rel=\"Ext.FocusManager-event-disable\" class=\"docClass\">disable</a></li></ul></div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-enable' class='name expandable'>enable</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Enables the FocusManager by turning on all automatic focus management and keyboard navigation ...</div><div class='long'><p>Enables the FocusManager by turning on all automatic focus management and keyboard navigation</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Boolean/Object<div class='sub-desc'><p>Either <code>true</code>/<code>false</code> to turn on the focus frame, or an object\nwith the following options:</p>\n<ul><li><span class='pre'>focusFrame</span> : Boolean (optional)<div class='sub-desc'><p><code>true</code> to show the focus frame around a component when it is focused.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ext.FocusManager-event-enable\" rel=\"Ext.FocusManager-event-enable\" class=\"docClass\">enable</a></li></ul></div></div></div><div id='method-focusLast' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-focusLast' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-focusLast' class='name expandable'>focusLast</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getKeyNav' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-getKeyNav' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-getKeyNav' class='name expandable'>getKeyNav</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getRootComponents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-getRootComponents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-getRootComponents' class='name expandable'>getRootComponents</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-handleComponentFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-handleComponentFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-handleComponentFocus' class='name expandable'>handleComponentFocus</a>( <span class='pre'>cmp, focusEl</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cmp</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>focusEl</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ext.FocusManager-event-beforecomponentfocus\" rel=\"Ext.FocusManager-event-beforecomponentfocus\" class=\"docClass\">beforecomponentfocus</a></li><li><a href=\"#!/api/Ext.FocusManager-event-componentfocus\" rel=\"Ext.FocusManager-event-componentfocus\" class=\"docClass\">componentfocus</a></li></ul></div></div></div><div id='method-initDOM' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-initDOM' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-initDOM' class='name expandable'>initDOM</a>( <span class='pre'>options</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-isWhitelisted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-isWhitelisted' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-isWhitelisted' class='name expandable'>isWhitelisted</a>( <span class='pre'>cmp</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cmp</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-navigateIn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-navigateIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-navigateIn' class='name expandable'>navigateIn</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-navigateOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-navigateOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-navigateOut' class='name expandable'>navigateOut</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-navigateSiblings' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-navigateSiblings' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-navigateSiblings' class='name expandable'>navigateSiblings</a>( <span class='pre'>e, source, parent</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>source</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>parent</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onComponentBlur' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-onComponentBlur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-onComponentBlur' class='name expandable'>onComponentBlur</a>( <span class='pre'>cmp, e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cmp</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onComponentDestroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-onComponentDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-onComponentDestroy' class='name expandable'>onComponentDestroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onComponentFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-onComponentFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-onComponentFocus' class='name expandable'>onComponentFocus</a>( <span class='pre'>cmp, e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cmp</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onComponentHide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-onComponentHide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-onComponentHide' class='name expandable'>onComponentHide</a>( <span class='pre'>cmp</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cmp</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-removeDOM' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-removeDOM' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-removeDOM' class='name expandable'>removeDOM</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-removeXTypeFromWhitelist' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-removeXTypeFromWhitelist' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-removeXTypeFromWhitelist' class='name expandable'>removeXTypeFromWhitelist</a>( <span class='pre'>xtype</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes the specified xtype from the whitelist. ...</div><div class='long'><p>Removes the specified xtype from the <a href=\"#!/api/Ext.FocusManager-property-whitelist\" rel=\"Ext.FocusManager-property-whitelist\" class=\"docClass\">whitelist</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xtype</span> : String/String[]<div class='sub-desc'><p>Removes the xtype(s) from the <a href=\"#!/api/Ext.FocusManager-property-whitelist\" rel=\"Ext.FocusManager-property-whitelist\" class=\"docClass\">whitelist</a>.</p>\n</div></li></ul></div></div></div><div id='method-setupSubscriberKeys' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-setupSubscriberKeys' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-setupSubscriberKeys' class='name expandable'>setupSubscriberKeys</a>( <span class='pre'>container, keys</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>keys</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-shouldShowFocusFrame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-method-shouldShowFocusFrame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-method-shouldShowFocusFrame' class='name expandable'>shouldShowFocusFrame</a>( <span class='pre'>cmp</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cmp</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-beforecomponentfocus' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-event-beforecomponentfocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-event-beforecomponentfocus' class='name expandable'>beforecomponentfocus</a>( <span class='pre'>fm, cmp, previousCmp, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires before a component becomes focused. ...</div><div class='long'><p>Fires before a component becomes focused. Return <code>false</code> to prevent\nthe component from gaining focus.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fm</span> : <a href=\"#!/api/Ext.FocusManager\" rel=\"Ext.FocusManager\" class=\"docClass\">Ext.FocusManager</a><div class='sub-desc'><p>A reference to the FocusManager singleton</p>\n</div></li><li><span class='pre'>cmp</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component that is being focused</p>\n</div></li><li><span class='pre'>previousCmp</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component that was previously focused,\nor <code>undefined</code> if there was no previously focused component.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-componentfocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-event-componentfocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-event-componentfocus' class='name expandable'>componentfocus</a>( <span class='pre'>fm, cmp, previousCmp, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires after a component becomes focused. ...</div><div class='long'><p>Fires after a component becomes focused.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fm</span> : <a href=\"#!/api/Ext.FocusManager\" rel=\"Ext.FocusManager\" class=\"docClass\">Ext.FocusManager</a><div class='sub-desc'><p>A reference to the FocusManager singleton</p>\n</div></li><li><span class='pre'>cmp</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component that has been focused</p>\n</div></li><li><span class='pre'>previousCmp</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component that was previously focused,\nor <code>undefined</code> if there was no previously focused component.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-event-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-event-disable' class='name expandable'>disable</a>( <span class='pre'>fm, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when the FocusManager is disabled ...</div><div class='long'><p>Fires when the FocusManager is disabled</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fm</span> : <a href=\"#!/api/Ext.FocusManager\" rel=\"Ext.FocusManager\" class=\"docClass\">Ext.FocusManager</a><div class='sub-desc'><p>A reference to the FocusManager singleton</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.FocusManager'>Ext.FocusManager</span><br/><a href='source/FocusManager.html#Ext-FocusManager-event-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.FocusManager-event-enable' class='name expandable'>enable</a>( <span class='pre'>fm, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when the FocusManager is enabled ...</div><div class='long'><p>Fires when the FocusManager is enabled</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fm</span> : <a href=\"#!/api/Ext.FocusManager\" rel=\"Ext.FocusManager\" class=\"docClass\">Ext.FocusManager</a><div class='sub-desc'><p>A reference to the FocusManager singleton</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});