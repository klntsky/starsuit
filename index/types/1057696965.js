// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1057696965"] = [{"values":[{"sourceSpan":{"start":[56,1],"name":".spago/polyform/v0.8.0/src/Polyform/Input/Foreign.purs","end":[62,48]},"score":0,"packageName":"polyform","name":"attr","moduleName":"Polyform.Input.Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["field",{"tag":"ForAll","contents":["e",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"field"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Polyform","Validation"],"Validation"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Polyform","Validation"],"Validation"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Polyform","Input","Foreign"],"Attr"]},{"tag":"TypeVar","contents":"field"}]}}]}}]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeVar","contents":"v"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"You should define your fields using something\nlike:\n\ndata MyField\n  = IntField (IntField ())\n  | StringField (StringField ())\n  | NumberField (NumberField ())\n  | Object (Attrs MyField)\n\nWhat is really imporant is that `Attrs` wrapper should be recursive.\n"}],"tag":"SearchResult"}]