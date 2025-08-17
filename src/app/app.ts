import * as http from "http";
import { httpMethod } from "../utils/http-method";
import { Routes } from "../routes/routes";
import { getListEpisodes, getFilterEpisodes } from "../controlers/podcasts-controller";


export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    
    const baseUrl = request.url?.split("?")[0];

   

    //listar podcasts
    if (request.method === httpMethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(request, response);
    }

    if (request.method === httpMethod.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(request, response);
    }
  }