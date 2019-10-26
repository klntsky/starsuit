// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["909708554"] = [{"values":[{"sourceSpan":{"start":[131,1],"name":".spago/sodium/v2.1.0/src/Stream.purs","end":[131,85]},"score":0,"packageName":"sodium","name":"accum","moduleName":"SodiumFRP.Stream","info":{"values":[{"type":{"tag":"ForAll","contents":["str",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["SodiumFRP","Class"],"SodiumStream"],"constraintArgs":[{"tag":"TypeVar","contents":"str"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"str"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["SodiumFRP","Class"],"Cell"]},{"tag":"TypeVar","contents":"b"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Accumulate on input event, outputting the new state each time.\nThe function may construct FRP logic or use 'sample' \nin which case it is equivalent to 'snapshot'ing the cell. \nApart from this the function must be referentially transparent.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[175,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/Traversable.purs","end":[175,73]},"score":0,"packageName":"foldable-traversable","name":"scanr","moduleName":"Data.Traversable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Traversable"],"Traversable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Fold a data structure from the right, keeping all intermediate results\ninstead of only the final result. Note that the initial value does not\nappear in the result (unlike Haskell's `Prelude.scanr`).\n\n```purescript\nscanr (+) 0 [1,2,3] = [6,5,3]\nscanr (flip (-)) 10 [1,2,3] = [4,5,7]\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[150,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/Traversable.purs","end":[150,73]},"score":0,"packageName":"foldable-traversable","name":"scanl","moduleName":"Data.Traversable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Traversable"],"Traversable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Fold a data structure from the left, keeping all intermediate results\ninstead of only the final result. Note that the initial value does not\nappear in the result (unlike Haskell's `Prelude.scanl`).\n\n```purescript\nscanl (+) 0  [1,2,3] = [1,3,6]\nscanl (-) 10 [1,2,3] = [9,7,4]\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[312,1],"name":".spago/arraybuffer/v10.0.1/src/Data/ArrayBuffer/Typed.purs","end":[312,87]},"score":0,"packageName":"arraybuffer","name":"foldr","moduleName":"Data.ArrayBuffer.Typed","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","ArrayBuffer","Typed"],"TypedArray"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"b"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Fold a list from the right, accumulating the result using the\nspecified function.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[301,1],"name":".spago/arraybuffer/v10.0.1/src/Data/ArrayBuffer/Typed.purs","end":[301,87]},"score":0,"packageName":"arraybuffer","name":"foldl","moduleName":"Data.ArrayBuffer.Typed","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","ArrayBuffer","Typed"],"TypedArray"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"b"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Fold a list from the left, accumulating the result using the\nspecified function.\n"}],"tag":"SearchResult"}]