// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1196228115"] = [{"values":[{"sourceSpan":{"start":[63,1],"name":".spago/react-basic/v11.0.0/src/React/Basic/Events.purs","end":[63,84]},"score":0,"packageName":"react-basic","name":"handler","moduleName":"React.Basic.Events","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Events"],"EventFn"]},{"tag":"TypeConstructor","contents":[["React","Basic","Events"],"SyntheticEvent"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]},{"tag":"TypeConstructor","contents":[["React","Basic","Events"],"EventHandler"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create an `EventHandler`, given an `EventFn` and a callback.\n\nFor example:\n\n```purs\ninput { onChange: handler targetValue\n                    \\value -> setState \\_ -> { value }\n      }\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[63,1],"name":".spago/react-basic/v11.0.0/src/React/Basic/DOM/Events.purs","end":[63,84]},"score":0,"packageName":"react-basic","name":"capture","moduleName":"React.Basic.DOM.Events","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Events"],"EventFn"]},{"tag":"TypeConstructor","contents":[["React","Basic","Events"],"SyntheticEvent"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]},{"tag":"TypeConstructor","contents":[["React","Basic","Events"],"EventHandler"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a capturing\\* `EventHandler` to send an action when an event occurs. For\nmore complicated event handlers requiring `Effect`, use `handler` from `React.Basic.Events`.\n\n__\\*calls `preventDefault` and `stopPropagation`__\n\n__*See also:* `update`, `capture_`, `monitor`, `React.Basic.Events`__\n"}],"tag":"SearchResult"}]