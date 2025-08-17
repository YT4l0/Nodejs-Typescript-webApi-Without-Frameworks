import { repositoryPodcast } from "../repositories/podcasts-repository"
import { filterPodcastModel } from "../models/filter-podcast-model";
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined ): Promise<filterPodcastModel> => {

    let responseFormat: filterPodcastModel = {
        statusCode: 0,
        body: [],
        
    }



    const queryString = podcastName?.split("?p=")[1] ?? "";
    
    const data = await repositoryPodcast(queryString);

    responseFormat.statusCode = data.length !== 0 ? statusCode.OK : statusCode.NoContent

    responseFormat.body = data;

    return responseFormat;

}