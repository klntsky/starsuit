// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1248229886"] = [{"values":[{"sourceSpan":{"start":[106,1],"name":".spago/querydsl/v0.10.1/src/QueryDsl/SQLite3.purs","end":[106,121]},"score":0,"packageName":"querydsl","name":"runSelectMaybeQuery","moduleName":"QueryDsl.SQLite3","info":{"values":[{"type":{"tag":"ForAll","contents":["cols",{"tag":"ConstrainedType","contents":[{"constraintClass":[["QueryDsl"],"ConstantsToRecord"],"constraintArgs":[{"tag":"TypeVar","contents":"cols"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["SQLite3","Internal"],"DBConnection"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["QueryDsl"],"SelectQuery"]},{"tag":"TypeVar","contents":"cols"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"cols"}]}]}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run a `SelectQuery` and either return `Nothing`, if there are no results,\n`Just result` if there is a single result, or otherwise throw an error.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[85,1],"name":".spago/querydsl/v0.10.1/src/QueryDsl/SQLite3.purs","end":[85,120]},"score":0,"packageName":"querydsl","name":"runSelectManyQuery","moduleName":"QueryDsl.SQLite3","info":{"values":[{"type":{"tag":"ForAll","contents":["cols",{"tag":"ConstrainedType","contents":[{"constraintClass":[["QueryDsl"],"ConstantsToRecord"],"constraintArgs":[{"tag":"TypeVar","contents":"cols"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["SQLite3","Internal"],"DBConnection"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["QueryDsl"],"SelectQuery"]},{"tag":"TypeVar","contents":"cols"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"cols"}]}]}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run a `SelectQuery` and return all the results.\n"}],"tag":"SearchResult"}]