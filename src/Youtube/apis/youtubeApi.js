import React from "react";
import axios from "axios";

export async function searchByKeyward(keyward = "") {
	return await axios
		.get(`/videos/${keyward ? "search" : "popular"}.json`)
		.then((res) => res.data.items);
}
export async function searchById(id = "") {
	//I could make this function as finding video with given id in the mock data but that would be meaningless bcs there are big differences with real api request.
	return await axios
		.get(`/videos/search.json`)
		.then((res) => res.data.items)
		.then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
}
