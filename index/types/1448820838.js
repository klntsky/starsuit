// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1448820838"] = [{"values":[{"sourceSpan":{"start":[252,1],"name":".spago/variant/v6.0.1/src/Data/Functor/Variant.purs","end":[252,40]},"score":0,"packageName":"variant","name":"default","moduleName":"Data.Functor.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Combinator for partial matching with a default value in case of failure.\n```purescript\ncaseFn :: forall r. VariantF (foo :: FProxy Maybe, bar :: FProxy (Tuple String) | r) Int -> String\ncaseFn = default \"No match\"\n # on (SProxy :: SProxy \"foo\") (\\foo -> \"Foo: \" <> maybe \"nothing\" show foo)\n # on (SProxy :: SProxy \"bar\") (\\bar -> \"Bar: \" <> show (snd bar))\n```\n"}],"tag":"SearchResult"}]