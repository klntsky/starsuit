// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["241722133"] = [{"values":[{"sourceSpan":{"start":[39,1],"name":".spago/profunctor-lenses/v6.2.0/src/Data/Lens/Lens.purs","end":[39,66]},"score":0,"packageName":"profunctor-lenses","name":"lens","moduleName":"Data.Lens.Lens","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["s",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"t"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Lens"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a `Lens` from a getter/setter pair.\n\n```purescript\n> species = lens _.species $ _ {species = _}\n> view species {species : \"bovine\"}\n\"bovine\"\n\n> _2 = lens Tuple.snd $ \\(Tuple keep _) new -> Tuple keep new\n```\n\nNote: `_2` is predefined in `Data.Lens.Tuple`.\n"}],"tag":"SearchResult"}]