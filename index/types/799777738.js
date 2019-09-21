// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["799777738"] = [{"values":[{"sourceSpan":{"start":[64,1],"name":".spago/spork/v1.0.0/src/Spork/App.purs","end":[70,4]},"score":0,"packageName":"spork","name":"AppInstance","moduleName":"Spork.App","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["push",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"RCons","contents":["run",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"RCons","contents":["snapshot",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"model"}]},{"tag":"RCons","contents":["restore",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"model"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"RCons","contents":["subscribe",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Spork","App"],"AppChange"]},{"tag":"TypeVar","contents":"model"}]},{"tag":"TypeVar","contents":"action"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}}]}]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]},"arguments":[["model",null],["action",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"The interface for communicating with a running App.\n   * `push` - Buffers an action to be run on the next tick.\n   * `run` - Initiates a tick of the App, flushing and applying all queued actions.\n   * `snapshot` - Yields the current model of the App.\n   * `restore` - Replaces the current model of the App.\n   * `subscribe` - Listens to App changes (model and actions).\n"}],"tag":"SearchResult"}]