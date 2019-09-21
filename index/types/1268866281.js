// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1268866281"] = [{"values":[{"sourceSpan":{"start":[95,1],"name":".spago/sodium/v2.1.0/src/Stream.purs","end":[95,120]},"score":0,"packageName":"sodium","name":"snapshot","moduleName":"SodiumFRP.Stream","info":{"values":[{"type":{"tag":"ForAll","contents":["str",{"tag":"ForAll","contents":["cel",{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["SodiumFRP","Class"],"SodiumStream"],"constraintArgs":[{"tag":"TypeVar","contents":"str"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["SodiumFRP","Class"],"SodiumCell"],"constraintArgs":[{"tag":"TypeVar","contents":"cel"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"str"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"cel"},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["SodiumFRP","Class"],"Stream"]},{"tag":"TypeVar","contents":"c"}]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Return a stream whose events are the result of the combination using the specified\nfunction of the input stream's event value and the value of the cell at that time.\n   \nThere is an implicit delay: State updates caused by event firings being held with\n'hold' don't become visible as the cell's current value until the following transaction. \nTo put this another way, 'snapshot' always sees the value of a cell as it was \nbefore any state changes from the current transaction.\n"}],"tag":"SearchResult"}]