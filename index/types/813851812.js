// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["813851812"] = [{"values":[{"sourceSpan":{"start":[29,1],"name":".spago/halogen-formless/v1.0.0-rc.1/src/Formless/Types/Component.purs","end":[37,4]},"score":0,"packageName":"halogen-formless","name":"Spec","moduleName":"Formless.Types.Component","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["render",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"PublicState"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"ComponentHTML"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"act"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"m"}]}]},{"tag":"RCons","contents":["handleAction",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"act"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"HalogenM"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]},{"tag":"TypeVar","contents":"act"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"msg"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"RCons","contents":["handleQuery",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"query"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"HalogenM"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]},{"tag":"TypeVar","contents":"act"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"msg"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]},{"tag":"RCons","contents":["handleEvent",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"Event"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"HalogenM"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]},{"tag":"TypeVar","contents":"act"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"msg"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"RCons","contents":["receive",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"input"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"act"}]}]},{"tag":"RCons","contents":["initialize",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"act"}]},{"tag":"RCons","contents":["finalize",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"act"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]}]}]},"arguments":[["form",null],["st",null],["query",null],["act",null],["slots",null],["input",null],["msg",null],["m",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A type representing the various functions that can be provided to extend\nthe Formless component. Usually only the `render` function is required,\nbut you may also provide others. For example, if you have child components,\nyou can tell Formless how to manage those child components by adding a\nhandler action and `handleAction` case.\n"}],"tag":"SearchResult"}]