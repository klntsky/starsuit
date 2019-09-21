// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["451541754"] = [{"values":[{"sourceSpan":{"start":[42,1],"name":".spago/safely/v4.0.1/src/Control/Safely.purs","end":[46,9]},"score":0,"packageName":"safely","name":"safely","moduleName":"Control.Safely","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"ForAll","contents":["safe",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"safe"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"safe"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"safe"},{"tag":"TypeVar","contents":"m"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"safe"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Make a control operator stack-safe.\n\nFor any `MonadRec`, we can form the `Monad` `FreeT Identity m` in which\narbitrarily-associated binds are stack-safe.\n\nThis function performs the wrapping and unwrapping for us, and provides a\npair of natural transformations to lift and lower actions to and from the\nsafe monad.\n\nThis means that we can write stack-safe monadic code for any `MonadRec` by\nsimply writing the naive implementation, and wrapping it in a call to\n`safely`:\n\n```purescript\ntraverseSafely :: forall m a. MonadRec m => (a -> m Unit) -> List a -> m Unit\ntraverseSafely f xs = safely \\lift lower ->\n  let\n    go Nil = pure unit\n    go (Cons x xs) = do\n      lift (f x)\n      go xs\n  in go xs\n```\n"}],"tag":"SearchResult"}]