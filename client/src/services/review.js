import Client from './api'

export const GetReviews = async () => {
  const recs = await Client.get('/review/all')
  return recs
}
export const GetAllByUserId = async (id) => {
  const recs = await Client.get(`/review/by-user/${id}`)
  return recs
}
// export const GetReviewsByAnimeId = async (id) => {
//   const recs = await Client.get(`/review/by-anime/${id}`)
//   return recs
// }
export const MakeReview = async (data) => {
  await Client.post('/review/create', data)
}
export const UpdateReview = async (id, data) => {
  await Client.put(`/review/update/${id}`, data)
}
export const DeleteReview = async (id) => {
  await Client.delete(`/review/delete/${id}`)
}
