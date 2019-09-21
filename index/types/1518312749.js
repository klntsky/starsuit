// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1518312749"] = [{"values":[{"sourceSpan":{"start":[85,1],"name":".spago/quickcheck/v6.1.0/src/Test/QuickCheck/Gen.purs","end":[85,45]},"score":0,"packageName":"quickcheck","name":"unGen","moduleName":"Test.QuickCheck.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","State"],"State"]},{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"GenState"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Exposes the underlying State implementation.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[143,1],"name":".spago/pathy/v7.0.1/src/Pathy/Path.purs","end":[143,38]},"score":0,"packageName":"pathy","name":"in'","moduleName":"Pathy.Path","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Name"],"Name"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Path"],"Path"]},{"tag":"TypeConstructor","contents":[["Pathy","Phantom"],"Rel"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a path which points to a relative directory or file of the specified name.\nIn most cases [`dir'`](#v:dir') or [`file'`](#v:file') should be used instead,\nbut it's still there in case the segment type is going to be determined based\non some type variable.\n\n``` purescript\np == maybe p (\\(Tuple r n) -> r </> in' n) (peel p)\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[117,1],"name":".spago/pathy/v7.0.1/src/Pathy/Path.purs","end":[117,56]},"score":0,"packageName":"pathy","name":"file","moduleName":"Pathy.Path","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Pathy","Name"],"IsName"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"s"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Path"],"Path"]},{"tag":"TypeConstructor","contents":[["Pathy","Phantom"],"Rel"]}]},{"tag":"TypeConstructor","contents":[["Pathy","Phantom"],"File"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a path which points to a relative file of the specified name.\n\nInstead of accepting a runtime value, this function accepts a type-level\nstring via a proxy, to ensure the constructed name is not empty.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[128,1],"name":".spago/pathy/v7.0.1/src/Pathy/Path.purs","end":[128,54]},"score":0,"packageName":"pathy","name":"dir","moduleName":"Pathy.Path","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Pathy","Name"],"IsName"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"s"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Path"],"Path"]},{"tag":"TypeConstructor","contents":[["Pathy","Phantom"],"Rel"]}]},{"tag":"TypeConstructor","contents":[["Pathy","Phantom"],"Dir"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a path which points to a relative directory of the specified name.\n\nInstead of accepting a runtime value, this function accepts a type-level\nstring via a proxy, to ensure the constructed name is not empty.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/freedom/v1.2.0/src/Freedom/TransformF/Simple.purs","end":[27,68]},"score":0,"packageName":"freedom","name":"transformF","moduleName":"Freedom.TransformF.Simple","info":{"values":[{"type":{"tag":"ForAll","contents":["state",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Freedom","Store"],"Query"]},{"tag":"TypeVar","contents":"state"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Freedom","TransformF","Type"],"TransformF"]},{"tag":"TypeConstructor","contents":[["Freedom","TransformF","Simple"],"VQueryF"]}]},{"tag":"TypeVar","contents":"state"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"An interpreter for `FreeT`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[276,3],"name":".spago/foreign-generic/v10.0.0/src/Foreign/Generic/Class.purs","end":[276,39]},"score":0,"packageName":"foreign-generic","name":"countArgs","moduleName":"Foreign.Generic.Class","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Foreign","Generic","Class"],"GenericCountArgs"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Foreign","Generic","Class"],"GenericCountArgs"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[32,1],"name":".spago/encoding/v0.0.5/src/Data/TextDecoder.purs","end":[32,56]},"score":0,"packageName":"encoding","name":"decodeUtf8","moduleName":"Data.TextDecoder","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Decodes a UTF-8 encoded typed array to a (UTF-16) `String`.\nReturns an `Error` if decoding fails.\nThis function is provided as a convenience as UTF-8 is the\nencoding you will probably be using most of the time.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[207,1],"name":".spago/bytestrings/v7.0.0/src/Data/ByteString.purs","end":[207,48]},"score":0,"packageName":"bytestrings","name":"foldableOfOctet","moduleName":"Data.ByteString","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ByteString"],"Foldable"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Leibniz"],"~"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeConstructor","contents":[["Data","ByteString"],"Octet"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"*O(1)* Witness that foldable byte strings can only contain octets.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[127,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView/NonEmpty.purs","end":[127,68]},"score":0,"packageName":"array-views","name":"toNonEmpty","moduleName":"Data.ArrayView.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"NonEmptyArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","NonEmpty"],"NonEmpty"]},{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[152,1],"name":".spago/arrays/v5.3.0/src/Data/Array/NonEmpty.purs","end":[152,60]},"score":0,"packageName":"arrays","name":"toNonEmpty","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","NonEmpty"],"NonEmpty"]},{"tag":"TypeConstructor","contents":[["Prim"],"Array"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]