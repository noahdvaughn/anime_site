import Client from './api'

export const GetRecs = async () => {
  const recs = await Client.get('/rec/all')
  return recs
}
export const GetRecsByUserId = async (id) => {
  const recs = await Client.get(`/rec/by-user/${id}`)
  return recs
}
export const GetRecsByAnimeId = async (id) => {
  const recs = await Client.get(`/rec/by-anime/${id}`)
  return recs
}
export const CreateRec = async (data) => {
  await Client.post('/rec/create', data)
}
export const UpdateRec = async (id, data) => {
  await Client.put(`/rec/update/${id}`, data)
}
export const DeleteRec = async (id, data) => {
  await Client.delete(`/rec/update/${id}`, data)
}
