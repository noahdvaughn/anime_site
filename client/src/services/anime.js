import Client from './api'

export const GetSeasonal = async () => {
  const seasonal = await Client.get('/api/mal/seasonal')
  return seasonal
}
export const GetDetails = async (id) => {
  const details = await Client.get(`/api/mal/details/${id}`)
  return details
}
export const GetSearchedAnime = async (search) => {
  search = encodeURIComponent(search)
  const searchedAnime = await Client.get(`/api/mal/search/${search}`)
  return searchedAnime
}
