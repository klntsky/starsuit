// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["312418202"] = [{"values":[{"sourceSpan":{"start":[151,1],"name":".spago/sized-vectors/v3.1.0/src/Data/Vec.purs","end":[151,60]},"score":0,"packageName":"sized-vectors","name":"index","moduleName":"Data.Vec","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["i",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"i"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Lt"],"constraintArgs":[{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get the element at a given index inside a vector. Index out of bounds errors\nare caught at compile time.\n\nExample:\n\n    myVector = 1 +> 2 +> 3 +> 4 +> empty\n    value = index myVector d2\n    -- value == 3\n    value = index myVector d4\n    -- out of bounds so does not type check\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,1],"name":".spago/subcategory/v0.2.0/src/Slackable.purs","end":[30,8]},"score":0,"packageName":"subcategory","name":"slacken","moduleName":"Control.Subcategory.Slackable","info":{"values":[{"type":{"tag":"ForAll","contents":["v1",{"tag":"ForAll","contents":["v0",{"tag":"ForAll","contents":["c",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v1"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Slackable"],"Slackable"],"constraintArgs":[{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeVar","contents":"v1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeVar","contents":"v1"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]