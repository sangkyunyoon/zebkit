YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "zebra.Class()",
        "zebra.Dummy",
        "zebra.Interface()",
        "zebra.PassTextField",
        "zebra.URL",
        "zebra.data.Item",
        "zebra.data.ListModel",
        "zebra.data.Matrix",
        "zebra.data.SingleLineTxt",
        "zebra.data.Text",
        "zebra.data.TextModel",
        "zebra.data.TreeModel",
        "zebra.forName()",
        "zebra.instanceOf()",
        "zebra.io.GET()",
        "zebra.io.HTTP",
        "zebra.io.ID()",
        "zebra.io.JRPC",
        "zebra.io.JRPC.invoke()",
        "zebra.io.POST()",
        "zebra.io.QS",
        "zebra.io.Service",
        "zebra.io.XRPC",
        "zebra.io.XRPC.invoke()",
        "zebra.io.b64decode()",
        "zebra.io.b64encode()",
        "zebra.layout.BorderLayout",
        "zebra.layout.Constraints",
        "zebra.layout.FlowLayout",
        "zebra.layout.GridLayout",
        "zebra.layout.Layout",
        "zebra.layout.Layoutable",
        "zebra.layout.ListLayout",
        "zebra.layout.PercentLayout",
        "zebra.layout.RasterLayout",
        "zebra.layout.StackLayout",
        "zebra.layout.getAbsLocation()",
        "zebra.layout.getDirectAt()",
        "zebra.layout.getDirectChild()",
        "zebra.layout.getMaxPreferredSize()",
        "zebra.layout.getTopParent()",
        "zebra.ready()",
        "zebra.ui.BaseLayer",
        "zebra.ui.BaseList",
        "zebra.ui.BoldLabel",
        "zebra.ui.Border",
        "zebra.ui.BorderPan",
        "zebra.ui.Button",
        "zebra.ui.Checkbox",
        "zebra.ui.Checkbox.Box",
        "zebra.ui.ChildrenListener",
        "zebra.ui.Combo",
        "zebra.ui.Combo.ContentPan",
        "zebra.ui.Combo.EditableContentPan",
        "zebra.ui.Combo.ReadonlyContentPan",
        "zebra.ui.ComboArrowView",
        "zebra.ui.CommandManager",
        "zebra.ui.CompList",
        "zebra.ui.CompRender",
        "zebra.ui.ComponentListener",
        "zebra.ui.Composite",
        "zebra.ui.CompositeView",
        "zebra.ui.CopyCutPaste",
        "zebra.ui.CursorManager",
        "zebra.ui.Dotted",
        "zebra.ui.Etched",
        "zebra.ui.EventManager",
        "zebra.ui.Extender",
        "zebra.ui.FocusListener",
        "zebra.ui.FocusManager",
        "zebra.ui.Font",
        "zebra.ui.Gradient",
        "zebra.ui.Group",
        "zebra.ui.HtmlElement",
        "zebra.ui.HtmlTextArea",
        "zebra.ui.HtmlTextField",
        "zebra.ui.HtmlTextInput",
        "zebra.ui.ImageLabel",
        "zebra.ui.ImagePan",
        "zebra.ui.InputEvent",
        "zebra.ui.KeyEvent",
        "zebra.ui.KeyListener",
        "zebra.ui.Label",
        "zebra.ui.Line",
        "zebra.ui.Link",
        "zebra.ui.List",
        "zebra.ui.List.ViewProvider",
        "zebra.ui.MLabel",
        "zebra.ui.Manager",
        "zebra.ui.Menu",
        "zebra.ui.Menubar",
        "zebra.ui.MouseEvent",
        "zebra.ui.MouseListener",
        "zebra.ui.MouseWheelSupport",
        "zebra.ui.PaintManImpl",
        "zebra.ui.PaintManager",
        "zebra.ui.Panel",
        "zebra.ui.PasswordText",
        "zebra.ui.Pattern",
        "zebra.ui.Picture",
        "zebra.ui.PopupLayer",
        "zebra.ui.PopupManager",
        "zebra.ui.Progress",
        "zebra.ui.Radial",
        "zebra.ui.RadioView",
        "zebra.ui.Radiobox",
        "zebra.ui.Raised",
        "zebra.ui.Render",
        "zebra.ui.RootLayer",
        "zebra.ui.RoundBorder",
        "zebra.ui.Scroll",
        "zebra.ui.ScrollManager",
        "zebra.ui.ScrollPan",
        "zebra.ui.Slider",
        "zebra.ui.SplitPan",
        "zebra.ui.StatePan",
        "zebra.ui.StatusBar",
        "zebra.ui.Sunken",
        "zebra.ui.SwitchManager",
        "zebra.ui.Tabs",
        "zebra.ui.TextArea",
        "zebra.ui.TextField",
        "zebra.ui.TextRender",
        "zebra.ui.Toolbar",
        "zebra.ui.View",
        "zebra.ui.ViewPan",
        "zebra.ui.ViewSet",
        "zebra.ui.WinLayer",
        "zebra.ui.WinListener",
        "zebra.ui.Window",
        "zebra.ui.designer.ShaperPan",
        "zebra.ui.grid.BaseCaption",
        "zebra.ui.grid.CompGridCaption",
        "zebra.ui.grid.CompGridCaption.TitlePan",
        "zebra.ui.grid.DefEditors",
        "zebra.ui.grid.DefViews",
        "zebra.ui.grid.Grid",
        "zebra.ui.grid.GridCaption",
        "zebra.ui.grid.GridStretchPan",
        "zebra.ui.grid.Metrics",
        "zebra.ui.loadImage()",
        "zebra.ui.showModalWindow()",
        "zebra.ui.showWindow()",
        "zebra.ui.tree.DefEditors",
        "zebra.ui.tree.DefViews",
        "zebra.ui.tree.Tree",
        "zebra.ui.zCanvas",
        "zebra.util.Actionable",
        "zebra.util.Bag",
        "zebra.util.Listeners",
        "zebra.util.Position",
        "zebra.util.Position.Metric",
        "zebra.util.findInTree()",
        "zebra.util.newInstance()",
        "zebra.util.rgb"
    ],
    "modules": [
        "data",
        "io",
        "layout",
        "ui",
        "ui.designer",
        "ui.grid",
        "ui.tree",
        "util",
        "zebra"
    ],
    "allModules": [
        {
            "displayName": "data",
            "name": "data",
            "description": "Collection of variouse data models."
        },
        {
            "displayName": "io",
            "name": "io",
            "description": "The module provides number of classes to help to communicate \nwith remote services and servers by HTTP, JSON-RPC, XML-RPC\nprotocols"
        },
        {
            "displayName": "layout",
            "name": "layout",
            "description": "Layout package provides number of classes, interfaces, methods and \nvariables that allows developer easily implement rules based layouting \nof hierarchy of rectangular elements. The package has no relation \nto any concrete UI, but it can be applied to a required UI framework\n\nThe package declares the following constrains constants:\n    \n   - **NONE** no constraints \n   - **LEFT** left alignment constraint\n   - **TOP** top alignment constraint\n   - **RIGHT** right alignment constraint\n   - **BOTTOM** bottom alignment constraint\n   - **CENTER** center alignment constraint\n   - **HORIZONTAL** horizontal elements alignment constraint\n   - **VERTICAL** vertical elements alignment constraint\n   - **TLEFT** top left alignment constraint\n   - **TRIGHT** top right alignment constraint\n   - **BLEFT** bottom left alignment constraint\n   - **BRIGHT** bottom right alignment constraint\n   - **STRETCH** stretch element\n   - **USE_PS_SIZE** use preferred size for an element"
        },
        {
            "displayName": "ui",
            "name": "ui",
            "description": "Zebra UI. The UI is powerful way to create any imaginable \nuser interface for WEB. The idea is based on developing \nhierarchy of UI components that sits and renders on HTML5 \nCanvas element.\n\nWrite zebra UI code in safe place where you can be sure all \nnecessary structure, configurations, etc are ready. The safe \nplace is \"zebra.ready(...)\" method. Development of zebra UI \napplication begins from creation \"zebra.ui.zCanvas\" class, \nthat is starting point and root element of your UI components \nhierarchy. \"zCanvas\" is actually wrapper around HTML5 Canvas \nelement where zebra UI sits on. The typical zebra UI coding \ntemplate is shown below: \n      \n    // build UI in safe place  \n    zebra.ready(function() {\n       // create canvas element \n       var c = new zebra.ui.zCanvas(400, 400);\n           \n       // start placing UI component on c.root panel\n       //set layout manager\n       c.root.setLayout(new zebra.layout.BorderLayout());            \n       //add label to top\n       c.root.add(zebra.layout.TOP,new zebra.ui.Label(\"Top label\")); \n       //add text area to center\n       c.root.add(zebra.layout.CENTER,new zebra.ui.TextArea(\"\"));    \n       //add button area to bottom\n       c.root.add(zebra.layout.BOTTOM,new zebra.ui.Button(\"Button\"));\n       ...\n    });\n\n The latest version of zebra JavaScript is available in repository:\n\n       <script src='http://repo.zebkit.org/latest/zebra.min.js' \n               type='text/javascript'></script>"
        },
        {
            "displayName": "ui.designer",
            "name": "ui.designer",
            "description": "The package contains number of UI components that can be helful to \nmake visiual control of an UI component size and location"
        },
        {
            "displayName": "ui.grid",
            "name": "ui.grid",
            "description": "The package contains number of classes and interfaces to implement\nUI Grid component. The grid allows developers to visualize matrix \nmodel, customize the model data editing and rendering."
        },
        {
            "displayName": "ui.tree",
            "name": "ui.tree",
            "description": "Tree UI component and all related to the component classes and interfaces. \nThe component is graphical representation of a tree model that allows a user \nto navigate over the model item, customize the items rendering and \norganize customizable editing of the items.\n\n       // create tree component instance to visualize the given tree model\n       var tree = new zebra.ui.tree.Tree({ \n           value: \"Root\"\n           kids : [\n               \"Item 1\",\n               \"Item 2\",\n               \"Item 3\"\n           ]\n       });\n\n       // make all tree items editable with text field component \n       tree.setEditorProvider(new zebra.ui.tree.DefEditors());"
        },
        {
            "displayName": "util",
            "name": "util",
            "description": "Number of different utilities methods and classes"
        },
        {
            "displayName": "zebra",
            "name": "zebra",
            "description": "This is the core module that provides powerful easy OOP concept, packaging and number of utility methods.\nThe module has no any dependency from others zebra modules and can be used independently."
        }
    ]
} };
});