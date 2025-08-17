import { IncomingMessage, ServerResponse, STATUS_CODES } from "http";
import {serviceListEpisodes} from "../services/list_episodes-service"
import { serviceFilterEpisodes } from "../services/filter-episodes";
import { statusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { filterPodcastModel } from "../models/filter-podcast-model";

const DEFAULT_CONTENT = { "Content-type": ContentType.JSON }

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
   const Content = await serviceListEpisodes();

  res.writeHead(statusCode.OK, DEFAULT_CONTENT );
  res.end(
    JSON.stringify(Content)
  );
};

export const getFilterEpisodes = async (
  req: IncomingMessage, 
  res: ServerResponse
)=>{

  

  const Content: filterPodcastModel = await serviceFilterEpisodes(req.url);

  res.writeHead(Content.statusCode, DEFAULT_CONTENT);
  res.end(JSON.stringify(Content.body));

}
