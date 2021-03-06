import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.token;

interface Item {
	name: string;
	release_date: string;
	total_tracks: number;
	id: string;
	images: { url: string }[];
}
interface Albums {
	albums: {
		items: Item[];
		next: string | null;
	};
}

interface Tracks {
	items: { preview_url: string; name: string }[];
}
interface Album {
	name: string;
	label: string;
	tracks: Tracks;
}

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.spotify.com/v1",
		prepareHeaders(headers) {
			headers.set("authorization", `Bearer ${token}`);
			return headers;
		},
	}),
	endpoints(builder) {
		return {
			fetchAlbums: builder.query<Albums, string>({
				query(albumName = "pink floyd") {
					return `/search?query=${encodeURIComponent(albumName)}&type=album`;
				},
			}),
			fetchTracks: builder.query<Album, string>({
				query(albumID) {
					return `/albums/${albumID}`;
				},
			}),
		};
	},
});

export const { useFetchAlbumsQuery, useFetchTracksQuery } = apiSlice;
