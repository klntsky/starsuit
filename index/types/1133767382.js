// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1133767382"] = [{"values":[{"sourceSpan":{"start":[5282,1],"name":".spago/react-basic-native/v0.1.3/src/React/Basic/Native/Generated.purs","end":[5286,4]},"score":0,"packageName":"react-basic-native","name":"ListViewProps_required","moduleName":"React.Basic.Native.Generated","info":{"values":[{"type":{"tag":"RCons","contents":["dataSource",{"tag":"TypeConstructor","contents":[["React","Basic","Native","Generated"],"ListViewDataSource"]},{"tag":"RCons","contents":["renderRow",{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Uncurried"],"EffectFn4"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},{"tag":"TypeConstructor","contents":[["React","Basic"],"JSX"]}]}},{"tag":"TypeVar","contents":"optional"}]}]},"arguments":[["optional",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"see <https://facebook.github.io/react-native/docs/listview.html#props>\n- `accessibilityActions`\n       Provides an array of custom actions available for accessibility.\n        __*platform* ios__\n- `accessibilityComponentType`\n       In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a “button”).\n       If we were using native buttons, this would work automatically. Since we are using javascript, we need to\n       provide a bit more context for TalkBack. To do so, you must specify the ‘accessibilityComponentType’ property\n       for any UI component. For instances, we support ‘button’, ‘radiobutton_checked’ and ‘radiobutton_unchecked’ and so on.\n        __*platform* android__\n- `accessibilityElementsHidden`\n       A Boolean value indicating whether the accessibility elements contained within this accessibility element\n       are hidden to the screen reader.\n        __*platform* ios__\n- `accessibilityHint`\n       An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.\n- `accessibilityIgnoresInvertColors`\n       https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n        __*platform* ios__\n- `accessibilityLabel`\n       Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\n       label is constructed by traversing all the children and accumulating all the Text nodes separated by space.\n- `accessibilityLiveRegion`\n       Indicates to accessibility services whether the user should be notified when this view changes.\n       Works for Android API >= 19 only.\n       See http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n        __*platform* android__\n- `accessibilityRole`\n       Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.\n- `accessibilityStates`\n       Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.\n- `accessibilityTraits`\n       Accessibility traits tell a person using VoiceOver what kind of element they have selected.\n       Is this element a label? A button? A header? These questions are answered by accessibilityTraits.\n        __*platform* ios__\n- `accessibilityViewIsModal`\n       A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.\n        __*platform* ios__\n- `accessible`\n       When true, indicates that the view is an accessibility element.\n       By default, all the touchable elements are accessible.\n- `alwaysBounceHorizontal`\n       When true the scroll view bounces horizontally when it reaches the end\n       even if the content is smaller than the scroll view itself. The default\n       value is true when `horizontal={true}` and false otherwise.\n- `alwaysBounceVertical`\n       When true the scroll view bounces vertically when it reaches the end\n       even if the content is smaller than the scroll view itself. The default\n       value is false when `horizontal={true}` and true otherwise.\n- `automaticallyAdjustContentInsets`\n       Controls whether iOS should automatically adjust the content inset for scroll views that are placed behind a navigation bar or tab bar/ toolbar.\n       The default value is true.\n- `bounces`\n       When true the scroll view bounces when it reaches the end of the\n       content if the content is larger then the scroll view along the axis of\n       the scroll direction. When false it disables all bouncing even if\n       the `alwaysBounce*` props are true. The default value is true.\n- `bouncesZoom`\n       When true gestures can drive zoom past min/max and the zoom will animate\n       to the min/max value at gesture end otherwise the zoom will not exceed\n       the limits.\n- `canCancelContentTouches`\n       When false once tracking starts won't try to drag if the touch moves.\n       The default value is true.\n- `centerContent`\n       When true the scroll view automatically centers the content when the\n       content is smaller than the scroll view bounds; when the content is\n       larger than the scroll view this property has no effect. The default\n       value is false.\n- `collapsable`\n       Views that are only used to layout their children or otherwise don't draw anything\n       may be automatically removed from the native hierarchy as an optimization.\n       Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.\n- `contentContainerStyle`\n       These styles will be applied to the scroll view content container which\n       wraps all of the child views. Example:\n          return (\n            <ScrollView contentContainerStyle={styles.contentContainer}>\n            </ScrollView>\n          );\n          ...\n          const styles = StyleSheet.create({\n            contentContainer: {\n              paddingVertical: 20\n            }\n          });\n- `contentInset`\n       The amount by which the scroll view content is inset from the edges of the scroll view.\n       Defaults to {0, 0, 0, 0}.\n- `contentInsetAdjustmentBehavior`\n       This property specifies how the safe area insets are used to modify the content area of the scroll view.\n       The default value of this property must be 'automatic'. But the default value is 'never' until RN@0.51.\n- `contentOffset`\n       Used to manually set the starting scroll offset.\n       The default value is {x: 0, y: 0}\n- `dataSource`\n       An instance of [ListView.DataSource](docs/listviewdatasource.html) to use\n- `decelerationRate`\n       A floating-point number that determines how quickly the scroll view\n       decelerates after the user lifts their finger. Reasonable choices include\n          - Normal: 0.998 (the default)\n          - Fast: 0.9\n- `directionalLockEnabled`\n       When true the ScrollView will try to lock to only vertical or horizontal\n       scrolling while dragging.  The default value is false.\n- `enableEmptySections`\n       Flag indicating whether empty section headers should be rendered.\n       In the future release empty section headers will be rendered by\n       default, and the flag will be deprecated. If empty sections are not\n       desired to be rendered their indices should be excluded from\n       sectionID object.\n- `endFillColor`\n       Sometimes a scrollview takes up more space than its content fills.\n       When this is the case, this prop will fill the rest of the\n       scrollview with a color to avoid setting a background and creating\n       unnecessary overdraw. This is an advanced optimization that is not\n       needed in the general case.\n- `hasTVPreferredFocus`\n       *(Apple TV only)* May be set to true to force the Apple TV focus engine to move focus to this view.\n        __*platform* ios__\n- `hitSlop`\n       This defines how far a touch event can start away from the view.\n       Typical interface guidelines recommend touch targets that are at least\n       30 - 40 points/density-independent pixels. If a Touchable view has\n       a height of 20 the touchable height can be extended to 40 with\n       hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}\n       NOTE The touch area never extends past the parent view bounds and\n       the Z-index of sibling views always takes precedence if a touch\n       hits two overlapping views.\n- `horizontal`\n       When true the scroll view's children are arranged horizontally in a row\n       instead of vertically in a column. The default value is false.\n- `importantForAccessibility`\n       Controls how view is important for accessibility which is if it fires accessibility events\n       and if it is reported to accessibility services that query the screen.\n       Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n       Possible values:\n             'auto' - The system determines whether the view is important for accessibility - default (recommended).\n             'yes' - The view is important for accessibility.\n             'no' - The view is not important for accessibility.\n             'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.\n- `indicatorStyle`\n       The style of the scroll indicators.\n       - default (the default), same as black.\n       - black, scroll indicator is black. This style is good against\n          a white content background.\n       - white, scroll indicator is white. This style is good against\n          a black content background.\n- `initialListSize`\n       How many rows to render on initial component mount.  Use this to make\n       it so that the first screen worth of data apears at one time instead of\n       over the course of multiple frames.\n- `invertStickyHeaders`\n       If sticky headers should stick at the bottom instead of the top of the\n       ScrollView. This is usually used with inverted ScrollViews.\n- `isTVSelectable`\n       *(Apple TV only)* When set to true, this view will be focusable\n       and navigable using the Apple TV remote.\n        __*platform* ios__\n- `keyboardDismissMode`\n       Determines whether the keyboard gets dismissed in response to a drag.\n          - 'none' (the default) drags do not dismiss the keyboard.\n          - 'onDrag' the keyboard is dismissed when a drag begins.\n          - 'interactive' the keyboard is dismissed interactively with the drag\n            and moves in synchrony with the touch; dragging upwards cancels the\n            dismissal.\n- `keyboardShouldPersistTaps`\n       Determines when the keyboard should stay visible after a tap.\n       - 'never' (the default), tapping outside of the focused text input when the keyboard is up dismisses the keyboard. When this happens, children won't receive the tap.\n       - 'always', the keyboard will not dismiss automatically, and the scroll view will not catch taps, but children of the scroll view can catch taps.\n       - 'handled', the keyboard will not dismiss automatically when the tap was handled by a children, (or captured by an ancestor).\n       - false, deprecated, use 'never' instead\n       - true, deprecated, use 'always' instead\n- `maximumZoomScale`\n       The maximum allowed zoom scale. The default value is 1.0.\n- `minimumZoomScale`\n       The minimum allowed zoom scale. The default value is 1.0.\n- `nativeID`\n       Used to reference react managed views from native code.\n- `needsOffscreenAlphaCompositing`\n       Whether this view needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior.\n       The default (false) falls back to drawing the component and its children\n       with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value.\n       This default may be noticeable and undesired in the case where the View you are setting an opacity on\n       has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).\n       Rendering offscreen to preserve correct alpha behavior is extremely expensive\n       and hard to debug for non-native developers, which is why it is not turned on by default.\n       If you do need to enable this property for an animation,\n       consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn't need to be redrawn each frame).\n       If that property is enabled, this View will be rendered off-screen once,\n       saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.\n- `nestedScrollEnabled`\n       Enables nested scrolling for Android API level 21+. Nested scrolling is supported by default on iOS.\n- `onAccessibilityAction`\n       When `accessible` is true, the system will try to invoke this function\n       when the user performs an accessibility custom action.\n        __*platform* ios__\n- `onAccessibilityTap`\n       When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n        __*platform* ios__\n- `onChangeVisibleRows`\n       (visibleRows, changedRows) => void\n       Called when the set of visible rows changes.  `visibleRows` maps\n       { sectionID: { rowID: true }} for all the visible rows, and\n       `changedRows` maps { sectionID: { rowID: true | false }} for the rows\n       that have changed their visibility, with true indicating visible, and\n       false indicating the view has moved out of view.\n- `onContentSizeChange`\n       Called when scrollable content view of the ScrollView changes.\n       Handler function is passed the content width and content height as parameters: (contentWidth, contentHeight)\n       It's implemented using onLayout handler attached to the content container which this ScrollView renders.\n- `onEndReached`\n       Called when all rows have been rendered and the list has been scrolled\n       to within onEndReachedThreshold of the bottom.  The native scroll\n       event is provided.\n- `onEndReachedThreshold`\n       Threshold in pixels for onEndReached.\n- `onLayout`\n       Invoked on mount and layout changes with\n       {nativeEvent: { layout: {x, y, width, height}}}.\n- `onMagicTap`\n       When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n        __*platform* ios__\n- `onMomentumScrollBegin`\n       Fires when scroll view has begun moving\n- `onMomentumScrollEnd`\n       Fires when scroll view has finished moving\n- `onMoveShouldSetResponder`\n       Called for every touch move on the View when it is not the responder: does this view want to \"claim\" touch responsiveness?\n- `onMoveShouldSetResponderCapture`\n       onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,\n       where the deepest node is called first.\n       That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.\n       This is desirable in most cases, because it makes sure all controls and buttons are usable.\n       However, sometimes a parent will want to make sure that it becomes responder.\n       This can be handled by using the capture phase.\n       Before the responder system bubbles up from the deepest component,\n       it will do a capture phase, firing on*ShouldSetResponderCapture.\n       So if a parent View wants to prevent the child from becoming responder on a touch start,\n       it should have a onStartShouldSetResponderCapture handler which returns true.\n- `onResponderEnd`\n       If the View returns true and attempts to become the responder, one of the following will happen:\n- `onResponderGrant`\n       The View is now responding for touch events.\n       This is the time to highlight and show the user what is happening\n- `onResponderMove`\n       If the view is responding, the following handlers can be called:\n       The user is moving their finger\n- `onResponderReject`\n       Something else is the responder right now and will not release it\n- `onResponderRelease`\n       Fired at the end of the touch, ie \"touchUp\"\n- `onResponderTerminate`\n       The responder has been taken from the View.\n       Might be taken by other views after a call to onResponderTerminationRequest,\n       or might be taken by the OS without asking (happens with control center/ notification center on iOS)\n- `onResponderTerminationRequest`\n       Something else wants to become responder.\n       Should this view release the responder? Returning true allows release\n- `onScroll`\n       Fires at most once per frame during scrolling.\n       The frequency of the events can be contolled using the scrollEventThrottle prop.\n- `onScrollAnimationEnd`\n       Called when a scrolling animation ends.\n- `onScrollBeginDrag`\n       Fires if a user initiates a scroll gesture.\n- `onScrollEndDrag`\n       Fires when a user has finished scrolling.\n- `onStartShouldSetResponder`\n       A view can become the touch responder by implementing the correct negotiation methods.\n       There are two methods to ask the view if it wants to become responder:\n       Does this view want to become responder on the start of a touch?\n- `onStartShouldSetResponderCapture`\n       onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,\n       where the deepest node is called first.\n       That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.\n       This is desirable in most cases, because it makes sure all controls and buttons are usable.\n       However, sometimes a parent will want to make sure that it becomes responder.\n       This can be handled by using the capture phase.\n       Before the responder system bubbles up from the deepest component,\n       it will do a capture phase, firing on*ShouldSetResponderCapture.\n       So if a parent View wants to prevent the child from becoming responder on a touch start,\n       it should have a onStartShouldSetResponderCapture handler which returns true.\n- `overScrollMode`\n       Used to override default value of overScroll mode.\n          Possible values:\n            - 'auto' - Default value, allow a user to over-scroll this view only if the content is large enough to meaningfully scroll.\n            - 'always' - Always allow a user to over-scroll this view.\n            - 'never' - Never allow a user to over-scroll this view.\n- `pageSize`\n       Number of rows to render per event loop.\n- `pagingEnabled`\n       When true the scroll view stops on multiples of the scroll view's size\n       when scrolling. This can be used for horizontal pagination. The default\n       value is false.\n- `pinchGestureEnabled`\n       When true, ScrollView allows use of pinch gestures to zoom in and out.\n       The default value is true.\n- `pointerEvents`\n       In the absence of auto property, none is much like CSS's none value. box-none is as if you had applied the CSS class:\n       .box-none {\n          pointer-events: none;\n       }\n       .box-none * {\n          pointer-events: all;\n       }\n       box-only is the equivalent of\n       .box-only {\n          pointer-events: all;\n       }\n       .box-only * {\n          pointer-events: none;\n       }\n       But since pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes,\n       we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.\n- `refreshControl`\n       A RefreshControl component, used to provide pull-to-refresh\n       functionality for the ScrollView.\n- `removeClippedSubviews`\n       A performance optimization for improving scroll perf of\n       large lists, used in conjunction with overflow: 'hidden' on the row\n       containers.  Use at your own risk.\n- `renderFooter`\n       () => renderable\n       The header and footer are always rendered (if these props are provided)\n       on every render pass.  If they are expensive to re-render, wrap them\n       in StaticContainer or other mechanism as appropriate.  Footer is always\n       at the bottom of the list, and header at the top, on every render pass.\n- `renderHeader`\n       () => renderable\n       The header and footer are always rendered (if these props are provided)\n       on every render pass.  If they are expensive to re-render, wrap them\n       in StaticContainer or other mechanism as appropriate.  Footer is always\n       at the bottom of the list, and header at the top, on every render pass.\n- `renderRow`\n       (rowData, sectionID, rowID) => renderable\n       Takes a data entry from the data source and its ids and should return\n       a renderable component to be rendered as the row.  By default the data\n       is exactly what was put into the data source, but it's also possible to\n       provide custom extractors.\n- `renderScrollComponent`\n       A function that returns the scrollable component in which the list rows are rendered.\n       Defaults to returning a ScrollView with the given props.\n- `renderSectionHeader`\n       (sectionData, sectionID) => renderable\n       If provided, a sticky header is rendered for this section.  The sticky\n       behavior means that it will scroll with the content at the top of the\n       section until it reaches the top of the screen, at which point it will\n       stick to the top until it is pushed off the screen by the next section\n       header.\n- `renderSeparator`\n       (sectionID, rowID, adjacentRowHighlighted) => renderable\n       If provided, a renderable component to be rendered as the separator below each row\n       but not the last row if there is a section header below.\n       Take a sectionID and rowID of the row above and whether its adjacent row is highlighted.\n- `renderToHardwareTextureAndroid`\n       Whether this view should render itself (and all of its children) into a single hardware texture on the GPU.\n       On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale:\n       in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can just be\n       re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.\n- `scrollEnabled`\n       When false, the content does not scroll. The default value is true\n- `scrollEventThrottle`\n       This controls how often the scroll event will be fired while scrolling (in events per seconds).\n       A higher number yields better accuracy for code that is tracking the scroll position,\n       but can lead to scroll performance problems due to the volume of information being send over the bridge.\n       The default value is zero, which means the scroll event will be sent only once each time the view is scrolled.\n- `scrollIndicatorInsets`\n       The amount by which the scroll view indicators are inset from the edges of the scroll view.\n       This should normally be set to the same value as the contentInset.\n       Defaults to {0, 0, 0, 0}.\n- `scrollPerfTag`\n       Tag used to log scroll performance on this scroll view. Will force\n       momentum events to be turned on (see sendMomentumEvents). This doesn't do\n       anything out of the box and you need to implement a custom native\n       FpsListener for it to be useful.\n        __*platform* android__\n- `scrollRenderAheadDistance`\n       How early to start rendering rows before they come on screen, in\n       pixels.\n- `scrollsToTop`\n       When true the scroll view scrolls to top when the status bar is tapped.\n       The default value is true.\n- `shouldRasterizeIOS`\n       Whether this view should be rendered as a bitmap before compositing.\n       On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children;\n       for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view\n       and quickly composite it during each frame.\n       Rasterization incurs an off-screen drawing pass and the bitmap consumes memory.\n       Test and measure when using this property.\n- `showsHorizontalScrollIndicator`\n       When true, shows a horizontal scroll indicator.\n- `showsVerticalScrollIndicator`\n       When true, shows a vertical scroll indicator.\n- `snapToAlignment`\n       When `snapToInterval` is set, `snapToAlignment` will define the relationship of the the snapping to the scroll view.\n             - `start` (the default) will align the snap at the left (horizontal) or top (vertical)\n             - `center` will align the snap in the center\n             - `end` will align the snap at the right (horizontal) or bottom (vertical)\n- `snapToEnd`\n       Use in conjuction with `snapToOffsets`. By default, the end of the list counts as a snap\n       offset. Set `snapToEnd` to false to disable this behavior and allow the list to scroll freely\n       between its end and the last `snapToOffsets` offset. The default value is true.\n- `snapToInterval`\n       When set, causes the scroll view to stop at multiples of the value of `snapToInterval`.\n       This can be used for paginating through children that have lengths smaller than the scroll view.\n       Used in combination with `snapToAlignment` and `decelerationRate=\"fast\"`. Overrides less\n       configurable `pagingEnabled` prop.\n- `snapToOffsets`\n       When set, causes the scroll view to stop at the defined offsets. This can be used for\n       paginating through variously sized children that have lengths smaller than the scroll view.\n       Typically used in combination with `decelerationRate=\"fast\"`. Overrides less configurable\n       `pagingEnabled` and `snapToInterval` props.\n- `snapToStart`\n       Use in conjuction with `snapToOffsets`. By default, the beginning of the list counts as a\n       snap offset. Set `snapToStart` to false to disable this behavior and allow the list to scroll\n       freely between its start and the first `snapToOffsets` offset. The default value is true.\n- `stickyHeaderIndices`\n       An array of child indices determining which children get docked to the\n       top of the screen when scrolling. For example, passing\n       `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the\n       top of the scroll view. This property is not supported in conjunction\n       with `horizontal={true}`.\n        __*platform* ios__\n- `stickySectionHeadersEnabled`\n       Makes the sections headers sticky. The sticky behavior means that it will scroll with the\n       content at the top of the section until it reaches the top of the screen, at which point it\n       will stick to the top until it is pushed off the screen by the next section header. This\n       property is not supported in conjunction with `horizontal={true}`. Only enabled by default\n       on iOS because of typical platform standards.\n- `style`\n       Style\n- `testID`\n       Used to locate this view in end-to-end tests.\n- `tvParallaxMagnification`\n       *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 1.0.\n        __*platform* ios__\n- `tvParallaxProperties`\n       *(Apple TV only)* Object with properties to control Apple TV parallax effects.\n        __*platform* ios__\n- `tvParallaxShiftDistanceX`\n       *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 2.0.\n        __*platform* ios__\n- `tvParallaxShiftDistanceY`\n       *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 2.0.\n        __*platform* ios__\n- `tvParallaxTiltAngle`\n       *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 0.05.\n        __*platform* ios__\n- `zoomScale`\n       The current scale of the scroll view content. The default value is 1.0.\n"}],"tag":"SearchResult"}]