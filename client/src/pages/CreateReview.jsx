import x from '../assets/x.png'


const CreateReview = ({id, name, year, genre, toggleModal }) => {
  const initialState = {
    userId: '',
    animeId: id,
    animeName: name,
    body: '',
    rating: '',
    yearCreated: '',
    genre: genre
  }


  return <div className="reviewDiv">
    <img src={x} className='icon' onClick={toggleModal}/>
    <h1>Review for {name}</h1>
    <form>
      
    </form>
  </div>
}
export default CreateReview