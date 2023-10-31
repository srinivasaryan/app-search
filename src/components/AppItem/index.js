// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <div className="apps-container-element">
      <img src={imageUrl} alt={appName} className="app-image-size" />
      <h1 className="app-heading-element">{appName}</h1>
    </div>
  )
}
export default AppItem
