/** 
 * Accessbility Role communicates the purpose of a component to the user of an assistive technology,
 * This tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.
 * values pulled from official react native docs
 * https://facebook.github.io/react-native/docs/accessibility#accessibilityrole-ios-android
 */
export type AccessbilityRole =
  | 'none' /** Used when the element has no role */
  | 'button' /** Used when the element should be treated as a button */
  | 'link' /** Used when the element should be treated as a link */
  | 'search' /** Used when the text field element should also be treated as a search field */
  | 'image' /** Used when the element should be treated as an image. Can be combined with button or link, for example */
  | 'keyboardkey' /** Used when the element acts as a keyboard key */
  | 'text' /** Used when the element should be treated as static text that cannot change */
  | 'adjustable' /** Used when an element can be "adjusted" (e.g. a slider) */
  | 'imagebutton' /** Used when the element should be treated as a button and is also an image. */
  | 'header' /** Used when an element acts as a header for a content section (e.g. the title of a navigation bar) */
  | 'summary' /** Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches */
  | 'alert' /** Used when an element contains important text to be presented to the user */
  | 'checkbox' /** Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state */
  | 'combobox' /** Used when an element represents a combo box, which allows the user to select among several choices */
  | 'menu' /** Used when the component is a menu of choices */
  | 'menubar' /** Used when a component is a container of multiple menus */
  | 'menuitem' /** Used to represent an item within a menu */
  | 'progressbar' /** Used to represent a component which indicates progress of a task */
  | 'radio' /** Used to represent a radio button */
  | 'radiogroup' /** Used to represent a group of radio buttons */
  | 'scrollbar' /** Used to represent a scroll bar. */
  | 'spinbar' /** Used to represent a button which opens a list of choices */
  | 'switch' /** Used to represent a switch which can be turned on and off */
  | 'tab' /** Used to represent a tab */
  | 'tablist' /** Used to represent a list of tabs */
  | 'timer' /** Used to represent a timer */
  | 'toolbar' /** Used to represent a tool bar (a container of action buttons or components) */;
