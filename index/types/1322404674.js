// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1322404674"] = [{"values":[{"sourceSpan":{"start":[248,3],"name":".spago/quickcheck/v6.1.0/src/Test/QuickCheck/Arbitrary.purs","end":[248,54]},"score":0,"packageName":"quickcheck","name":"arbitraryRecord","moduleName":"Test.QuickCheck.Arbitrary","info":{"values":[{"typeClassArguments":[["list",null],["row",null]],"typeClass":[["Test","QuickCheck","Arbitrary"],"ArbitraryRowList"],"type":{"tag":"ForAll","contents":["list",{"tag":"ForAll","contents":["row",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck","Arbitrary"],"ArbitraryRowList"],"constraintArgs":[{"tag":"TypeVar","contents":"list"},{"tag":"TypeVar","contents":"row"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Data","RowList"],"RLProxy"]},{"tag":"TypeVar","contents":"list"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"row"}]}}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[37,1],"name":".spago/sodium/v2.1.0/src/Operational.purs","end":[37,70]},"score":0,"packageName":"sodium","name":"value","moduleName":"SodiumFRP.Operational","info":{"values":[{"type":{"tag":"ForAll","contents":["cel",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["SodiumFRP","Class"],"SodiumCell"],"constraintArgs":[{"tag":"TypeVar","contents":"cel"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"cel"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["SodiumFRP","Class"],"Stream"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A stream that is guaranteed to fire once in the transaction where value() is invoked, giving\nthe current value of the cell, and thereafter behaves like 'updates' \nfiring for each update/step of the cell's value.\n\nThis is an OPERATIONAL primitive, which is not part of the main Sodium API. \nIt breaks the property of non-detectability of cell steps/updates.\nThe rule with this primitive is that you should only use it in functions\nthat do not allow the caller to detect the cell updates.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[155,3],"name":".spago/routing-duplex/v0.4.0/src/Routing/Duplex.purs","end":[155,46]},"score":0,"packageName":"routing-duplex","name":"params","moduleName":"Routing.Duplex","info":{"values":[{"typeClassArguments":[["r1",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}],["r2",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}]],"typeClass":[["Routing","Duplex"],"RouteDuplexParams"],"type":{"tag":"ForAll","contents":["r1",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ForAll","contents":["r2",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Routing","Duplex"],"RouteDuplexParams"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex"],"RouteDuplex'"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[225,1],"name":".spago/routing-duplex/v0.4.0/src/Routing/Duplex/Parser.purs","end":[225,72]},"score":0,"packageName":"routing-duplex","name":"many","moduleName":"Routing.Duplex.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex","Parser"],"RouteParser"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex","Parser"],"RouteParser"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[210,1],"name":".spago/routing-duplex/v0.4.0/src/Routing/Duplex/Parser.purs","end":[210,82]},"score":0,"packageName":"routing-duplex","name":"many1","moduleName":"Routing.Duplex.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alt"],"Alt"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex","Parser"],"RouteParser"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex","Parser"],"RouteParser"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[73,1],"name":".spago/ordered-collections/v1.6.1/src/Data/Set/NonEmpty.purs","end":[73,80]},"score":0,"packageName":"ordered-collections","name":"fromFoldable","moduleName":"Data.Set.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a set from a foldable structure.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[277,1],"name":".spago/maybe/v4.0.1/src/Data/Maybe.purs","end":[277,60]},"score":0,"packageName":"maybe","name":"optional","moduleName":"Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"One or none.\n\n``` purescript\noptional empty = pure Nothing\noptional (pure x) = pure (Just x)\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[171,1],"name":".spago/lists/v5.4.1/src/Data/List.purs","end":[171,72]},"score":0,"packageName":"lists","name":"manyRec","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A stack-safe version of `many`, at the cost of a `MonadRec` constraint.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[167,1],"name":".spago/lists/v5.4.1/src/Data/List.purs","end":[167,76]},"score":0,"packageName":"lists","name":"many","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Lazy"],"Lazy"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt a computation multiple times, returning as many successful results\nas possible (possibly zero).\n\nThe `Lazy` constraint is used to generate the result lazily, to ensure\ntermination.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[159,1],"name":".spago/lists/v5.4.1/src/Data/List.purs","end":[159,72]},"score":0,"packageName":"lists","name":"someRec","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A stack-safe version of `some`, at the cost of a `MonadRec` constraint.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[155,1],"name":".spago/lists/v5.4.1/src/Data/List.purs","end":[155,76]},"score":0,"packageName":"lists","name":"some","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Lazy"],"Lazy"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt a computation multiple times, requiring at least one success.\n\nThe `Lazy` constraint is used to generate the result lazily, to ensure\ntermination.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[71,1],"name":".spago/pointed-list/v0.4.0/src/Data/List/Pointed.purs","end":[71,59]},"score":0,"packageName":"pointed-list","name":"fromFoldable","moduleName":"Data.List.Pointed","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Pointed"],"Pointed"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Build and set focus at the end.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[117,1],"name":".spago/lists/v5.4.1/src/Data/List/NonEmpty.purs","end":[117,72]},"score":0,"packageName":"lists","name":"fromFoldable","moduleName":"Data.List.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"NonEmptyList"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[181,1],"name":".spago/lists/v5.4.1/src/Data/List/Lazy.purs","end":[181,78]},"score":0,"packageName":"lists","name":"many","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Lazy"],"Lazy"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt a computation multiple times, returning as many successful results\nas possible (possibly zero).\n\nThe `Lazy` constraint is used to generate the result lazily, to ensure\ntermination.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[173,1],"name":".spago/lists/v5.4.1/src/Data/List/Lazy.purs","end":[173,80]},"score":0,"packageName":"lists","name":"some","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Lazy"],"Lazy"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt a computation multiple times, requiring at least one success.\n\nThe `Lazy` constraint is used to generate the result lazily, to ensure\ntermination.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[36,1],"name":".spago/lists/v5.4.1/src/Data/List/Lazy/NonEmpty.purs","end":[36,72]},"score":0,"packageName":"lists","name":"fromFoldable","moduleName":"Data.List.Lazy.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"NonEmptyList"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[139,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView.purs","end":[139,82]},"score":0,"packageName":"array-views","name":"many","moduleName":"Data.ArrayView","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Lazy"],"Lazy"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[136,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView.purs","end":[136,82]},"score":0,"packageName":"array-views","name":"some","moduleName":"Data.ArrayView","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Lazy"],"Lazy"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[153,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView/NonEmpty.purs","end":[156,40]},"score":0,"packageName":"array-views","name":"some","moduleName":"Data.ArrayView.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Lazy"],"Lazy"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"NonEmptyArrayView"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[130,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView/NonEmpty.purs","end":[130,77]},"score":0,"packageName":"array-views","name":"fromFoldable","moduleName":"Data.ArrayView.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"NonEmptyArrayView"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[392,1],"name":".spago/arraybuffer/v10.0.1/src/Data/ArrayBuffer/Typed.purs","end":[392,73]},"score":0,"packageName":"arraybuffer","name":"toArray","moduleName":"Data.ArrayBuffer.Typed","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","ArrayBuffer","Typed"],"TypedArray"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"t"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Turn typed array into an array.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[149,1],"name":".spago/arraybuffer/v10.0.1/src/Data/ArrayBuffer/Typed.purs","end":[149,75]},"score":0,"packageName":"arraybuffer","name":"fromArray","moduleName":"Data.ArrayBuffer.Typed","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","ArrayBuffer","Typed"],"TypedArray"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"t"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a typed array from an input array of values, to be binary serialized.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[200,1],"name":".spago/arrays/v5.3.1/src/Data/Array.purs","end":[200,78]},"score":0,"packageName":"arrays","name":"many","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Lazy"],"Lazy"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt a computation multiple times, returning as many successful results\nas possible (possibly zero).\n\nThe `Lazy` constraint is used to generate the result lazily, to ensure\ntermination.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[192,1],"name":".spago/arrays/v5.3.1/src/Data/Array.purs","end":[192,78]},"score":0,"packageName":"arrays","name":"some","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Lazy"],"Lazy"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt a computation multiple times, requiring at least one success.\n\nThe `Lazy` constraint is used to generate the result lazily, to ensure\ntermination.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[183,1],"name":".spago/arrays/v5.3.1/src/Data/Array/NonEmpty.purs","end":[187,32]},"score":0,"packageName":"arrays","name":"some","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Lazy"],"Lazy"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[155,1],"name":".spago/arrays/v5.3.1/src/Data/Array/NonEmpty.purs","end":[155,73]},"score":0,"packageName":"arrays","name":"fromFoldable","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[122,1],"name":".spago/data-algebrae/v4.0.0/src/Data/Algebra/Array.purs","end":[126,28]},"score":0,"packageName":"data-algebrae","name":"sort","moduleName":"Data.Algebra.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["anything",{"tag":"ForAll","contents":["value",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"value"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"value"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Algebra","Array"],"Update"]},{"tag":"TypeVar","contents":"anything"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Given an array of orderable elements, produce the array of incremental\noperations to sort them.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[37,1],"name":".spago/gen/v2.1.1/src/Control/Monad/Gen/Common.purs","end":[37,57]},"score":0,"packageName":"gen","name":"genMaybe","moduleName":"Control.Monad.Gen.Common","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a generator that outputs `Maybe` values, choosing a value from\nanother generator for the inner value. The generator has a 75% chance of\nreturning a `Just` over a `Nothing`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[31,1],"name":".spago/gen/v2.1.1/src/Control/Monad/Gen/Common.purs","end":[31,62]},"score":0,"packageName":"gen","name":"genIdentity","moduleName":"Control.Monad.Gen.Common","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Identity"],"Identity"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a generator that outputs `Identity` values, choosing a value from\nanother generator for the inner value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[58,1],"name":".spago/control/v4.1.0/src/Control/Extend.purs","end":[58,52]},"score":0,"packageName":"control","name":"duplicate","moduleName":"Control.Extend","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Extend"],"Extend"],"constraintArgs":[{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"w"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Duplicate a comonadic context.\n\n`duplicate` is dual to `Control.Bind.join`.\n"}],"tag":"SearchResult"}]