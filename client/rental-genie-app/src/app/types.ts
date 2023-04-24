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

export type PublicListing = {
  _id: string,
  size: number,
  bedrooms: number,
  bathrooms: number,
  description: string,
  rent_amount: number,
  available: boolean,
  images: string[],
  __v: string,
  city: string,
  district: string,
  header: string,
  floor: number,
  furnished: boolean,
  pets_allowed: boolean,
  parking_spots: number,
  close_to_public_transport: boolean,
}