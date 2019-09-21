// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["829038770"] = [{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/radox/v1.0.0/src/Internal/Types.purs","end":[38,28]},"score":0,"packageName":"radox","name":"CombinedReducer","moduleName":"Radox.Internal.Types","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Radox","Internal","Types"],"RadoxEffects"]},{"tag":"TypeVar","contents":"combinedActionType"}]},{"tag":"TypeVar","contents":"stateType"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"stateType"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"combinedActionType"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Radox","Internal","Types"],"ReducerReturn"]},{"tag":"TypeVar","contents":"stateType"}]}]}]}]},"arguments":[["combinedActionType",null],["stateType",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"Type for the user-created Combined Reducer function, that takes a Variant of any action, and pipes it to the correct Reducer function, then returns the new state\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,1],"name":".spago/radox/v1.0.0/src/Internal/Types.purs","end":[25,28]},"score":0,"packageName":"radox","name":"EffectfulReducer","moduleName":"Radox.Internal.Types","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Radox","Internal","Types"],"RadoxEffects"]},{"tag":"TypeVar","contents":"combinedActionType"}]},{"tag":"TypeVar","contents":"stateType"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"actionType"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"stateType"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Radox","Internal","Types"],"ReducerReturn"]},{"tag":"TypeVar","contents":"stateType"}]}]}]}]},"arguments":[["actionType",null],["stateType",null],["combinedActionType",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"Type for any user-created Reducer function that takes an Action for a specific reducer, the entire state, and returns a new copy of the state\n"}],"tag":"SearchResult"}]