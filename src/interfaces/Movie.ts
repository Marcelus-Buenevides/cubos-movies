import { ReactNode } from "react";

export interface Movie {
  vote_count: ReactNode;
  tagline: ReactNode;
  genres: any;
	id: number;
	title: string;
	original_title: string;
	popularity: number;
	poster_path: string;
	overview: string;
	release_date: string;
	vote_average: number;
	genre_ids: number[];
	videos?: {
	  results: { key: string; site: string; type: string }[];
	};
  }
  