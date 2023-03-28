import Client from './api'

export const GetSeasonal = async () => {
  const seasonal = await Client.get('/api/mal/seasonal')
  return seasonal
}
