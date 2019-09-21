// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["214993655"] = [{"values":[{"sourceSpan":{"start":[403,1],"name":".spago/flare/v6.0.0/src/Flare.purs","end":[405,15]},"score":0,"packageName":"flare","name":"liftSF","moduleName":"Flare","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Signal"],"Signal"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Signal"],"Signal"]},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Flare"],"UI"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Flare"],"UI"]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift a function from `Signal a` to `Signal b` to a function from\n`UI a` to `UI b` without affecting the components. For example:\n\n``` purescript\ndropRepeats :: forall a. (Eq a) => UI a -> UI a\ndropRepeats = liftSF S.dropRepeats\n```\n"}],"tag":"SearchResult"}]