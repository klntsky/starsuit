// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["148881369"] = [{"values":[{"sourceSpan":{"start":[97,1],"name":".spago/halogen-formless/v1.0.0-rc.1/src/Formless/Action.purs","end":[104,88]},"score":0,"packageName":"halogen-formless","name":"modifyValidate","moduleName":"Formless.Action","info":{"values":[{"type":{"tag":"ForAll","contents":["o",{"tag":"ForAll","contents":["i",{"tag":"ForAll","contents":["e",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["inputs",{"tag":"ForAll","contents":["sym",{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["form",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputFunction"]}]}},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"inputs"}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputFunction"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"o"}]}},{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"inputs"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"sym"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"i"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"RCons","contents":["modifyValidate",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Data","Time","Duration"],"Milliseconds"]}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputFunction"]}]}}]},{"tag":"TypeVar","contents":"v"}]}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Modify the input value of a form field at the specified label, also triggering\nvalidation to run on the field, with the provided function.\n\n```purescript\n[ HE.onChange \\_ -> Just $ F.modifyValidate _enabled not ]\n```\n"}],"tag":"SearchResult"}]