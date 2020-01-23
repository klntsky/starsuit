// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2010765575"] = [{"values":[{"sourceSpan":{"start":[108,1],"name":".spago/halogen-select/v5.0.0-rc.4/src/Select/Setters.purs","end":[112,53]},"score":0,"packageName":"halogen-select","name":"setItemProps","moduleName":"Select.Setters","info":{"values":[{"type":{"tag":"ForAll","contents":["act",{"tag":"ForAll","contents":["props",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","HTML","Properties"],"IProp"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select","Setters"],"ItemProps"]},{"tag":"TypeVar","contents":"props"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select"],"Action"]},{"tag":"TypeVar","contents":"act"}]}}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","HTML","Properties"],"IProp"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select","Setters"],"ItemProps"]},{"tag":"TypeVar","contents":"props"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select"],"Action"]},{"tag":"TypeVar","contents":"act"}]}}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A helper function that augments an array of `IProps` with `ItemProps`. It\nallows items to be highlighted and selected.\n\nThis expects an index for use in highlighting. It's useful in combination\nwith `mapWithIndex`:\n\n```purescript\nrenderItem index itemHTML =\n  HH.li (setItemProps index [ props ]) [ itemHTML ]\n\nrender = renderItem `mapWithIndex` itemsArray\n```\n"}],"tag":"SearchResult"}]