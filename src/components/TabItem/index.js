// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, tabSelection, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTab = () => {
    tabSelection(tabId)
  }

  const tabElement = isActive ? 'tab-border' : ''
  return (
    <div>
      <button
        className={`${tabElement} tab-button`}
        type="button"
        onClick={onClickTab}
      >
        <p className="tab-text">{displayText}</p>
      </button>
    </div>
  )
}
export default TabItem
