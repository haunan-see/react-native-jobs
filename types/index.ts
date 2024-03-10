type ApplyOption = {
  publisher: string
  apply_link: string
  is_direct: boolean
}

type JobRequiredExperience = {
  no_experience_required: boolean
  required_experience_in_months: number | null
  experience_mentioned: boolean
  experience_preferred: boolean
}

type JobRequiredEducation = {
  postgraduate_degree: boolean
  professional_certification: boolean
  high_school: boolean
  associates_degree: boolean
  bachelors_degree: boolean
  degree_mentioned: boolean
  degree_preferred: boolean
  professional_certification_mentioned: boolean
}

type JobHighlights = {
  Qualifications: string[]
  Responsibilities: string[]
}

export type Job = {
  job_id: string
  employer_name: string
  employer_logo: string | null
  employer_website: string | null
  employer_company_type: string | null
  job_publisher: string
  job_employment_type: string
  job_title: string
  job_apply_link: string
  job_apply_is_direct: boolean
  job_apply_quality_score: number
  apply_options: ApplyOption[]
  job_description: string
  job_is_remote: boolean
  job_posted_at_timestamp: number
  job_posted_at_datetime_utc: string
  job_city: string
  job_state: string
  job_country: string
  job_latitude: number
  job_longitude: number
  job_benefits: string | null
  job_google_link: string
  job_offer_expiration_datetime_utc: string
  job_offer_expiration_timestamp: number
  job_required_experience: JobRequiredExperience
  job_required_skills: string[] | null
  job_required_education: JobRequiredEducation
  job_experience_in_place_of_education: boolean
  job_min_salary: number | null
  job_max_salary: number | null
  job_salary_currency: string | null
  job_salary_period: string | null
  job_highlights: JobHighlights
  job_job_title: string | null
  job_posting_language: string
  job_onet_soc: string
  job_onet_job_zone: string
}

// Random User Type
type Coordinates = {
  latitude: string
  longitude: string
}

type Timezone = {
  offset: string
  description: string
}

type Street = {
  number: number
  name: string
}

type Location = {
  street: Street
  city: string
  state: string
  country: string
  postcode: number
  coordinates: Coordinates
  timezone: Timezone
}

type Name = {
  title: string
  first: string
  last: string
}

type Login = {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

type Dob = {
  date: string
  age: number
}

type Registered = {
  date: string
  age: number
}

type Id = {
  name: string
  value: string
}

type Picture = {
  large: string
  medium: string
  thumbnail: string
}

export type Result = {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: Dob
  registered: Registered
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
}

type Info = {
  seed: string
  results: number
  page: number
  version: string
}

export type RandomUserData = {
  data: {
    results: Result[]
    info: Info
  }
}
