import Client from './api'

export const GetWatchedByUserId = async (id) => {
  const watched = await Client.get(`/watched/by-user/${id}`)
  return watched
}

export const CreateReview = async (id, data) => {
  await Client.post(`/watched/create/${id}`, data)
}
export const UpdateWatched = async (id, data) => {
  await Client.put(`/watched/update/${id}`, data)
}
export const DeleteWatched = async (id, data) => {
  await Client.delete(`/watched/delete/${id}`, data)
}
