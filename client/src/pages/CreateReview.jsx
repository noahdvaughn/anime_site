

const CreateReview = ({id, name, year, genre }) => {
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
    <h1>Review for {name}</h1>
    <form>
      
    </form>
  </div>
}
export default CreateReview