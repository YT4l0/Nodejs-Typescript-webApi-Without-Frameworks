import fs from "fs";
import path from "path";
import { podcastsModel } from "../models/podcast-model";



const pathData = path.join(__dirname, "../repositories/podecast.json");

export const repositoryPodcast = async (podcastName?: string):  Promise<podcastsModel[]>=> {
    const lenguage = "utf-8";

    const rawData =  fs.readFileSync(pathData, "utf-8");
    let jsonfile = JSON.parse(rawData);

    if(podcastName){
        jsonfile = jsonfile.filter((podcast: podcastsModel) => podcast.podcastName  === podcastName);
    }

    return jsonfile;
}
