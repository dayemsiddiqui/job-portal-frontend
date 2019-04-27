export interface Job {
    _id :Object;
    company: string;
    company_logo: string;
    date: string;
    description: string;
    epoch: string;
    id: string;
    position: string;
    slug: string;
    tags: string[];
    url: string;
}

export interface JobResponse {
    next_url :string;
    prev_url :string;
    result :Job[];
}