import { podcastsModel } from "./podcast-model";

export interface filterPodcastModel {
    statusCode: number;
    body: podcastsModel[];
}