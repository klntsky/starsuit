// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1847309853"] = [{"values":[{"sourceSpan":{"start":[89,1],"name":".spago/strongcheck/v4.1.1/src/Test/StrongCheck.purs","end":[89,87]},"score":0,"packageName":"strongcheck","name":"quickCheckWithSeed","moduleName":"Test.StrongCheck","info":{"values":[{"type":{"tag":"ForAll","contents":["prop",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","StrongCheck"],"Testable"],"constraintArgs":[{"tag":"TypeVar","contents":"prop"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Test","StrongCheck","LCG"],"Seed"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"prop"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Checks the proposition for the specified number of random values, starting with a specific seed.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[38,1],"name":".spago/spec-quickcheck/v3.1.0/src/Test/Spec/QuickCheck.purs","end":[43,27]},"score":0,"packageName":"spec-quickcheck","name":"quickCheckPure","moduleName":"Test.Spec.QuickCheck","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck"],"Testable"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Random","LCG"],"Seed"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Runs a Testable with a given seed and number of inputs.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[151,1],"name":".spago/quickcheck/v6.1.0/src/Test/QuickCheck.purs","end":[151,83]},"score":0,"packageName":"quickcheck","name":"quickCheckPure","moduleName":"Test.QuickCheck","info":{"values":[{"type":{"tag":"ForAll","contents":["prop",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck"],"Testable"],"constraintArgs":[{"tag":"TypeVar","contents":"prop"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Random","LCG"],"Seed"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"prop"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Test","QuickCheck"],"Result"]}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test a property, returning all test results as a List.\n\nThe first argument is the _random seed_ to be passed to the random generator.\nThe second argument is the number of tests to run.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[104,1],"name":".spago/quickcheck/v6.1.0/src/Test/QuickCheck.purs","end":[105,70]},"score":0,"packageName":"quickcheck","name":"quickCheckWithSeed","moduleName":"Test.QuickCheck","info":{"values":[{"type":{"tag":"ForAll","contents":["prop",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck"],"Testable"],"constraintArgs":[{"tag":"TypeVar","contents":"prop"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Random","LCG"],"Seed"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"prop"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A variant of the `quickCheck'` function that accepts a specific seed as\nwell as the number tests that should be run.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[119,1],"name":".spago/simple-jwt/v1.1.1/src/Node/Simple/Jwt.purs","end":[119,95]},"score":0,"packageName":"simple-jwt","name":"encode","moduleName":"Node.Simple.Jwt","info":{"values":[{"type":{"tag":"ForAll","contents":["payload",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Simple","JSON"],"WriteForeign"],"constraintArgs":[{"tag":"TypeVar","contents":"payload"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Simple","Jwt"],"Secret"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Simple","Jwt"],"Algorithm"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"payload"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Node","Simple","Jwt"],"Jwt"]}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Encode to JWT.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[77,1],"name":".spago/matrices/v4.0.0/src/Matrix.purs","end":[77,39]},"score":0,"packageName":"matrices","name":"repeat","moduleName":"Matrix","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Repeats the same value and creates a width × height `Matrix`.\n\n```purescript\n> repeat 2 3 \"X\"\n\"X\", \"X\"\n\"X\", \"X\"\n\"X\", \"X\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[129,1],"name":".spago/jquery/v5.0.0/src/JQuery.purs","end":[129,73]},"score":0,"packageName":"jquery","name":"setProp","moduleName":"JQuery","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["JQuery"],"JQuery"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Set a single property.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[93,1],"name":".spago/jquery/v5.0.0/src/JQuery.purs","end":[93,73]},"score":0,"packageName":"jquery","name":"setAttr","moduleName":"JQuery","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["JQuery"],"JQuery"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Set a single attribute.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[259,1],"name":".spago/flare/v6.0.0/src/Flare.purs","end":[259,44]},"score":0,"packageName":"flare","name":"button","moduleName":"Flare","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Flare"],"Label"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Flare"],"UI"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a button which yields the first value in the default state and\nthe second value when it is pressed.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[48,1],"name":".spago/higher-order/v0.2.0/src/Data/PartialOrd.purs","end":[48,59]},"score":0,"packageName":"higher-order","name":"pClamp","moduleName":"Data.PartialOrd","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","PartialOrd"],"PartialOrd"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[45,1],"name":".spago/higher-order/v0.2.0/src/Data/PartialOrd.purs","end":[45,67]},"score":0,"packageName":"higher-order","name":"pBetween","moduleName":"Data.PartialOrd","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","PartialOrd"],"PartialOrd"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[43,1],"name":".spago/bucketchain-simple-api/v1.0.0/src/Bucketchain/SimpleAPI/JSON.purs","end":[43,90]},"score":0,"packageName":"bucketchain-simple-api","name":"failure","moduleName":"Bucketchain.SimpleAPI.JSON","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Simple","JSON"],"WriteForeign"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Bucketchain","SimpleAPI","Response"],"Headers"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Bucketchain","SimpleAPI","Response"],"StatusCode"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Bucketchain","SimpleAPI","JSON"],"FailureMessages"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Bucketchain","SimpleAPI","JSON"],"JSON"]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a failure response.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,1],"name":".spago/bucketchain-simple-api/v1.0.0/src/Bucketchain/SimpleAPI/JSON.purs","end":[39,76]},"score":0,"packageName":"bucketchain-simple-api","name":"success","moduleName":"Bucketchain.SimpleAPI.JSON","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Simple","JSON"],"WriteForeign"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Bucketchain","SimpleAPI","Response"],"Headers"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Bucketchain","SimpleAPI","Response"],"StatusCode"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Bucketchain","SimpleAPI","JSON"],"JSON"]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a success response.\n"}],"tag":"SearchResult"}]