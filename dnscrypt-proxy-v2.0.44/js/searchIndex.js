Search.appendIndex(
    [
                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\DiagnosticsController",
            "name": "DiagnosticsController",
            "summary": "An\u0020ApiControllerBase\u0020class\u0020used\u0020to\u0020perform\u0020various\u0020diagnostics\u0020for\ndnscrypt\u002Dproxy.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-DiagnosticsController.html"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\DiagnosticsController\u003A\u003AindexAction\u0028\u0029",
            "name": "indexAction",
            "summary": "Function\u0020indexAction\u0028\u0029\u0020is\u0020an\u0020API\u0020endpoint\u0020to\u0020call\u0020when\u0020no\u0020parameters\u0020are\nprovided\u0020for\u0020the\u0020API.\u0020Can\u0020be\u0020used\u0020to\u0020test\u0020the\u0020is\u0020working.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-DiagnosticsController.html#method_indexAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\DiagnosticsController\u003A\u003AcommandAction\u0028\u0029",
            "name": "commandAction",
            "summary": "An\u0020API\u0020endpoint\u0020to\u0020execute\u0020pre\u002Ddefined\u0020diagnostic\u0020commands.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-DiagnosticsController.html#method_commandAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\FileController",
            "name": "FileController",
            "summary": "This\u0020Controller\u0020extends\u0020ApiMutableModelControllerBase\u0020to\u0020create\u0020API\u0020endpoints\nfor\u0020file\u0020uploading\u0020and\u0020downloading.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-FileController.html"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\FileController\u003A\u003AuploadAction\u0028\u0029",
            "name": "uploadAction",
            "summary": "Allows\u0020uploading\u0020a\u0020file\u0020using\u0020a\u0020specific\u0020pre\u002Ddefined\u0020list\u0020of\u0020destination\nfiles\u0020within\u0020the\u0020file\u0020system.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-FileController.html#method_uploadAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\FileController\u003A\u003AdownloadAction\u0028\u0029",
            "name": "downloadAction",
            "summary": "Calls\u0020the\u0020configd\u0020backend\u0020to\u0020retrive\u0020a\u0020pre\u002Ddefined\u0020file,\u0020and\u0020return\u0020its\ncontents.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-FileController.html#method_downloadAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\FileController\u003A\u003AremoveAction\u0028\u0029",
            "name": "removeAction",
            "summary": "Allows\u0020removing\u0020a\u0020file\u0020using\u0020a\u0020specific\u0020pre\u002Ddefined\u0020list\u0020of\u0020target\u0020files\nwithin\u0020the\u0020file\u0020system.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-FileController.html#method_removeAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\ServiceController",
            "name": "ServiceController",
            "summary": "An\u0020ApiMutableServiceControllerBase\u0020based\u0020class\u0020which\u0020is\u0020used\u0020to\u0020control\nthe\u0020dnscrypt\u002Dproxy\u0020service.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-ServiceController.html"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\ServiceController\u003A\u003AreconfigureAction\u0028\u0029",
            "name": "reconfigureAction",
            "summary": "This\u0020function\u0020creates\u0020an\u0020API\u0020endpoint\u0020for\u0020the\u0020reconfigure\u0020action.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-ServiceController.html#method_reconfigureAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\ServiceController\u003A\u003A\u0024internalServiceClass",
            "name": "internalServiceClass",
            "summary": "Reference\u0020the\u0020model\u0020class,\u0020which\u0020is\u0020used\u0020to\u0020determine\u0020if\u0020this\u0020service\u0020is\nenabled\u0020\u0028links\u0020the\u0020model\u0020to\u0020the\u0020service\u0029",
            "url": "classes/OPNsense-Dnscryptproxy-Api-ServiceController.html#property_internalServiceClass"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\ServiceController\u003A\u003A\u0024internalServiceTemplate",
            "name": "internalServiceTemplate",
            "summary": "Before\u0020starting\u0020the\u0020service\u0020it\u0020will\u0020call\u0020configd\u0020to\u0020generate\u0020configuration\ndata,\u0020in\u0020this\u0020case\u0020it\u0020would\u0020execute\u0020the\u0020equivalent\u0020of\u0020configctl\u0020template\nreload\u0020OPNsense\/HelloWorld\u0020on\u0020the\u0020console",
            "url": "classes/OPNsense-Dnscryptproxy-Api-ServiceController.html#property_internalServiceTemplate"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\ServiceController\u003A\u003A\u0024internalServiceEnabled",
            "name": "internalServiceEnabled",
            "summary": "Which\u0020section\u0020of\u0020the\u0020model\u0020contains\u0020a\u0020boolean\u0020defining\u0020if\u0020the\u0020service\u0020is\nenabled\u0020\u0028settings.enabled\u0029",
            "url": "classes/OPNsense-Dnscryptproxy-Api-ServiceController.html#property_internalServiceEnabled"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\ServiceController\u003A\u003A\u0024internalServiceName",
            "name": "internalServiceName",
            "summary": "Refers\u0020to\u0020the\u0020action\u0020template,\u0020where\u0020it\u0020can\u0020find\nstart\/stop\/restart\/status\/reload\u0020actions\u0020\u0028actions_helloworld.conf\u0029",
            "url": "classes/OPNsense-Dnscryptproxy-Api-ServiceController.html#property_internalServiceName"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController",
            "name": "SettingsController",
            "summary": "An\u0020ApiMutableModelControllerBase\u0020class\u0020used\u0020to\u0020perform\u0020settings\u0020related\nactions\u0020for\u0020dnscrypt\u002Dproxy.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController\u003A\u003Ainitialize\u0028\u0029",
            "name": "initialize",
            "summary": "Initilize\u0020the\u0020class,\u0020populate\u0020the\u0020valid_grid_targets\u0020with\u0020values\u0020from\u0020the\nform\u0020XML\u0020for\u0020this\u0020form.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html#method_initialize"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController\u003A\u003AindexAction\u0028\u0029",
            "name": "indexAction",
            "summary": "An\u0020API\u0020endpoint\u0020to\u0020call\u0020when\u0020no\u0020parameters\u0020are\nprovided\u0020for\u0020the\u0020API.\u0020Can\u0020be\u0020used\u0020to\u0020test\u0020the\u0020API\u0020is\u0020working.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html#method_indexAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController\u003A\u003AgridAction\u0028\u0029",
            "name": "gridAction",
            "summary": "This\u0020is\u0020a\u0020super\u0020API\u0020for\u0020Bootgrid\u0020which\u0020will\u0020do\u0020all\u0020the\u0020things.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html#method_gridAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController\u003A\u003AsearchGrids\u0028\u0029",
            "name": "searchGrids",
            "summary": "Form\u0020parser\u0020for\u0020bootgrid\u0020fields.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html#method_searchGrids"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController\u003A\u003AexportAction\u0028\u0029",
            "name": "exportAction",
            "summary": "Export\u0020entries\u0020out\u0020of\u0020an\u0020ArrayField\u0020type\u0020node\u0020in\u0020the\u0020config..\n\nUses\u0020a\u0020pre\u002Ddefined\u0020set\u0020of\u0020targets\u0020\u0028paths\u0029\u0020to\u0020prevent\u0020arbitrary\nexport\u0020of\u0020data.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html#method_exportAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController\u003A\u003AimportAction\u0028\u0029",
            "name": "importAction",
            "summary": "Import\u0020data\u0020provided\u0020by\u0020the\u0020user\u0020in\u0020a\u0020file\u0020upload\u0020into\u0020ArrayField\u0020type\nnodes\u0020in\u0020the\u0020config.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html#method_importAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController\u003A\u003ArestoreSourcesAction\u0028\u0029",
            "name": "restoreSourcesAction",
            "summary": "Special\u0020function\u0020to\u0020restore\u0020the\u0020default\u0020sources\u0020into\u0020the\u0020config.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html#method_restoreSourcesAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController\u003A\u003AbootgridConfigd\u0028\u0029",
            "name": "bootgridConfigd",
            "summary": "Execute\u0020a\u0020configd\u0020command,\u0020and\u0020return\u0020the\u0020output\u0020in\u0020a\u0020format\u0020consumable\nby\u0020bootgrid.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html#method_bootgridConfigd"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController\u003A\u003A\u0024internalModelName",
            "name": "internalModelName",
            "summary": "This\u0020variable\u0020defines\u0020what\u0020to\u0020call\u0020the\u0020\u003Cmodel\u003E\u0020that\u0020is\u0020defined\u0020for\u0020this\nClass\u0020by\u0020Phalcon.\u0020That\u0020is\u0020to\u0020say\u0020the\u0020model\u0020XML\u0020that\u0020has\u0020the\u0020same\u0020name\u0020as\nthis\u0020controller\u0027s\u0020name,\u0020\u0022Settings\u0022.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html#property_internalModelName"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController\u003A\u003A\u0024internalModelClass",
            "name": "internalModelClass",
            "summary": "Base\u0020model\u0020class\u0020to\u0020reference.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html#property_internalModelClass"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api\\SettingsController\u003A\u003A\u0024valid_grid_targets",
            "name": "valid_grid_targets",
            "summary": "Array\u0020for\u0020defining\u0020valid\u0020targets\u0020to\u0020use\u0020with\u0020the\u0020functions\u0020within\nthis\u0020class.",
            "url": "classes/OPNsense-Dnscryptproxy-Api-SettingsController.html#property_valid_grid_targets"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\ControllerBase",
            "name": "ControllerBase",
            "summary": "Class\u0020ControllerBase\u0020implements\u0020core\u0020controller\u0020for\u0020OPNsense\u0020framework",
            "url": "classes/OPNsense-Dnscryptproxy-ControllerBase.html"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\ControllerBase\u003A\u003AparseFormNode\u0028\u0029",
            "name": "parseFormNode",
            "summary": "Special\u0020version\u0020of\u0020parseFromNode\u0028\u0029\u0020which\u0020recurses\u0020deeper\u0020\u0028infinite\u0029,\nand\u0020supports\u0020arrays\u0020at\u0020all\u0020levels,\u0020and\u0020attributes\u0020at\u0020levels\u0020deeper\u0020than\nthan\u0020original.",
            "url": "classes/OPNsense-Dnscryptproxy-ControllerBase.html#method_parseFormNode"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\ControllerBase\u003A\u003AgetForm\u0028\u0029",
            "name": "getForm",
            "summary": "parse\u0020an\u0020xml\u0020type\u0020form",
            "url": "classes/OPNsense-Dnscryptproxy-ControllerBase.html#method_getForm"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\DiagnosticsController",
            "name": "DiagnosticsController",
            "summary": "An\u0020IndexController\u002Dbased\u0020class\u0020that\u0020creates\u0020an\u0020endpoint\u0020to\u0020display\u0020the\nDiagnostics\u0020page\u0020in\u0020the\u0020UI.",
            "url": "classes/OPNsense-Dnscryptproxy-DiagnosticsController.html"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\DiagnosticsController\u003A\u003AindexAction\u0028\u0029",
            "name": "indexAction",
            "summary": "This\u0020function\u0020creates\u0020an\u0020endpoint\u0020in\u0020the\u0020UI\u0020for\u0020the\u0020Diagnostics\u0020Controller.",
            "url": "classes/OPNsense-Dnscryptproxy-DiagnosticsController.html#method_indexAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\LogsController",
            "name": "LogsController",
            "summary": "An\u0020IndexController\u002Dbased\u0020class\u0020that\u0020creates\u0020an\u0020endpoint\u0020to\u0020display\u0020the\u0020Log\npage\u0020in\u0020the\u0020UI.",
            "url": "classes/OPNsense-Dnscryptproxy-LogsController.html"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\LogsController\u003A\u003AindexAction\u0028\u0029",
            "name": "indexAction",
            "summary": "This\u0020function\u0020creates\u0020an\u0020endpoint\u0020in\u0020the\u0020UI\u0020for\u0020the\u0020Logs\u0020Controller.",
            "url": "classes/OPNsense-Dnscryptproxy-LogsController.html#method_indexAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\SettingsController",
            "name": "SettingsController",
            "summary": "An\u0020IndexController\u002Dbased\u0020class\u0020that\u0020creates\u0020an\u0020endpoint\u0020to\u0020display\u0020the\u0020Settings\npage\u0020in\u0020the\u0020UI.",
            "url": "classes/OPNsense-Dnscryptproxy-SettingsController.html"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\SettingsController\u003A\u003AindexAction\u0028\u0029",
            "name": "indexAction",
            "summary": "This\u0020function\u0020creates\u0020an\u0020endpoint\u0020in\u0020the\u0020UI\u0020for\u0020the\u0020Settings\u0020Controller.",
            "url": "classes/OPNsense-Dnscryptproxy-SettingsController.html#method_indexAction"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Settings",
            "name": "Settings",
            "summary": "Class\u0020Settings\u0020is\u0020a\u0020BaseModel\u0020class\u0020used\u0020when\u0020retriving\u0020model\u0020data\nvia\u0020getModel\u0028\u0029.",
            "url": "classes/OPNsense-Dnscryptproxy-Settings.html"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Settings\u003A\u003A\u0024name",
            "name": "name",
            "summary": "The\u0020name\u0020of\u0020this\u0020plugin.",
            "url": "classes/OPNsense-Dnscryptproxy-Settings.html#property_name"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Settings\u003A\u003A\u0024label",
            "name": "label",
            "summary": "A\u0020label\u0020to\u0020use\u0020for\u0020this\u0020plugin.",
            "url": "classes/OPNsense-Dnscryptproxy-Settings.html#property_label"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Settings\u003A\u003A\u0024api_name",
            "name": "api_name",
            "summary": "The\u0020API\u0020endpoint\u0020name\u0020as\u0020created\u0020by\u0020Phalcon.",
            "url": "classes/OPNsense-Dnscryptproxy-Settings.html#property_api_name"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Settings\u003A\u003A\u0024configd_name",
            "name": "configd_name",
            "summary": "The\u0020name\u0020to\u0020use\u0020to\u0020reference\u0020the\u0020service\u0020with\u0020configd.",
            "url": "classes/OPNsense-Dnscryptproxy-Settings.html#property_configd_name"
        },                {
            "fqsen": "\\",
            "name": "\\",
            "summary": "",
            "url": "namespaces/default.html"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy\\Api",
            "name": "Api",
            "summary": "",
            "url": "namespaces/opnsense-dnscryptproxy-api.html"
        },                {
            "fqsen": "\\OPNsense\\Dnscryptproxy",
            "name": "Dnscryptproxy",
            "summary": "",
            "url": "namespaces/opnsense-dnscryptproxy.html"
        },                {
            "fqsen": "\\OPNsense",
            "name": "OPNsense",
            "summary": "",
            "url": "namespaces/opnsense.html"
        }            ]
);
