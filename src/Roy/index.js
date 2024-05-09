import './index.css'
const Roy = props => {
  const {musicDetails} = props
  const {id, imageUrl, name, genre, duration, onDelete} = musicDetails
  const P = () => {
    onDelete(id)
  }
  return (
    <li className="ool">
      <div className="pop">
        <img src={imageUrl} alt="track" />
        <div className="mol">
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="pop">
        <p className="lop">{duration}</p>
        <button type="button" onClick={P} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="img"
          />
        </button>
      </div>
    </li>
  )
}
export default Roy
