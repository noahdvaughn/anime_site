import Client from './api'

export const GetSeasonal = async () => {
  const seasonal = await Client.get('/mal/seasonal')
  return seasonal
}
export const GetDetails = async (id) => {
  const details = await Client.get(`/mal/details/${id}`)
  return details
}
export const GetSearchedAnime = async (search) => {
  search = encodeURIComponent(search)
  const searchedAnime = await Client.get(`/mal/search/${search}`)
  return searchedAnime
}
