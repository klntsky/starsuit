// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1920320660"] = [{"values":[{"sourceSpan":{"start":[58,1],"name":".spago/httpure/v0.10.0/src/HTTPure/Server.purs","end":[61,18]},"score":0,"packageName":"httpure","name":"serve'","moduleName":"HTTPure.Server","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","HTTP"],"ListenOptions"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["HTTPure","Request"],"Request"]}]},{"tag":"TypeConstructor","contents":[["HTTPure","Response"],"ResponseM"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeConstructor","contents":[["HTTPure","Server"],"ServerM"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Given a `ListenOptions` object, a function mapping `Request` to\n`ResponseM`, and a `ServerM` containing effects to run on boot, creates and\nruns a HTTPure server without SSL.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[94,1],"name":".spago/httpure/v0.10.0/src/HTTPure/Server.purs","end":[97,17]},"score":0,"packageName":"httpure","name":"serve","moduleName":"HTTPure.Server","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["HTTPure","Request"],"Request"]}]},{"tag":"TypeConstructor","contents":[["HTTPure","Response"],"ResponseM"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeConstructor","contents":[["HTTPure","Server"],"ServerM"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create and start a server. This is the main entry point for HTTPure. Takes\na port number on which to listen, a function mapping `Request` to\n`ResponseM`, and a `ServerM` containing effects to run after the server has\nbooted (usually logging). Returns an `ServerM` containing the server's\neffects.\n"}],"tag":"SearchResult"}]