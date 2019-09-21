// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1926948317"] = [{"values":[{"sourceSpan":{"start":[98,3],"name":".spago/typedenv/v0.0.1/src/TypedEnv.purs","end":[98,61]},"score":0,"packageName":"typedenv","name":"readValue","moduleName":"TypedEnv","info":{"values":[{"typeClassArguments":[["ty",null]],"typeClass":[["TypedEnv"],"ReadValue"],"type":{"tag":"ForAll","contents":["ty",{"tag":"ConstrainedType","contents":[{"constraintClass":[["TypedEnv"],"ReadValue"],"constraintArgs":[{"tag":"TypeVar","contents":"ty"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["TypedEnv"],"EnvError"]}]},{"tag":"TypeVar","contents":"ty"}]}]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[235,1],"name":".spago/optparse/v3.0.1/src/Options/Applicative/Builder.purs","end":[235,67]},"score":0,"packageName":"optparse","name":"command","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"ParserInfo"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"CommandFields"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Add a command to a subparser option.\n\nSuggested usage for multiple commands is to add them to a single subparser. e.g.\n\n```purescript\nsample :: Parser Sample\nsample = subparser\n       ( command \"hello\"\n         (info hello (progDesc \"Print greeting\"))\n      <> command \"goodbye\"\n         (info goodbye (progDesc \"Say goodbye\"))\n       )\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[17,1],"name":".spago/encoding/v0.0.5/src/Data/TextDecoder.purs","end":[17,64]},"score":0,"packageName":"encoding","name":"decode","moduleName":"Data.TextDecoder","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","TextDecoder"],"Encoding"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Decodes an `ArrayBufferView` with the given `Encoding`.\nReturns an `Error` if decoding fails.\n"}],"tag":"SearchResult"}]