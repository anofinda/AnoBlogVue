import type { Tag } from "@/types/Tag";
import http from "@/web/http";
import type { AxiosResponse } from "axios";
class TagService {
  getTags(): Promise<AxiosResponse<Tag[], any>> {
    return http.get("/tags");
  }
  getTagById(id: number): Promise<AxiosResponse<Tag, any>> {
    return http.get("/tag/" + id.toString());
  }
}
export default new TagService();
