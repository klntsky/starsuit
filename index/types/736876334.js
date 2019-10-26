// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["736876334"] = [{"values":[{"sourceSpan":{"start":[58,1],"name":".spago/simple-i18n/v0.1.0/src/Simple/I18n/Translator.purs","end":[67,12]},"score":0,"packageName":"simple-i18n","name":"translate","moduleName":"Simple.I18n.Translator","info":{"values":[{"type":{"tag":"ForAll","contents":["tail",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["rl",{"tag":"ForAll","contents":["xs",{"tag":"ForAll","contents":["label",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"label"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","RowList"],"ListToRow"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"},{"tag":"TypeVar","contents":"r"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","Extra"],"SListToRowList"],"constraintArgs":[{"tag":"TypeVar","contents":"xs"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Row","Homogeneous"],"Homogeneous"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"label"},{"tag":"TypeConstructor","contents":[["Prim"],"String"]},{"tag":"TypeVar","contents":"tail"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"label"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Simple","I18n","Translator"],"Translator"]},{"tag":"TypeVar","contents":"xs"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get a translated string of a passed label.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[155,1],"name":".spago/variant/v6.0.1/src/Data/Variant.purs","end":[162,6]},"score":0,"packageName":"variant","name":"match","moduleName":"Data.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["rl",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Variant","Internal"],"VariantMatchCases"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"},{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"b"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"REmpty","contents":{}},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"r2"}]}]},{"tag":"TypeVar","contents":"b"}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Combinator for exhaustive pattern matching using an `onMatch` case record.\n```purescript\nmatchFn :: Variant (foo :: Int, bar :: String, baz :: Boolean) -> String\nmatchFn = match\n  { foo: \\foo -> \"Foo: \" <> show foo\n  , bar: \\bar -> \"Bar: \" <> bar\n  , baz: \\baz -> \"Baz: \" <> show baz\n  }\n```\n"}],"tag":"SearchResult"}]