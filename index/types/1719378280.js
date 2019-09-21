// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1719378280"] = [{"values":[{"sourceSpan":{"start":[111,1],"name":".spago/phoenix/v4.0.0/src/Phoenix.purs","end":[111,102]},"score":0,"packageName":"phoenix","name":"disconnect","moduleName":"Phoenix","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Phoenix"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Phoenix"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[336,1],"name":".spago/fuzzy/v0.2.1/src/Data/Fuzzy.purs","end":[336,72]},"score":0,"packageName":"fuzzy","name":"match","moduleName":"Data.Fuzzy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Fuzzy"],"Fuzzy"]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Funtion to match any polymorhic value against a string pattern\n\nArguments:\n\n- `ignoreCase`: flag for whether or not uppercase and lowercase values should be\n  considered the same or not\n- `extract`: function from your polymorphic `val` to `Object String` so `match`\n  can search through each string for the desired `pattern`\n- `pattern`: string of chars you wish to match for in any of the strings `extract`\n  pulls from the provided `val`\n- `val`: polymorphic value that `match` will pull out strings from via the provided\n  `extract` function and then search through for the chars in `pattern`\n\nReturns:\n\n`Fuzzy` data type with properties useful for highlighting matches, sorting a list of\nvalues, filtering out poor matches, etc.\n\nExamples:\n\n```\n> toMapStr { name, value } = fromFoldable [ Tuple \"name\" name, Tuple \"value\" value ]\n> match true toMapStr \"foo bar\" { name: \"Foo Bar Baz\", value: \"foobar\" }\nFuzzy\n  { original: { name: \"Foo Bar Baz\", value: \"foobar\" }\n  , segments: fromFoldable [ Tuple \"name\" [ Right \"Foo Bar\", Left \" Baz\" ]\n                           , Tuple \"value\" [ Right \"foobar\" ] ]\n  , distance: Distance 0 0 0 0 0 4\n  , ratio: 1 % 1\n  }\n\nSee `test/Main.purs` for more examples\n"}],"tag":"SearchResult"}]