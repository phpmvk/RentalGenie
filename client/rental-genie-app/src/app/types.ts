export type Message = {
  isFromUser: boolean,
  content: string,
  timestamp: number
}

export type Event = {
  title: string,
  description: string,
  start: string,
  end: string,
  color: string,
  agency_id: string,
  listing_id: string,
}